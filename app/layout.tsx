
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oceba.com"),
  title: "Oceba Labs | AI Automation & Technology Solutions",
  description:
    "Oceba Labs helps businesses build digital systems, automate workflows and use AI to improve operations, productivity and growth.",
  openGraph: {
    title: "Oceba Labs | AI Automation & Technology Solutions",
    description:
      "Build digital systems, automate workflows and grow with practical AI and technology solutions.",
    siteName: "Oceba Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oceba Labs | AI Automation & Technology Solutions",
    description:
      "Build digital systems, automate workflows and grow with practical AI and technology solutions.",
  },
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
