"use client";

import { motion } from "framer-motion";
import { Receipt, Gavel, CheckSquare, FileText } from "lucide-react";
import FloatingCard from "./FloatingCard";
import BackgroundBlobs from "./BackgroundBlobs";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
    /* ── Animation Variants ── */
    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const fadeUp = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const float = (delay = 0) => ({
        y: [0, -8, 0],
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        },
    });

    const slideIn = (
        dir: "left" | "right" | "up" | "down",
        delay: number
    ) => {
        const axis = dir === "left" || dir === "right" ? "x" : "y";
        const value =
            dir === "right" || dir === "down" ? 120 : -120;
        return {
            initial: { opacity: 0, [axis]: value },
            animate: { opacity: 1, [axis]: 0 },
            transition: { delay, duration: 0.85, ease: "easeOut" },
        };
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <BackgroundBlobs />
            <ThemeToggle />

            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">

                    {/* ───── LEFT: Typography ───── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-[560px] py-16"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-[52px] md:text-[72px] lg:text-[80px] font-semibold leading-[1.05] tracking-[-0.02em] mb-8"
                        >
                            <span className="text-[#9A9ABF] dark:text-[#6B6B8D]">A single platform to</span>
                            <br />
                            <span className="text-[#2B213A] dark:text-white font-bold">manage</span>{" "}
                            <span className="text-[#9A9ABF] dark:text-[#6B6B8D]">every part of</span>
                            <br />
                            <span className="text-[#9A9ABF] dark:text-[#6B6B8D]">your </span>
                            <span className="text-[#4F5BFF] dark:text-[#6B7AFF] font-bold">legal work</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] md:text-[17px] text-[#8A8AA3] dark:text-[#7A7A9A] leading-relaxed max-w-[420px]"
                        >
                            Track matters, coordinate schedules, manage clients, centralize
                            documents, and handle communication – all in one system.
                        </motion.p>
                    </motion.div>

                    {/* ───── RIGHT: Floating Cards ───── */}
                    <div className="relative h-[550px] w-full hidden md:block">

                        {/* Billing — top area, angled */}
                        <motion.div
                            {...slideIn("right", 0.2)}
                            className="absolute top-[8%] left-[15%]"
                        >
                            <motion.div animate={float(0)} whileHover={{ scale: 1.05 }}>
                                <FloatingCard
                                    label="Billing"
                                    icon={Receipt}
                                    color="blue"
                                    rotation="-rotate-[15deg]"
                                    className="px-8 py-4"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Matters — middle-left area */}
                        <motion.div
                            {...slideIn("left", 0.4)}
                            className="absolute top-[38%] left-[-12%]"
                        >
                            <motion.div animate={float(0.8)} whileHover={{ scale: 1.05 }}>
                                <FloatingCard
                                    label="Matters"
                                    icon={Gavel}
                                    color="orange"
                                    rotation="-rotate-[15deg]"
                                    className="px-7 py-3.5"
                                />
                            </motion.div>
                        </motion.div>

                        {/* John Doe Portal — center */}
                        <motion.div
                            {...slideIn("up", 0.6)}
                            className="absolute top-[42%] left-[30%]"
                        >
                            <motion.div animate={float(1.2)} whileHover={{ scale: 1.03 }}>
                                <FloatingCard
                                    label=""
                                    variant="portal"
                                    rotation="-rotate-[8deg]"
                                    portalData={{
                                        name: "John Doe - Portal",
                                        message:
                                            "Hey! Could you please review a document for me?",
                                        id: "MAT-2233",
                                        time: "2 h ago",
                                        avatar:
                                            "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Tasks — bottom-center */}
                        <motion.div
                            {...slideIn("down", 0.8)}
                            className="absolute bottom-[8%] left-[8%]"
                        >
                            <motion.div animate={float(1.6)} whileHover={{ scale: 1.05 }}>
                                <FloatingCard
                                    label="Tasks"
                                    icon={CheckSquare}
                                    color="dark"
                                    rotation="-rotate-[8deg]"
                                    className="px-10 py-4"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Documents — bottom-right */}
                        <motion.div
                            {...slideIn("right", 1.0)}
                            className="absolute bottom-[2%] right-[-8%]"
                        >
                            <motion.div animate={float(0.4)} whileHover={{ scale: 1.05 }}>
                                <FloatingCard
                                    label="Documents"
                                    icon={FileText}
                                    color="dark"
                                    rotation="-rotate-[8deg]"
                                    className="px-8 py-4"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ───── Mobile fallback ───── */}
                    <div className="md:hidden flex flex-wrap gap-3 mt-4">
                        <div className="bg-[#4F5BFF] text-white px-5 py-2.5 rounded-full font-bold text-sm">
                            Billing
                        </div>
                        <div className="bg-[#E8873B] text-white px-5 py-2.5 rounded-full font-bold text-sm">
                            Matters
                        </div>
                        <div className="bg-[#2B213A] dark:bg-[#3D2F52] text-white px-5 py-2.5 rounded-full font-bold text-sm">
                            Tasks
                        </div>
                        <div className="bg-[#2B213A] dark:bg-[#3D2F52] text-white px-5 py-2.5 rounded-full font-bold text-sm">
                            Documents
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
