"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/src/lib/utils'; // Utility required for clean class merging

// 📐 Header Nav Component (Re-stylized Noir)
// const NavHeader = () => (
//     <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-end gap-10 md:gap-16 text-black z-50 pointer-events-auto">
//         {['HOME', 'CINEMA'].map((item, idx) => (
//             <motion.a
//                 key={item}
//                 href="#"
//                 whileHover={{ scale: 1.05 }}
//                 className={cn(
//                     "font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase italic transition-colors",
//                     idx === 0 ? "text-brand-red" : "text-black hover:text-brand-red"
//                 )}
//             >
//                 {item}
//             </motion.a>
//         ))}
//     </div>
// );

// Editorial description block (used in About Section to keep text visible)
// TypeScript Fix (7031): Added :any to parameters
const EditorialText = ({ name, description }: { name: string, description: string }) => (
    <motion.div
        whileHover={{ x: 5 }} // Slight pop on hover
        className="space-y-6 text-gray-700 max-w-xl group"
    >
        {/* Editorial Index style label */}
        <div className="flex items-center gap-3 overflow-hidden">
            <span className="text-red-500 font-mono text-[9px] md:text-[10px] tracking-widest transition-transform duration-500 group-hover:scale-110 origin-left">
                INDEX // {name === 'Rishikesh Salunke' ? '01' : '02'}
            </span>
            <div className="h-[1px] w-full bg-red-500/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 delay-100" />
        </div>

        <p className="text-[10px] sm:text-xs md:text-[15px] font-normal leading-relaxed text-[#1a1a1a] pl-6 border-l border-red-500/30">
            {description}
        </p>
    </motion.div>
);

