"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        // Check system preference on mount
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const saved = localStorage.getItem("theme");
        const isDark = saved ? saved === "dark" : prefersDark;
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            className="fixed top-6 right-6 z-50 p-3 rounded-full 
                       bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg
                       hover:scale-110 active:scale-95 transition-all duration-200
                       border border-gray-200 dark:border-white/20"
            aria-label="Toggle dark mode"
        >
            {dark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-[#2B213A]" />
            )}
        </button>
    );
}
