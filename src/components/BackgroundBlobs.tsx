export default function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* ── Top-right cluster ── */}
            <div className="absolute top-[5%] right-[1%] w-[240px] h-[58px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[8deg] opacity-50" />
            <div className="absolute top-[2%] right-[18%] w-[170px] h-[48px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[4deg] opacity-40" />

            {/* ── Mid-right ── */}
            <div className="absolute top-[20%] right-[-2%] w-[220px] h-[52px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[8deg] opacity-45" />

            {/* ── Right edge ── */}
            <div className="absolute top-[48%] right-[-3%] w-[190px] h-[48px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[6deg] opacity-35" />

            {/* ── Bottom-left cluster ── */}
            <div className="absolute bottom-[24%] left-[-2%] w-[200px] h-[52px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[8deg] opacity-50" />
            <div className="absolute bottom-[15%] left-[8%] w-[160px] h-[46px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[4deg] opacity-35" />

            {/* ── Top-left ── */}
            <div className="absolute top-[13%] left-[-3%] w-[170px] h-[48px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[7deg] opacity-40" />

            {/* ── Bottom-right ── */}
            <div className="absolute bottom-[5%] right-[12%] w-[150px] h-[44px] bg-[#D9DCE9] dark:bg-white/[0.03] rounded-full -rotate-[5deg] opacity-30" />
        </div>
    );
}
