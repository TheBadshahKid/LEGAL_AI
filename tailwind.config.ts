import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                legalBlue: "#3B4DFF",
                legalOrange: "#E67E22",
                legalDark: "#2B213A",
                legalGray: "#F3F4F6",
            },
            fontFamily: {
                sans: ["var(--font-plus-jakarta-sans)", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
