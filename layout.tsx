export const metadata = {
  title: "Marketing Portfolio",
  description: "Marketing, Branding & Content Strategist Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
