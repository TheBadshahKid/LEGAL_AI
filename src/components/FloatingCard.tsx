"use client";

import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FloatingCardProps {
    label: string;
    icon?: LucideIcon;
    color?: "blue" | "orange" | "dark";
    rotation?: string;
    className?: string;
    variant?: "default" | "portal";
    portalData?: {
        name: string;
        message: string;
        id: string;
        time: string;
        avatar: string;
    };
}

export default function FloatingCard({
    label,
    icon: Icon,
    color = "blue",
    rotation = "rotate-0",
    className,
    variant = "default",
    portalData,
}: FloatingCardProps) {
    const colorMap = {
        blue: "bg-[#4F5BFF] text-white",
        orange: "bg-[#E8873B] text-white",
        dark: "bg-[#2B213A] dark:bg-[#1E1530] text-white",
    };

    /* ── Portal variant (John Doe card) ── */
    if (variant === "portal" && portalData) {
        return (
            <div
                className={cn(
                    "p-3 pr-6 rounded-[22px] shadow-lg flex items-start gap-2.5 w-[280px]",
                    "bg-[#C5C9E8]/60 dark:bg-[#2A2540]/80 backdrop-blur-sm",
                    rotation,
                    className
                )}
            >
                {/* Orange accent bar */}
                <div className="w-[3px] h-10 bg-orange-400 rounded-full mt-1 shrink-0" />

                {/* Avatar */}
                <img
                    src={portalData.avatar}
                    alt={portalData.name}
                    className="w-9 h-9 rounded-full object-cover mt-0.5 shrink-0"
                />

                {/* Text content */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[13px] text-[#2B213A] dark:text-white leading-tight">
                        {portalData.name}
                    </h4>
                    <p className="text-[10px] text-[#2B213A]/70 dark:text-white/60 leading-tight mt-0.5">
                        {portalData.message}
                    </p>
                    <p className="text-[9px] text-blue-600 dark:text-blue-400 font-semibold mt-1">
                        {portalData.id} · {portalData.time}
                    </p>
                </div>
            </div>
        );
    }

    /* ── Default pill variant ── */
    return (
        <div
            className={cn(
                "px-7 py-4 rounded-full shadow-xl flex items-center gap-3 transition-colors duration-300",
                colorMap[color],
                rotation,
                className
            )}
        >
            {Icon && (
                <Icon
                    className={cn(
                        "w-6 h-6 shrink-0",
                        color === "dark" ? "text-orange-400" : "text-white"
                    )}
                />
            )}
            <span className="text-xl font-bold tracking-tight whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}
