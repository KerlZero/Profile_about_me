import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Saran Chuephoodee | Senior Software Tester and System Analyst",
  description:
    "Portfolio of Saran Chuephoodee, a Senior Software Tester and System Analyst with experience across telecom, insurance, and e-commerce platforms.",
  keywords: [
    "Saran Chuephoodee",
    "Software Tester",
    "QA Engineer",
    "System Analyst",
    "Manual Testing",
    "API Testing",
    "E-commerce QA",
    "Telecom QA",
  ],
  openGraph: {
    title: "Saran Chuephoodee | Senior Software Tester and System Analyst",
    description:
      "Senior QA and system analysis portfolio focused on product quality, backend validation, and release readiness.",
    type: "website",
    images: siteUrl
      ? [
          {
            url: "/profile.jpg",
            width: 1200,
            height: 1200,
            alt: "Saran Chuephoodee profile photo",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Saran Chuephoodee | Senior Software Tester and System Analyst",
    description:
      "Portfolio focused on QA, testing, backend validation, and system analysis.",
    images: siteUrl ? ["/profile.jpg"] : undefined,
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
