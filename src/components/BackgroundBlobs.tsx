export default function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top-right elongated pill */}
            <div className="absolute top-[8%] right-[2%] w-[220px] h-[60px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-6 opacity-70" />

            {/* Top-right second pill */}
            <div className="absolute top-[5%] right-[18%] w-[160px] h-[50px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-3 opacity-50" />

            {/* Middle-right pill */}
            <div className="absolute top-[22%] right-[-2%] w-[200px] h-[55px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-6 opacity-60" />

            {/* Bottom-left pill */}
            <div className="absolute bottom-[25%] left-[0%] w-[180px] h-[50px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-6 opacity-50" />

            {/* Bottom-left second pill */}
            <div className="absolute bottom-[18%] left-[10%] w-[140px] h-[45px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-3 opacity-40" />

            {/* Top-left pill */}
            <div className="absolute top-[15%] left-[-3%] w-[160px] h-[50px] bg-[#DFE2F0] dark:bg-white/5 rounded-full -rotate-6 opacity-50" />

            {/* Subtle large soft blur behind cards area */}
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[400px] bg-blue-100/20 dark:bg-blue-500/5 rounded-full blur-[80px]" />
        </div>
    );
}