export default function Home() {
    // Setup for Scroll-Reactive Motion
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // HERO SECTION PARALLAX: Text moves up faster than Image moves down
    const backgroundTextY = useTransform(smoothProgress, [0, 0.4], [0, -300]);
    const foregroundImageY = useTransform(smoothProgress, [0, 0.4], [0, 150]);
    const imageTilt = useTransform(smoothProgress, [0, 1], [0, -4]); // Subtle premium tilt

    // ABOUT SECTION PARALLAX (Matches your cinematography component theme)
    const textParallaxY = useTransform(smoothProgress, [0.3, 0.8], [0, -200]); // STUDIO text floats up

    // Text content definitions (exactly as provided, no information deleted or changed)
    const descriptions = {
        rishi: "I'm Rishikesh Salunke — a Software Developer, also working as a freelancer. Currently doing internship at DigitioHub. I am 23 years old and completed BSc IT from Siddharth College. Along with development, I also have strong interest in cinematography and video editing. I do freelancing in both software development and video production.",
        rutu: "I'm Rutuja Dalvi — a freelance video editor and cinematographer, deeply passionate about creative content and visual storytelling. I began my journey in late 2025, driven by the urge to create, experiment, and bring ideas to life through motion. A BAMMC graduate from Wilson College, Mumbai, I see editing as more than just cuts and transitions — it’s about feeling, flow, and impact. From freelance projects to content creation, I love shaping raw footage into stories that connect, engage, and stay with the viewer."
    };

    return (
        <div ref={containerRef} className="relative bg-[#F5F5F0] text-[#1a1a1a] overflow-x-hidden font-sans">

            {/* Fixed Navigation Header */}
            {/* <NavHeader /> */}

            {/* Soft Paper Fiber Overlay (Global depth layer) */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            {/* ========================================== HERO SECTION ========================================== */}
            <section className="relative h-[110vh] bg-[#F5F5F0] px-6  overflow-hidden flex flex-col justify-end">
                <div className="max-w-screen-2xl mx-auto w-full h-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-0">

                    {/* Left Side: Editorial Titles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: [0, -15, 0], // Continuous vertical "floating"
                        }}
                        transition={{
                            opacity: { duration: 1 },
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="z-20 flex flex-col space-y-[-1vw] mb-[15vh] md:mb-[25vh]"
                    >
                        <motion.h1
                            style={{ y: useTransform(smoothProgress, [0, 0.4], [0, -100]) }}
                            className="text-[14vw] md:text-[11vw] font-serif-display italic text-brand-red leading-[0.8] tracking-tighter"
                        >
                            Unwanted
                        </motion.h1>
                        <motion.h1
                            style={{ y: useTransform(smoothProgress, [0, 0.4], [0, -180]) }}
                            className="text-[14vw] md:text-[11vw] font-serif-display italic text-brand-red leading-[0.8] tracking-tighter ml-[8vw]"
                        >
                            Kids.
                        </motion.h1>
                    </motion.div>

                    {/* Right Side: Large Primary Image */}
                    <motion.div
                        style={{
                            y: useTransform(smoothProgress, [0, 0.4], [0, 50]),
                            rotate: useTransform(smoothProgress, [0, 1], [0, -1])
                        }}
                        animate={{
                            y: [0, 20, 0], // Subtle continuous floating
                            x: [0, 5, 0],   // Slight horizontal sway
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full max-w-[900px] z-10 self-end"
                    >
                        <div className="relative aspect-[4/3] md:aspect-auto">
                            <Image
                                src="/hero5.png"
                                alt="Hero"
                                width={1200}
                                height={1000}
                                priority
                                className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl"
                            />

                            {/* Gradient Mask to blend the "cut" bottom edge */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5F5F0] via-[#F5F5F0]/50 to-transparent z-20" />
                        </div>

                        {/* Recording Status Badge */}
                        <div className="absolute top-20 right-4 md:right-10 flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 z-30">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono tracking-tighter">REC // 00:24:59</span>
                        </div>
                    </motion.div>
                </div>

                {/* Background Watermark */}
                <motion.div
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-10 left-10 opacity-10 pointer-events-none z-0"
                >
                    <span className="text-[12vw] font-black leading-none select-none text-black/20">2026</span>
                </motion.div>
            </section>



            {/* ========================================== ABOUT SECTION ========================================== */}
            {/* MASONRY GRID LAYOUT (POP STYLE BUT INFORMATION SAFE) */}
            <section className="relative bg-[#F5F5F0] py-24 md:py- px-6 md:px-16 text-[#1a1a1a]">

                {/* STUDIO Subtle Accent (Floating like in other components) */}
                <motion.div
                    style={{ y: textParallaxY }}
                    className="absolute top- right-[-5%] text-[20vw] font-black text-black/[0.015] select-none z-0"
                >
                    STUDIO
                </motion.div>

                <div className="max-w-screen-2xl mx-auto w-full relative z-10 space-y-10">

                    {/* BIOGRAPHY 01: RISHIKESH */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start"
                    >
                        {/* Masonry Pop Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -2, y: -5 }}
                            className="md:col-span-5 relative group"
                        >
                            {/* Studio depth frame accent */}
                            <div className="absolute inset-0 border border-brand-red translate-x-3 translate-y-3 opacity-30 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
                            <div className="relative aspect-[10/11] bg-white rounded-3xl shadow-[20px_20px_60px_#ebebe6,-20px_-20px_60px_#ffffff] p-2 md:p-4 overflow-hidden border border-black/[0.03]">
                                <Image
                                    src="/about/rishi.png"
                                    alt="Rishikesh Salunke"
                                    width={500}
                                    height={550}
                                    className="w-full h-full object-cover rounded-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 mix-blend-multiply"
                                />
                            </div>
                        </motion.div>

                        {/* Architectural Info Layout */}
                        <div className="md:col-span-7 pt-4 space-y-12">
                            <div className="space-y-4">
                                <motion.h2
                                    whileInView={{ x: 0 }} initial={{ x: 20 }}
                                    className="inline-block ranchers-regular bg-brand-red text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-black text-xs md:text-2xl tracking-tight italic"
                                >
                                    Technical Storyteller // Rishikesh
                                </motion.h2>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[8px] md:text-sm font-mono uppercase tracking-[0.3em] text-[#333]">
                                    <p>— BSc IT Grad</p>
                                    <p>— Software Dev</p>
                                    <p>— Freelancer</p>
                                    <p>— Intern @ DigitioHub</p>
                                </div>
                            </div>

                            <EditorialText
                                name="Rishikesh Salunke"
                                description={descriptions.rishi}
                            />
                        </div>
                    </motion.div>

                    {/* BIOGRAPHY 02: RUTUJA (Flipped Masonry) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start"
                    >
                        {/* Architectural Info Layout */}
                        <div className="md:col-span-7 md:order-1 pt-4 space-y-12 flex flex-col items-end text-right">
                            <div className="space-y-4 flex flex-col items-end">
                                <motion.h2
                                    whileInView={{ x: 0 }} initial={{ x: -20 }}
                                    className="inline-block ranchers-regular bg-black text-brand-red px-5 md:px-8 py-2 md:py-3 rounded-full font-black text-xs md:text-2xl tracking-tight italic"
                                >
                                    Visual Narrative // Rutuja
                                </motion.h2>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[8px] md:text-sm font-mono uppercase tracking-[0.3em] text-[#333]">
                                    <p>BAMMC Graduate —</p>
                                    <p>Wilson College —</p>
                                    <p>Video Editor —</p>
                                    <p>Cinematographer —</p>
                                </div>
                            </div>

                            <EditorialText
                                name="Rutuja Dalvi"
                                description={descriptions.rutu}
                            />
                        </div>

                        {/* Masonry Pop Image Container (order flipped) */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 2, y: -5 }}
                            className="relative group md:col-span-5 md:order-2"
                        >
                            {/* Studio depth frame accent */}
                            <div className="absolute inset-0 border border-brand-red -translate-x-3 -translate-y-3 opacity-30 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
                            <div className="relative aspect-[10/11] bg-white rounded-3xl shadow-[20px_20px_60px_#ebebe6,-20px_-20px_60px_#ffffff] p-2 md:p-4 overflow-hidden border border-black/[0.03]">
                                <Image
                                    src="/about/rutu.png"
                                    alt="Rutuja Dalvi"
                                    width={500}
                                    height={550}
                                    className="w-full h-full object-cover rounded-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 mix-blend-multiply"
                                />
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </section>

        </div>
    );
}