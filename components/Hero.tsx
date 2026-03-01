import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-semibold">
              YN
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 dark:text-white mb-4">
            Shivanshu Sharma
          </h1>
          <p className="text-xl sm:text-2xl text-primary-600 dark:text-primary-300 mb-6">
            Developer & Photographer
          </p>

          {/* Tagline */}
          <p className="text-lg text-primary-500 dark:text-primary-400 max-w-2xl mx-auto mb-10">
            I craft digital experiences and capture moments through my lens.
            Passionate about clean code, beautiful design, and compelling
            visuals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded-lg font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 dark:border-primary-700 text-primary-900 dark:text-white rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Link>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 dark:border-primary-700 text-primary-900 dark:text-white rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}