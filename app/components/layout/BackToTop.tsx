
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Wróć na górę strony"
      title="Wróć na górę"
      className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white/95 text-neutral-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 dark:border-white/15 dark:bg-[#202326]/95 dark:text-white dark:hover:bg-[#303438] sm:bottom-8 sm:right-8"
    >
      <ArrowUp size={21} strokeWidth={1.8} />
    </button>
  );
}
