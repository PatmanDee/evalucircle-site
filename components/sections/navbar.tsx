"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedButton } from "@/components/ui/animated-button";
import content from "@/lib/content.json";

export function Navbar() {
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 150],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const navHeight = useTransform(scrollY, [0, 150], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.9]);

  // Transform for centering navigation
  const navItemsX = useTransform(scrollY, [0, 150], [0, -100]);
  const logoX = useTransform(scrollY, [0, 150], [0, 50]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6"
      style={{
        backgroundColor: navBackground,
        height: navHeight,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          style={{ scale: logoScale, x: logoX }}
        >
          <Logo size="md" />
          <motion.span
            className="text-xl font-bold gradient-text"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {content.brand.name}
          </motion.span>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center gap-8"
          style={{ x: navItemsX }}
        >
          <a
            href="#features"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </motion.div>

        <div className="flex items-center gap-4">
          <AnimatedButton variant="secondary" className="hidden sm:flex">
            Get Started
          </AnimatedButton>
        </div>
      </div>
    </motion.nav>
  );
}
