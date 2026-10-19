
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Scholar's Desk | Academic Support",
    template: "%s | The Scholar's Desk",
  },
  description:
    "Explore academic guidance, dissertation support, thesis guidance, assignment feedback, editing and proofreading services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
