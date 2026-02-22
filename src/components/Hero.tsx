"use client";

import { motion } from "framer-motion";
import { Receipt, Gavel, ListChecks, FileText } from "lucide-react";
import FloatingCard from "./FloatingCard";
import BackgroundBlobs from "./BackgroundBlobs";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const fadeUp = {
        hidden: { y: 24, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const float = (delay = 0) => ({
        y: [0, -6, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
    });

    const slideIn = (dir: "left" | "right" | "up" | "down", delay: number) => {
        const axis = dir === "left" || dir === "right" ? "x" : "y";
        const value = dir === "right" || dir === "down" ? 80 : -80;
        return {
            initial: { opacity: 0, [axis]: value },
            animate: { opacity: 1, [axis]: 0 },
            transition: { delay, duration: 0.9, ease: "easeOut" },
        };
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F4F6F9] dark:bg-transparent">
            <BackgroundBlobs />
            <ThemeToggle />

            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-2 items-center">

                    {/* ───── LEFT: Typography ───── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="py-16 z-10"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[60px] xl:text-[68px] font-light leading-[1.15] tracking-[-0.015em] mb-7"
                        >
                            <span className="text-[#72758E] dark:text-[#6B6B8D]">
                                A single platform to
                            </span>
                            <br />
                            <span className="text-[#525672] dark:text-[#E0E2FF] font-semibold">
                                manage
                            </span>{" "}
                            <span className="text-[#72758E] dark:text-[#6B6B8D]">
                                every part of
                            </span>
                            <br />
                            <span className="text-[#72758E] dark:text-[#6B6B8D]">
                                your{" "}
                            </span>
                            <span className="text-[#525672] dark:text-[#E0E2FF] font-semibold">
                                legal work
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] md:text-[16.5px] text-[#2F4AFE] dark:text-[#6B7AFF] leading-[1.65] max-w-[420px]"
                        >
                            Track matters, coordinate schedules, manage clients,
                            centralize documents, and handle communication -
                            all in one system.
                        </motion.p>
                    </motion.div>

                    {/* ───── RIGHT: Floating Cards ───── */}
                    <div className="relative h-[650px] w-full hidden md:block">

                        {/* Billing — upper center, wide pill */}
                        <motion.div
                            {...slideIn("right", 0.2)}
                            className="absolute top-[35%] xl:top-[30%] lg:right-[-10%] xl:right-[-5%] z-10"
                        >
                            <motion.div animate={float(0)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Billing"
                                    icon={Receipt}
                                    color="blue"
                                    rotation="rotate-[12deg]"
                                    className="px-14 py-4 min-w-[280px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Matters — mid-left, overlapping into text */}
                        <motion.div
                            {...slideIn("left", 0.4)}
                            className="absolute top-[65%] xl:top-[60%] lg:left-[-35%] xl:left-[-25%] z-20"
                        >
                            <motion.div animate={float(0.8)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Matters"
                                    icon={Gavel}
                                    color="orange"
                                    rotation="-rotate-[10deg]"
                                    className="px-12 py-4 min-w-[240px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* John Doe Portal — center-right */}
                        <motion.div
                            {...slideIn("up", 0.6)}
                            className="absolute top-[55%] xl:top-[50%] lg:right-[5%] xl:right-[15%] z-30"
                        >
                            <motion.div animate={float(1.2)} whileHover={{ scale: 1.03 }}>
                                <FloatingCard
                                    label=""
                                    variant="portal"
                                    rotation="rotate-[2deg]"
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

                        {/* Tasks — bottom-center, very wide */}
                        <motion.div
                            {...slideIn("down", 0.8)}
                            className="absolute xl:-bottom-[5%] lg:-bottom-[10%] lg:left-[-15%] xl:left-[5%] z-40"
                        >
                            <motion.div animate={float(1.6)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Tasks"
                                    icon={ListChecks}
                                    color="dark"
                                    rotation="rotate-[0deg]"
                                    className="px-16 py-4 min-w-[260px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Documents — bottom-right, going off screen */}
                        <motion.div
                            {...slideIn("right", 1.0)}
                            className="absolute xl:-bottom-[2%] lg:-bottom-[10%] lg:right-[-25%] xl:right-[-15%] z-30"
                        >
                            <motion.div animate={float(0.4)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Documents"
                                    icon={FileText}
                                    color="dark"
                                    rotation="-rotate-[8deg]"
                                    className="px-14 py-4 min-w-[280px]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ───── Mobile fallback ───── */}
                    <div className="md:hidden flex flex-wrap gap-3 mt-4">
                        <div className="bg-[#2F4AFE] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Billing
                        </div>
                        <div className="bg-[#DD7924] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Matters
                        </div>
                        <div className="bg-[#30273c] dark:bg-[#3D2F52] text-[#DE7A23] px-5 py-2.5 rounded-full font-semibold text-sm">
                            Tasks
                        </div>
                        <div className="bg-[#30273c] dark:bg-[#3D2F52] text-[#DE7A23] px-5 py-2.5 rounded-full font-semibold text-sm">
                            Documents
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
