'use client';

import { useState, useTransition } from 'react';
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from 'next/navigation';


export default function Registration() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ error, setError ] = useState<string | null>(null);
    const [ success, setSuccess ] = useState(false);
    const [ isPending, startTransition ] = useTransition();
    const router = useRouter();

    
    
    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null); // clears errors from previous submissions before attempting new submission
        setSuccess(false); // clears success message from previous submissions
        if (password !== confirmPassword) {
            setError("Passwords must match.");
        } else {
            startTransition(async () => {
                await authClient.signUp.email({
                email, // user email address
                password, // user password -> min 8 characters by default
                name, // user display name
                // image, // User image URL (optional)
                callbackURL: "/login" // A URL to redirect to after the user verifies their email (optional)
                }, {
                    onRequest: (ctx) => {
                        //show loading
                        //startTransition will automatically set isPending to true, so user will see 'Submitting...'

                    },
                    onSuccess: (ctx) => {
                        //redirect to the dashboard or sign in page
                        setSuccess(true)
                    },
                    onError: (ctx) => {
                        // display the error message
                        
                        setError(ctx.error.message);
                    },
                });
                
            })
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
            />
            <button type="submit" disabled={isPending}>
                {isPending ? 'Submitting...' : 'Register'}
            </button>
        </form>
        {error && <p className={`text-red-600`}>{error}</p>}
        {success && <p>Please check your email to verify your account.</p>}
    </>
}