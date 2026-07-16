import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import { transporter } from "./send-email";
import { readFileSync } from "fs";
import path from 'path';
import { after } from "next/server";

const ca = readFileSync(path.join(process.cwd(), 'app/certs/prod-ca-2021.crt'), 'utf8');

export const auth = betterAuth({
	baseURL: {  
        allowedHosts: [
            "localhost:3000",
            "127.0.0.1:3000",
			"*.vercel.app",
		],
    },
	trustedOrigins: [
        "http://localhost:3000",
		"127.0.0.1:3000",
    ],
	database: new Pool({
		connectionString: process.env.POSTGRES_URL_NON_POOLING,
		ssl: { ca, },
	}),
	emailAndPassword: { 
		enabled: true,
		requireEmailVerification: true, 
        autoSignIn: false,
        onExistingUserSignUp: async ({ user }, request) => {
            after(async () => {
                try {
                    await transporter.sendMail({
                        to: user.email,
                        subject: "Sign-up attempt with your email",
                        text: "Someone tried to create an account using your email address. If this was you, try signing in instead. If not, you can safely ignore this email.",
                    });
                } catch (err) {
                    console.error("Failed to send notification email.", err);
                }
            })
        },
        sendResetPassword: async ({user, url, token}, request) => {
            after(async () => {
                try {
                    await transporter.sendMail({
                        to: user.email,
                        subject: "Reset your password",
                        // text: "",
                        html: `<p>Click the link to reset your password:</p> <a href=${url}>Reset Password</a>`
                    });
                } catch (err) {
                    console.error("Failed to send password reset email.", err);
                };
            });
        },
        onPasswordReset: async ({ user }, request) => {
        // your logic here
            console.log(`Password for user ${user.email} has been reset.`);
        },
	},
	emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            after(async () => {
                try {
                    await transporter.sendMail({
                        to: user.email,
                        subject: "Verify your email address",
                        // text: "",
                        html: `<p>Click the link to verify your email:</p> <a href=${url}>Verify</a>`
                    })
                } catch (err) {
                    console.error("Failed to send reset email", err);
                };
            });
        },
		sendOnSignUp: true,
    }
})

type Session = typeof auth.$Infer.Session 

