// Route: /login
// The (auth) folder name is ignored by the router, so the URL is just /login.

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-background p-8 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold text-primary">Log in</h1>
      <p className="text-accent">Login form goes here.</p>
    </div>
  );
}
