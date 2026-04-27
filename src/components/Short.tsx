"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

    const VIDEO_BASE = "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/";

const ShortContent = () => {
    const containerRef = useRef(null);
    const media = [
        { src: `${VIDEO_BASE}short1_ploogo.mp4`, alt: 'Car content', label: 'AUTOMOTIVE' },
        { src: `${VIDEO_BASE}short2_wyqsnn.mp4`, alt: 'Traditional event', label: 'CULTURAL' },
        { src: `${VIDEO_BASE}short3_mmafcp.mp4`, alt: 'Running', label: 'ATHLETIC' },
        { src: `${VIDEO_BASE}short4_huitbk.mp4`, alt: 'Interview', label: 'EDITORIAL' },
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    
    // Parallax for the main phone and the side ones
    const mainPhoneY = useTransform(smoothProgress, [0, 1], [50, -50]);
    const sidePhonesY = useTransform(smoothProgress, [0, 1], [100, -100]);
    const textParallax = useTransform(smoothProgress, [0, 1], [0, -150]);
    
    // Subtle scroll-based shift to add to the continuous animation
    const scrollShift = useTransform(smoothProgress, [0, 1], [0, -200]);

    const VideoPlayer = ({ src }: { src: string }) => (
        <video
            src={src}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02]"
        />
    );

    return (
        <section 
            ref={containerRef}
            className="relative bg-[#F5F5F0] py-20 px-6 md:px-20 overflow-hidden font-sans border-t border-black/5"
        >
            {/* CONTINUOUS INFINITE MARQUEE */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none">
                <motion.div 
                    style={{ x: scrollShift }} // Mixes scroll depth with the loop
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
                        <span className="pr-20">VERTICAL CONTENT</span>
                        <span className="pr-20">VERTICAL CONTENT</span>
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
                        <span className="pr-20">VERTICAL CONTENT</span>
                        <span className="pr-20">VERTICAL CONTENT</span>
                    </motion.div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-2 gap-4 md:gap-16 items-center mb-16 md:mb-32">
                    {/* Text Content */}
                    <motion.div style={{ y: textParallax }} className="flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-red-600" />
                            <span className="text-red-600 font-mono text-[10px] tracking-[0.3em] uppercase">Reels & Shorts</span>
                        </div>

                        <h1 className="text-[12vw] md:text-[8rem] font-bold text-gray-900 leading-[0.85] tracking-tighter mb-8">
                            Short<br />
                            <span className="text-red-600 italic font-serif font-light">Form.</span>
                        </h1>

                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gray-500 text-[9px] md:text-sm max-w-xs md:max-w-md leading-relaxed uppercase tracking-wider"
                        >
                            Crafting high-retention narratives. From trending sonic landscapes to 
                            precision-cut visual hooks designed to stop the scroll.
                        </motion.p>
                    </motion.div>

                    {/* Main Featured Video (Phone Frame) */}
                    <motion.div 
                        style={{ y: mainPhoneY }}
                        className="flex justify-end relative"
                    >
                        <div className="relative group w-full max-w-[160px] md:max-w-[420px] aspect-[9/16] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] md:border-[12px] border-white ring-1 ring-black/5">
                            <VideoPlayer src={media[0].src} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <p className="font-mono text-[10px] tracking-widest uppercase">Feature // 01</p>
                                <p className="text-xl font-light tracking-tight">{media[0].label}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Secondary Shorts */}
                <div className="grid grid-cols-3 gap-4 md:gap-12 mt-12">
                    {media.slice(1).map((item, index) => (
                        <motion.div 
                            key={index}
                            style={{ y: sidePhonesY }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="aspect-[9/16] rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                                <VideoPlayer src={item.src} />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            
                            <div className="mt-4 flex justify-between items-center px-1">
                                <span className="font-mono text-[8px] md:text-[10px] text-gray-400 tracking-widest uppercase">
                                    0{index + 2} / {item.label}
                                </span>
                                <div className="h-[1px] flex-1 mx-4 bg-black/5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className=" flex justify-center">
                <div className="flex items-center gap-8">
                   <div className="w-1 h-1 rounded-full bg-red-600 animate-ping" />
                   <span className="font-mono text-[9px] tracking-[1em] uppercase opacity-40">Ready to engage</span>
                </div>
            </div>
        </section>
    );
};

export default ShortContent;