"use client";
import { useState, useTransition } from 'react';
import { authClient } from "@/app/lib/auth-client";
import Link from 'next/link';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isPending, startTransition ] = useTransition();

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		
		startTransition(async () => {
			await authClient.signIn.email({
			email, // user email
			password, // user password
			callbackURL: "/dashboard", // URL to redirect to after the user verifies their email
			/**
			 * remember the user session after the browser is closed. 
			 * @default true
			 */
			rememberMe: false
			}, {
				onRequest: (ctx) => {

				},
				onSuccess: (ctx) => {

				},
				onError: (ctx) => {
					alert(`${ctx.error.message} \nHave you verified your email link?`);
				}
			})
		})
	}
	return <>
		<form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button type="submit" disabled={isPending}>
                {isPending ? 'Submitting...' : 'Login'}
            </button>
        </form>
		<Link href={'/send-reset'}>Forgot your password?</Link>
	</>
}