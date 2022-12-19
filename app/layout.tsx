import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-900 flex flex-col items-center text-slate-200">
        {children}
      </body>
    </html>
  );
}
