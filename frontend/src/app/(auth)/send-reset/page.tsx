// Route: /send-reset
// The (auth) folder name is ignored by the router, so the URL is just /register.

import SendPasswordReset from "@/components/authentication/send-password-reset";

export default function SendResetPage() {
  return (
	<div className="w-full max-w-sm rounded-xl bg-background p-8 shadow-sm">
	  {/* <h1 className="mb-6 text-2xl font-bold text-primary">Create an account</h1>
	  <p className="text-accent">Register form goes here.</p> */}
	  <SendPasswordReset />
	</div>
  );
}
