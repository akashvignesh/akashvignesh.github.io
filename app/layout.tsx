import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../src/styles/main.scss";
import { ThemeProvider } from "@/src/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashvignesh.github.io"),
  title: {
    default: "Akash Sureshkumar · Software & ML/AI Engineer",
    template: "%s · Akash Sureshkumar",
  },
  description:
    "Software & ML/AI Engineer with 3+ years building scalable backends, ML/AI services, and data pipelines. Java, Spring Boot, Python, AWS. MS at the University at Buffalo.",
  keywords: [
    "Akash Sureshkumar",
    "Software Engineer",
    "Machine Learning Engineer",
    "ML Engineer",
    "AI Engineer",
    "Data Engineer",
    "Data Analyst",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Python",
    "AWS",
    "University at Buffalo",
  ],
  authors: [{ name: "Akash Sureshkumar" }],
  openGraph: {
    type: "website",
    siteName: "Akash Sureshkumar",
    title: "Akash Sureshkumar · Software & ML/AI Engineer",
    description:
      "Software & ML/AI Engineer with 3+ years building scalable backends, ML/AI services, and data pipelines.",
    url: "https://akashvignesh.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Sureshkumar · Software & ML/AI Engineer",
    description:
      "Software & ML/AI Engineer with 3+ years building scalable backends, ML/AI services, and data pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
