"use client";

import React, { useRef } from 'react';
import { Easing, motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function MotionGraphics() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scrollShift = useTransform(smoothProgress, [0, 1], [100, -100]);
    const backgroundY = useTransform(smoothProgress, [0, 1], [0, -200]);
    const VIDEO_BASE = "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/";


    // 🕊️ Helper for the "Alive" floating animation
    const floatAnimation = (delay = 0) => ({
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1], // ✅ easeInOut equivalent
            delay: delay
        }
    });

    return (
        <motion.section
            ref={containerRef}
            className="relative py-24 px-6 md:px-20 bg-[#F5F5F0] font-sans text-[#1a1a1a] overflow-hidden"
        >
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-40 right-[-5%] text-[20vw] font-black text-black/[0.02] select-none z-0"
            >
                GRAPHICS
            </motion.div>

            <div className="absolute top-[50%] left-0 w-full overflow-hidden pointer-events-none select-none z-0">
                <motion.div style={{ x: scrollShift }} className="flex whitespace-nowrap">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ x: [0, "-100%"] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex whitespace-nowrap text-[15vw] font-black text-red-500/[0.03] italic leading-none"
                        >
                            <span className="pr-20">AFTER EFFECTS</span>
                            <span className="pr-20">MOTION</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10">
                <div className="max-w-screen-2xl mx-auto mb-32">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] md:text-[10rem] font-light tracking-tighter leading-none"
                        >
                            Motion<span className="text-red-500 font-serif italic">.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-10">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-[1px] w-32 bg-red-500 origin-left"
                        />
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-gray-500 text-[10px] md:text-xs max-w-md uppercase tracking-[0.4em] leading-relaxed"
                        >
                            Combining typography, shapes, and animation to deliver clear messages that match the brands tone.
                        </motion.p>
                    </div>
                </div>

                <div className="flex justify-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full max-w-[900px] cursor-none"
                    >
                        <img
                            src="/laptop.png"
                            alt="laptop"
                            className="w-full h-auto filter brightness-[1.02]"
                        />
                        <div className="absolute top-[13%] left-[15.5%] w-[69%] h-[69%] overflow-hidden bg-black shadow-inner">
                            <video
                                src={`${VIDEO_BASE}motion1_os3yoy.mp4`}
                                autoPlay loop muted playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-row justify-center items-start gap-2 md:gap-6 mt-10">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="w-[27%] md:w-[260px] -ml-6 md:ml-0 -mt-5 md:mt-2 aspect-[9/16] md:h-[500px] flex-shrink-0 rounded-[2rem] shadow-xl overflow-hidden group"
                    >
                        <video
                            src={`${VIDEO_BASE}motion2_bt0ndl.mp4`}
                            autoPlay loop muted playsInline
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    <div className="w-[45%] md:w-[600px] flex flex-col gap-2 md:gap-6">
                        {/* Top: Wide Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="w-full aspect-video md:h-[250px] -mt-15 md:-mt-20 flex-shrink-0 rounded-[2rem] md:rounded-[4rem] bg-white shadow-xl overflow-hidden border border-black/5 group"
                        >
                            <video
                                src={`${VIDEO_BASE}motion3_a2af2v.mp4`}
                                autoPlay loop muted playsInline
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        <div className="flex flex-row justify-between gap-1 md:gap-28">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="w-[48%] md:w-[230px] md:h-[370px] aspect-[9/16] flex-shrink-0 rounded-[2rem] md:rounded-[1rem] bg-white shadow-xl overflow-hidden border border-black/5"
                            >
                                <video
                                    src={`${VIDEO_BASE}motion4_kjlhye.mp4`}
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="w-[48%] md:w-[230px] md:h-[370px] aspect-[9/16] flex-shrink-0 rounded-[2rem] md:rounded-[1rem] bg-white shadow-xl overflow-hidden border border-black/5"
                            >
                                <video
                                    src={`${VIDEO_BASE}motion5_oxtyoo.mp4`}
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="w-[27%] -mr-6 md:mr-0 -mt-5 md:w-[260px] aspect-[9/16] md:h-[500px] flex-shrink-0 rounded-[2rem] shadow-xl overflow-hidden group"
                    >
                        <video
                            src={`${VIDEO_BASE}motion6_urhj0r.mp4`}
                            autoPlay loop muted playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center pt-10 opacity-60">
                <p className="font-mono text-[10px] tracking-[1.5em] uppercase">
                    Dynamics // Kinetic Design
                </p>
            </div>
        </motion.section>
    );
}