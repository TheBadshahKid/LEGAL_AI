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
    /* Muted, softer color palette */
    const colorMap = {
        blue: "bg-[#5C6AFF] text-white",
        orange: "bg-[#E08A42] text-white",
        dark: "bg-[#302545] dark:bg-[#1E1530] text-white",
    };

    /* ── Portal variant (John Doe card) ── */
    if (variant === "portal" && portalData) {
        return (
            <div
                className={cn(
                    "p-3 pr-6 rounded-[18px] flex items-start gap-2.5 w-[260px]",
                    "bg-[#D5D8EC]/50 dark:bg-[#2A2540]/60 backdrop-blur-sm",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
                    rotation,
                    className
                )}
            >
                {/* Orange accent bar */}
                <div className="w-[3px] h-9 bg-[#E08A42] rounded-full mt-1 shrink-0" />

                {/* Avatar */}
                <img
                    src={portalData.avatar}
                    alt={portalData.name}
                    className="w-8 h-8 rounded-full object-cover mt-0.5 shrink-0"
                />

                {/* Text content */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[12px] text-[#2B213A] dark:text-white leading-tight">
                        {portalData.name}
                    </h4>
                    <p className="text-[9.5px] text-[#2B213A]/55 dark:text-white/50 leading-snug mt-0.5">
                        {portalData.message}
                    </p>
                    <p className="text-[8.5px] text-[#5C6AFF] dark:text-blue-400 font-semibold mt-1">
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
                "py-3.5 rounded-full flex items-center justify-center gap-2.5",
                "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                "transition-colors duration-300",
                colorMap[color],
                rotation,
                className
            )}
        >
            {Icon && (
                <Icon
                    className={cn(
                        "w-[18px] h-[18px] shrink-0",
                        color === "dark" ? "text-[#E08A42]" : "text-white/90"
                    )}
                    strokeWidth={2.2}
                />
            )}
            <span className="text-[15px] font-semibold tracking-tight whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}
