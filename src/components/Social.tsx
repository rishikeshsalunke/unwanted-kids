"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Social() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Setup for Scroll-Reactive Marquee
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scrollShift = useTransform(smoothProgress, [0, 1], [100, -100]);
    const VIDEO_BASE = "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/";

    const reels = [
        { video: `${VIDEO_BASE}turn1_ujprtu.mp4`, thumb: "/reels/thumb1.jpg", views: "24.5k" },
        { video: `${VIDEO_BASE}latur1_l5bgeu.mp4`, thumb: "/reels/thumb2.jpg", views: "18.2k" },
        { video: `${VIDEO_BASE}turn2_ykkoet.mp4`, thumb: "/reels/thumb3.jpg", views: "109k" },
        { video: `${VIDEO_BASE}latur2_ghxvul.mp4`, thumb: "/reels/thumb4.jpg", views: "32k" },
        { video: `${VIDEO_BASE}turn3_ukdlns.mp4`, thumb: "/reels/thumb1.jpg", views: "24.5k" },
        { video: `${VIDEO_BASE}latur3_tswkvd.mp4`, thumb: "/reels/thumb2.jpg", views: "18.2k" },
        { video: `${VIDEO_BASE}turn4_tkurr6.mp4`, thumb: "/reels/thumb3.jpg", views: "109k" },
        { video: `${VIDEO_BASE}turn5_kqpyvk.mp4`, thumb: "/reels/thumb4.jpg", views: "32k" },
        { video: `${VIDEO_BASE}turn6_snt4vf.mp4`, thumb: "/reels/thumb4.jpg", views: "32k" },
        { video: `${VIDEO_BASE}turn7_y2hhqo.mp4`, thumb: "/reels/thumb4.jpg", views: "32k" },
    ];

    return (
        <section
            ref={containerRef}
            className="relative bg-[#F5F5F0] py-24 md:py-20 px-4 overflow-hidden"
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
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.02] italic leading-none"
                    >
                        <span className="pr-20">VERTICAL</span>
                        <span className="pr-20">CONTENT</span>
                        <span className="pr-20">ARCHIVE</span>
                    </motion.div>

                    {/* Secondary block for seamless looping */}
                    <motion.div
                        animate={{ x: [0, "-100%"] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.02] italic leading-none"
                    >
                        <span className="pr-20">VERTICAL</span>
                        <span className="pr-20">CONTENT</span>
                        <span className="pr-20">ARCHIVE</span>
                    </motion.div>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Modernized Header */}
                <header className="mb-20 text-center space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase block"
                    >
                        Content Distribution
                    </motion.span>
                    <h2 className="ranchers-regular text-6xl md:text-9xl text-gray-900 tracking-tight">
                        Social <span className="text-red-600">Sync</span>
                    </h2>
                </header>

                {/* THE "TABLET" CONTAINER */}
                <div className="relative group max-w-4xl mx-auto">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors duration-700" />

                    <div className="relative bg-white/60 backdrop-blur-2xl border border-white rounded-[2.5rem] p-4 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">

                        {/* Profile Section */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-black/5 pb-12">
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                className="relative p-1 rounded-full bg-gradient-to-tr from-[#FFB800] via-[#FF0000] to-[#D300C5] shadow-xl"
                            >
                                <div className="bg-white p-1 rounded-full">
                                    <img
                                        src="/about/rutu.png"
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                                        alt="Profile"
                                    />
                                </div>
                                <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 border-4 border-white rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                            </motion.div>

                            <div className="text-center md:text-left space-y-2">
                                <div className="flex flex-col md:flex-row items-center gap-3">
                                    <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">unwanted__kids</h3>
                                    <button className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold px-6 py-2 rounded-full transition-all uppercase tracking-widest">
                                        Follow
                                    </button>
                                </div>
                                <div className="flex justify-center md:justify-start gap-6 font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                                    <span><b className="text-black">{reels.length}</b> Posts</span>
                                    <span><b className="text-black">12.4k</b> Reach</span>
                                    <span><b className="text-black">320</b> Growth</span>
                                </div>
                                <p className="text-sm text-gray-600 max-w-sm font-medium leading-relaxed">
                                    Cinematic Short-Form <br /> Content & Visual Strategy.
                                </p>
                            </div>
                        </div>

                        {/* REELS GRID */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                            {reels.map((item, i) => (
                                <motion.div
                                    key={i}
                                    onHoverStart={() => setHoveredIndex(i)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-200 shadow-inner group/item"
                                >
                                    <video
                                        src={item.video}
                                        poster={item.thumb}
                                        // preload="metadata"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 translate-y-4 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-300">
                                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                            <span className="text-white text-[10px] font-mono font-bold">{item.views}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Noise & Grain */}
            <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.04] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            </div>
        </section>
    );
}