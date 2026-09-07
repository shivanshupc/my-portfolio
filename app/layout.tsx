import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivanshu Sharma | ML Engineer & GenAI Specialist",
  description: "ML Engineer with 5+ years of experience in GenAI, MLOps, Kubernetes GPU deployments, and LLM serving infrastructure (vLLM, Langfuse).",
  keywords: ["ML Engineer", "GenAI", "MLOps", "LLM", "RAG", "Kubernetes", "AWS", "Python", "portfolio"],
  authors: [{ name: "Shivanshu Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Shivanshu Sharma | ML Engineer & GenAI Specialist",
    description: "ML Engineer with 5+ years of experience in GenAI, MLOps, Kubernetes GPU deployments, and LLM serving infrastructure.",
    siteName: "Shivanshu Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Sharma | ML Engineer & GenAI Specialist",
    description: "ML Engineer with 5+ years of experience in GenAI, MLOps, Kubernetes GPU deployments, and LLM serving infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}