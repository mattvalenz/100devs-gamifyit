// Shared layout for all auth pages (login, register, etc.)
// This layout is NOT nested inside the root layout's Navbar/Footer.
// Any UI here (e.g. a centered card wrapper) will wrap every page in (auth)/.

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary">
      {children}
    </main>
  );
}
