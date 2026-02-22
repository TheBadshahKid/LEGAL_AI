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
        blue: "bg-[#2F4AFE] text-white",
        orange: "bg-[#DD7924] text-white",
        dark: "bg-[#30273c] dark:bg-[#1E1530] text-[#DE7A23]", // Orange text for dark
    };

    /* ── Portal variant (John Doe card) ── */
    if (variant === "portal" && portalData) {
        return (
            <div
                className={cn(
                    "p-3 pr-6 rounded-[20px] flex items-start gap-2.5 w-[280px]",
                    "bg-[#B4BBEB] dark:bg-[#2A2540]/60",
                    "shadow-[0_8px_32px_rgba(47,74,254,0.1)]",
                    rotation,
                    className
                )}
            >
                {/* Orange accent bar */}
                <div className="w-[3px] h-9 bg-[#DD7924] rounded-full mt-1 shrink-0" />

                {/* Avatar */}
                <img
                    src={portalData.avatar}
                    alt={portalData.name}
                    className="w-9 h-9 rounded-full object-cover mt-0.5 shrink-0 bg-[#A0A6DA]"
                />

                {/* Text content */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[13px] text-[#2B213A] dark:text-white leading-tight">
                        {portalData.name}
                    </h4>
                    <p className="text-[10px] text-[#4f4d6d] dark:text-white/70 leading-snug mt-0.5">
                        {portalData.message}
                    </p>
                    <p className="text-[9px] text-[#8e95c7] dark:text-[#8e95c7] mt-1 font-medium tracking-wide">
                        {portalData.id} - {portalData.time}
                    </p>
                </div>
            </div>
        );
    }

    /* ── Default pill variant ── */
    return (
        <div
            className={cn(
                "py-4 rounded-full flex items-center justify-center gap-3",
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
                        "w-[20px] h-[20px] shrink-0",
                        color === "dark" ? "text-[#DE7A23]" : "text-white"
                    )}
                    strokeWidth={2.2}
                />
            )}
            <span className="text-[17px] font-semibold tracking-wide whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}
