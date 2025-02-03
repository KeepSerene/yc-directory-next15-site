import "./globals.css";
import "easymde/dist/easymde.min.css"; // For the markdown editor in Sanity studio (I guess!)
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    default: "YC Directory - Startup Pitch Platform",
    template: "%s | YC Directory",
  },

  description:
    "Discover, pitch, and connect with innovative startups. Submit your startup idea, vote on pitches, and grow your entrepreneurial network.",

  keywords: [
    "startup",
    "entrepreneurship",
    "pitch",
    "innovation",
    "startup directory",
    "Y Combinator",
    "tech startups",
  ],

  openGraph: {
    title: "YC Directory - Startup Pitch Platform",
    description: "Discover, pitch, and connect with innovative startups.",
    type: "website",
    url: "https://yc-directory-keep-serene-ofilei3pl.vercel.app/",
    images: [
      {
        url: "/yc-directory-home-page.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YC Directory - Startup Pitch Platform",
    description: "Discover, pitch, and connect with innovative startups.",
    images: ["/yc-directory-home-page.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
