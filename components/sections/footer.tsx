"use client";

import { Logo } from "@/components/ui/logo";
import content from "@/lib/content.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">
                {content.brand.name}
              </span>
              <span className="text-sm text-purple-300">
                {content.brand.tagline}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav className="flex gap-6">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="text-sm text-gray-400">
                © {currentYear} Evalucircle. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Made with <span className="text-red-500">❤️</span> by
                EvaluCircle
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
