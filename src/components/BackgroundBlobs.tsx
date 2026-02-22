export default function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* ── Top-right cluster ── */}
            <div className="absolute top-[6%] right-[0%] w-[280px] h-[65px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-6 opacity-80" />
            <div className="absolute top-[3%] right-[20%] w-[200px] h-[55px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-3 opacity-60" />

            {/* ── Middle-right ── */}
            <div className="absolute top-[20%] right-[-3%] w-[260px] h-[60px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-6 opacity-70" />

            {/* ── Right edge middle ── */}
            <div className="absolute top-[50%] right-[-4%] w-[220px] h-[55px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-6 opacity-50" />

            {/* ── Bottom-left cluster ── */}
            <div className="absolute bottom-[22%] left-[-2%] w-[240px] h-[60px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-6 opacity-70" />
            <div className="absolute bottom-[14%] left-[8%] w-[180px] h-[55px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-3 opacity-50" />

            {/* ── Top-left ── */}
            <div className="absolute top-[12%] left-[-4%] w-[200px] h-[55px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-6 opacity-60" />

            {/* ── Bottom-right ── */}
            <div className="absolute bottom-[6%] right-[15%] w-[180px] h-[50px] bg-[#D8DCF0] dark:bg-white/5 rounded-full -rotate-3 opacity-40" />
        </div>
    );
}
