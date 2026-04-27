"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ColorGrading() {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Marquee scroll depth shift
    const scrollShift = useTransform(smoothProgress, [0, 1], [100, -100]);
    
    // Parallax and rotation for videos
    const rotate = useTransform(smoothProgress, [0, 1], [2, -2]);
    const videoY = useTransform(smoothProgress, [0, 1], [50, -50]);

    const VIDEO_BASE = "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/";

    const videos = [
        { src: `${VIDEO_BASE}color1_rydoyc.mp4`, label: "REC.709 // GRADE_01", lut: "Cinematic Teal" },
        { src: `${VIDEO_BASE}color2_ixepke.mp4`, label: "LOG_V3 // GRADE_02", lut: "Golden Hour" }
    ];
    return (
        <section 
            ref={containerRef}
            className="relative bg-[#F5F5F0] py-24 px-6 md:px-20 overflow-hidden font-sans border-t border-black/5"
        >
            {/* 🌪️ CONTINUOUS INFINITE MARQUEE */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
                <motion.div 
                    style={{ x: scrollShift }} 
                    className="flex whitespace-nowrap"
                >
                    <motion.div
                        animate={{ x: [0, "-100%"] }}
                        transition={{ 
                            duration: 30, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.02] italic leading-none"
                    >
                        <span className="pr-20">COLOR GRADE</span>
                        <span className="pr-20">COLOR GRADE</span>
                    </motion.div>
                    
                    {/* Secondary block for seamless looping */}
                    <motion.div
                        animate={{ x: [0, "-100%"] }}
                        transition={{ 
                            duration: 30, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.02] italic leading-none"
                    >
                        <span className="pr-20">COLOR GRADE</span>
                        <span className="pr-20">COLOR GRADE</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <p className="font-mono text-[10px] tracking-[0.4em] text-gray-400 uppercase">Processing Signal...</p>
                        </div>
                        <h2 className="text-[12vw] md:text-[9rem] font-bold text-gray-900 leading-[0.8] tracking-tighter uppercase">
                            Color<br />
                            <span className="text-red-600 font-serif italic font-light lowercase">Grading.</span>
                        </h2>
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-[10px] md:text-xs max-w-[280px] text-left md:text-right uppercase tracking-[0.2em] leading-relaxed border-l md:border-l-0 md:border-r border-red-600 pl-4 md:pl-0 md:pr-4"
                    >
                        Sculpting light and shadow to define mood, contrast, and visual consistency 
                        across the narrative spectrum.
                    </motion.p>
                </div>

                {/* Videos Section */}
                <div className="space-y-32">
                    {videos.map((vid, index) => (
                        <motion.div 
                            key={index}
                            style={{ rotate, y: videoY }}
                            className="relative group mx-auto w-full lg:w-[85%]"
                        >
                            <div className="absolute -top-6 left-0 right-0 flex justify-between font-mono text-[9px] text-gray-400 tracking-widest px-2">
                                <span>[ SCANNING_{index + 1} ]</span>
                                <span>{vid.label}</span>
                                <span className="hidden md:inline">LUT: {vid.lut}</span>
                            </div>

                            <div className="relative aspect-video bg-black rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border-x-[12px] md:border-x-[20px] border-black/90">
                                <video
                                    src={vid.src}
                                    autoPlay
                                    preload="metadata"
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                
                                <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-[1px] h-8 bg-white/40" />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex-1 h-[1px] bg-black/10" />
                                <div className="font-mono text-[8px] tracking-widest text-gray-500 flex gap-10">
                                    <span>SHADOWS: -12%</span>
                                    <span>GAMMA: 2.4</span>
                                    <span>SAT: 104%</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background element at bottom
            <motion.div 
                style={{ x: useTransform(smoothProgress, [0, 1], ["5%", "-5%"]) }}
                className="absolute bottom-10 left-0 text-[5vw] font-black text-black/[0.03] pointer-events-none select-none italic"
            >
                DA VINCI RESOLVE STUDIO 19
            </motion.div> */}
        </section>
    );
}