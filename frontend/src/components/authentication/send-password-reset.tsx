"use client";
import { useState, useTransition } from 'react';
import { authClient } from "@/app/lib/auth-client";

export default function SendPasswordReset() {
	const [ email, setEmail ] = useState("");
	const [ message, setMessage ] = useState("");
	const [ isPending, startTransition ] = useTransition();

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		startTransition(async () => {
			await authClient.requestPasswordReset({
			email, 
			redirectTo: "https://fgv-dashboard-3h8w.vercel.app/reset-password",
			})
			setMessage("Please check your email for the password reset link.")
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={event => setEmail(event.target.value)}
			/>
			<button type="submit" disabled={isPending}>
				{isPending ? 'Submitting...' : 'Send Reset Link'}
			</button>
			<p>{message}</p>
		</form>
	)
}