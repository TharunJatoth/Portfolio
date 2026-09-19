import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#070a13",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tharun Jatoth | Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable, production-grade web applications using Next.js, React.js, NestJS, Node.js, and Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('unhandledrejection', function(e) {
                  if (e && e.reason && (e.reason instanceof Event || (e.reason.constructor && e.reason.constructor.name === 'Event'))) {
                    e.preventDefault();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#070a13] text-slate-100 min-h-screen selection:bg-blue-500/30 selection:text-blue-300 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
