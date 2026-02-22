"use client";

import { motion } from "framer-motion";
import { Receipt, Gavel, CheckSquare, FileText } from "lucide-react";
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
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <BackgroundBlobs />
            <ThemeToggle />

            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.15fr] gap-2 items-center">

                    {/* ───── LEFT: Typography ───── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="py-16 z-10"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[62px] font-light leading-[1.15] tracking-[-0.015em] mb-7"
                        >
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D]">
                                A single platform to
                            </span>
                            <br />
                            <span className="text-[#9EA0C1] dark:text-[#6B6B8D] font-semibold">
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
                            className="text-[12.5px] md:text-[13.5px] text-[#9EA0C1] dark:text-[#7A7A9A] leading-[1.8] max-w-[340px]"
                        >
                            Track matters, coordinate schedules, manage clients,
                            centralize documents, and handle communication –
                            all in one system.
                        </motion.p>
                    </motion.div>

                    {/* ───── RIGHT: Floating Cards ───── */}
                    <div className="relative h-[540px] w-full hidden md:block">

                        {/* Billing — upper center, wide pill */}
                        <motion.div
                            {...slideIn("right", 0.2)}
                            className="absolute top-[14%] left-[15%]"
                        >
                            <motion.div animate={float(0)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Billing"
                                    icon={Receipt}
                                    color="blue"
                                    rotation="-rotate-[10deg]"
                                    className="px-16 py-4 min-w-[280px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Matters — mid-left, overlapping into text */}
                        <motion.div
                            {...slideIn("left", 0.4)}
                            className="absolute top-[44%] left-[-22%]"
                        >
                            <motion.div animate={float(0.8)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Matters"
                                    icon={Gavel}
                                    color="orange"
                                    rotation="-rotate-[10deg]"
                                    className="px-12 py-4 min-w-[230px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* John Doe Portal — center-right */}
                        <motion.div
                            {...slideIn("up", 0.6)}
                            className="absolute top-[38%] left-[35%]"
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

                        {/* Tasks — bottom-center, very wide */}
                        <motion.div
                            {...slideIn("down", 0.8)}
                            className="absolute bottom-[10%] left-[5%]"
                        >
                            <motion.div animate={float(1.6)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Tasks"
                                    icon={CheckSquare}
                                    color="dark"
                                    rotation="-rotate-[5deg]"
                                    className="px-20 py-4 min-w-[300px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Documents — bottom-right, going off screen */}
                        <motion.div
                            {...slideIn("right", 1.0)}
                            className="absolute bottom-[2%] right-[-22%]"
                        >
                            <motion.div animate={float(0.4)} whileHover={{ scale: 1.04 }}>
                                <FloatingCard
                                    label="Documents"
                                    icon={FileText}
                                    color="dark"
                                    rotation="-rotate-[5deg]"
                                    className="px-16 py-4 min-w-[300px]"
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
