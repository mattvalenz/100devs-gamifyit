'use client';

import { useState, useTransition } from 'react';
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from 'next/navigation';


export default function ResetPassword() {
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ error, setError ] = useState<string | null>(null);
	const [ success, setSuccess ] = useState(false);
	const [ isPending, startTransition ] = useTransition();
	
	const router = useRouter();

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		const token = new URLSearchParams(window.location.search).get("token") ?? undefined;
		event.preventDefault();
		setError(null); // clears errors from previous submissions before attempting new submission
		setSuccess(false); // clears success message from previous submissions
		if (password !== confirmPassword) {
			setError("Passwords must match.");
		} else {
			startTransition(async () => {			
				await authClient.resetPassword({
					newPassword: password,
					token,
				});	
				setSuccess(true);
				setTimeout(() => {
					router.replace('/sign-in')
				}, 3000)
			})
		}
	}
	return <>
		<form onSubmit={handleSubmit}>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={event => setPassword(event.target.value)}
			/>
			<input
				type="password"
				placeholder="Confirm Password"
				value={confirmPassword}
				onChange={event => setConfirmPassword(event.target.value)}
			/>
			<button type="submit" disabled={isPending}>
				{isPending ? 'Submitting...' : 'Reset password'}
			</button>
		</form>
		{error && <p className={`text-red-600`}>{error}</p>}
		{success && <p>Password successfully reset. Redirecting you to the sign in page...</p>}
	</>
}