export default function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* ── Top-right shapes ── */}
            <div className="absolute top-[8%] right-[-5%] w-[320px] h-[55px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />
            <div className="absolute top-[18%] right-[-10%] w-[380px] h-[65px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />
            <div className="absolute top-[32%] right-[-15%] w-[340px] h-[60px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />

            {/* ── Mid-left shape ── */}
            <div className="absolute top-[45%] left-[-10%] w-[250px] h-[60px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />
            <div className="absolute top-[60%] left-[-5%] w-[300px] h-[55px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />

            {/* ── Bottom shapes ── */}
            <div className="absolute bottom-[20%] right-[-5%] w-[420px] h-[65px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />
            <div className="absolute bottom-[8%] left-[-2%] w-[320px] h-[60px] bg-[#E8EBF4] dark:bg-white/[0.03] rounded-full rotate-0 opacity-100" />
        </div>
    );
}
