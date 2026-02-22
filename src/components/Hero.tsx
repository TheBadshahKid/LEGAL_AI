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
        hidden: { y: 24, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const float = (delay = 0) => ({
        y: [0, -6, 0],
        transition: {
            duration: 5,
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
        const value = dir === "right" || dir === "down" ? 80 : -80;
        return {
            initial: { opacity: 0, [axis]: value },
            animate: { opacity: 1, [axis]: 0 },
            transition: { delay, duration: 0.9, ease: "easeOut" },
        };
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <BackgroundBlobs />
            <ThemeToggle />

            <div className="w-full max-w-[1320px] mx-auto px-10 md:px-16 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-center">

                    {/* ───── LEFT: Typography ───── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-[460px] py-20 z-10"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-[38px] md:text-[46px] lg:text-[52px] font-light leading-[1.18] tracking-[-0.01em] mb-8"
                        >
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D]">
                                A single platform to
                            </span>
                            <br />
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D] font-medium">
                                manage
                            </span>{" "}
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D]">
                                every part of
                            </span>
                            <br />
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D]">
                                your{" "}
                            </span>
                            <span className="text-[#4F5BFF] dark:text-[#6B7AFF] font-bold">
                                legal work
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[13px] md:text-[14px] text-[#9EA0C1]/80 dark:text-[#7A7A9A] leading-[1.7] max-w-[340px]"
                        >
                            Track matters, coordinate schedules, manage clients,
                            centralize documents, and handle communication –
                            all in one system.
                        </motion.p>
                    </motion.div>

                    {/* ───── RIGHT: Floating Cards ───── */}
                    <div className="relative h-[520px] w-full hidden md:block">

                        {/* Billing — upper center */}
                        <motion.div
                            {...slideIn("right", 0.2)}
                            className="absolute top-[10%] left-[12%]"
                        >
                            <motion.div animate={float(0)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Billing"
                                    icon={Receipt}
                                    color="blue"
                                    rotation="-rotate-[8deg]"
                                    className="px-12 py-3.5 min-w-[230px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Matters — middle-left, slightly overlapping */}
                        <motion.div
                            {...slideIn("left", 0.4)}
                            className="absolute top-[40%] left-[-16%]"
                        >
                            <motion.div animate={float(0.8)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Matters"
                                    icon={Gavel}
                                    color="orange"
                                    rotation="-rotate-[8deg]"
                                    className="px-10 py-3.5 min-w-[200px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* John Doe Portal — center-right */}
                        <motion.div
                            {...slideIn("up", 0.6)}
                            className="absolute top-[36%] left-[32%]"
                        >
                            <motion.div animate={float(1.2)} whileHover={{ scale: 1.03 }}>
                                <FloatingCard
                                    label=""
                                    variant="portal"
                                    rotation="-rotate-[3deg]"
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

                        {/* Tasks — bottom-center-left */}
                        <motion.div
                            {...slideIn("down", 0.8)}
                            className="absolute bottom-[10%] left-[2%]"
                        >
                            <motion.div animate={float(1.6)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Tasks"
                                    icon={CheckSquare}
                                    color="dark"
                                    rotation="-rotate-[4deg]"
                                    className="px-14 py-3.5 min-w-[250px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Documents — bottom-right, going off screen */}
                        <motion.div
                            {...slideIn("right", 1.0)}
                            className="absolute bottom-[4%] right-[-15%]"
                        >
                            <motion.div animate={float(0.4)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Documents"
                                    icon={FileText}
                                    color="dark"
                                    rotation="-rotate-[4deg]"
                                    className="px-12 py-3.5 min-w-[260px]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ───── Mobile fallback ───── */}
                    <div className="md:hidden flex flex-wrap gap-3 mt-4">
                        <div className="bg-[#5C6AFF] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Billing
                        </div>
                        <div className="bg-[#E08A42] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Matters
                        </div>
                        <div className="bg-[#302545] dark:bg-[#3D2F52] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Tasks
                        </div>
                        <div className="bg-[#302545] dark:bg-[#3D2F52] text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                            Documents
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
