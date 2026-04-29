"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
    const skills = [
        { name: "After Effects", level: 85, icon: "/icons/ae.png" },
        { name: "Premiere Pro", level: 80, icon: "/icons/pr.png" },
        { name: "CapCut", level: 75, icon: "/icons/capcut.png" },
        { name: "DaVinci", level: 70, icon: "/icons/davinci.png" },
    ];

    return (
        <section className="relative bg-[#F5F5F0]  flex items-center text-black overflow-hidden">
            {/* 🎞️ Film Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 md:gap-16 w-full px-4 md:px-10 relative z-10">

                {/* ================= LEFT SIDE (Technical Mastery) ================= */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-8 md:mb-16"
                    >
                        <h2 className="inline-block border border-red-500/30 text-red-500 px-4 md:px-8 py-2 md:py-3 rounded-full font-bold text-[10px] md:text-sm uppercase tracking-[0.4em] bg-red-500/5 backdrop-blur-sm">
                            Technical Stack
                        </h2>
                    </motion.div>

                    {/* SKILLS LIST with Active Energy Bars */}
                    <div className="space-y-6 md:space-y-12 relative z-20">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col gap-2 md:gap-4 group">
                                <div className="flex items-center gap-3 md:gap-6">
                                    {/* Larger, Animated Icon Container */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center bg-white shadow-xl rounded-xl border border-gray-200 transition-shadow group-hover:shadow-red-500/10"
                                    >
                                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
                                    </motion.div>

                                    <div className="flex flex-col">
                                        <span className="text-[9px] md:text-xs font-black tracking-[0.2em] uppercase text-black/80">{skill.name}</span>
                                        <span className="text-[7px] md:text-[10px] font-mono text-red-500 font-bold">{skill.level}% Optimized</span>
                                    </div>
                                </div>

                                {/* Continuous Moving Line */}
                                <div className="w-full max-w-[160px] md:max-w-[350px] h-[2px] md:h-[3px] bg-gray-200 relative overflow-hidden rounded-full">
                                    {/* Static Progress Base */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
                                        className="absolute top-0 left-0 h-full bg-red-600 z-10"
                                    />

                                    {/* ⚡ Continuous Energy Pulse Animation */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "linear",
                                            delay: index * 0.2
                                        }}
                                        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent z-20"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ================= DESCRIPTIONS (Technical Mastery) ================= */}
                    <div className="mt-16 md:mt-24 space-y-10 max-w-lg">

                        {/* After Effects - Main Feature */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-[1px] w-8 bg-red-500 group-hover:w-12 transition-all duration-500" />
                                <h3 className="text-black font-black text-xs md:text-2xl uppercase tracking-tighter">
                                    After Effects <span className="text-red-500">&</span> Motion
                                </h3>
                            </div>
                            <p className="text-[9px] md:text-[15px] leading-relaxed text-gray-600 font-medium pl-11 border-l-2 border-transparent group-hover:border-red-500/30 transition-all duration-700">
                                I craft immersive visual narratives using After Effects for 3D motion graphics,
                                complex VFX, and dynamic character animations—transforming static ideas into
                                high-impact cinematic experiences.
                            </p>
                        </motion.div>

                        {/* Secondary Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-11">

                            {/* Color Grading */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative"
                            >
                                <h3 className="text-red-600 font-bold text-[10px] md:text-lg mb-2 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                                    Color Grading
                                </h3>
                                <p className="text-[8px] md:text-[13px] leading-relaxed text-gray-500 italic">
                                    Using <span className="text-black font-semibold">DaVinci Resolve</span> to manipulate light and mood, ensuring every frame carries a professional, cinematic aesthetic.
                                </p>
                            </motion.div>

                            {/* Core Editing */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <h3 className="text-red-600 font-bold text-[10px] md:text-lg mb-2 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                                    Core Editing
                                </h3>
                                <p className="text-[8px] md:text-[13px] leading-relaxed text-gray-500">
                                    Precision cutting and audio synchronization in <span className="text-black font-semibold">Premiere Pro</span> & <span className="text-black font-semibold">CapCut</span> to maintain perfect storytelling rhythm.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SIDE (Identity & Experience) ================= */}
                <div className="relative flex flex-col justify-start">

                    {/* CONTACT INFO CARD */}
                    <div className="mb-8 md:mb-8 grid grid-cols-1 gap-2 text-[6px] md:text-xs font-mono uppercase tracking-widest text-gray-500">
                        <div className="flex items-center gap-2">
                            {/* <span className="text-red-500">/</span> <span>Mumbai, India</span> */}
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <span className="text-red-500">/</span> <span>Multimedia Graduate</span> */}
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <span className="text-red-500">/</span> <span className="break-all">unwantedkid291@gmail.com</span> */}
                        </div>
                    </div>

                    {/* DARK EXPERIENCE CARD */}
                    {/* DARK EXPERIENCE CARD */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-[#1e2229] to-[#121418] border border-white/10 p-6 md:p-12 rounded-2xl md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md h-full max-h-[400px] md:max-h-[670px] flex flex-col"
                    >
                        {/* 🔴 Decorative "Recording" light effect */}
                        <div className="absolute top-6 right-8 flex items-center gap-2 z-20">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                            <span className="text-[8px] font-mono text-red-600/60 uppercase tracking-widest">Live_History</span>
                        </div>

                        <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-10 flex-shrink-0">
                            <div className="w-1 md:w-1.5 h-10 md:h-16 bg-gradient-to-b from-red-500 to-red-800 rounded-full" />
                            <h2 className="text-2xl md:text-6xl font-extralight text-white uppercase tracking-tighter italic">
                                Work <span className="font-black not-italic text-red-500">Exp.</span>
                            </h2>
                        </div>

                        {/* 📜 SCROLLABLE AREA - This prevents the card from growing */}
                        <div className="flex-1 overflow-y-auto pr-2 space-y-10 md:space-y-12 scrollbar-hide custom-scrollbar">

                            {/* 2026 - Dharavi Project */}
                            <div className="relative group">
                                <div className="absolute -left-2 top-0 h-full w-[1px] bg-white/5 group-hover:bg-red-500/50 transition-colors" />
                                <div className="pl-6 md:pl-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[9px] md:text-xs text-red-500 font-mono font-bold">2026 //</span>
                                        <h3 className="font-bold text-sm md:text-2xl text-white uppercase tracking-tight">Dharavi Redevelopment</h3>
                                    </div>
                                    <p className="text-[10px] md:text-[14px] text-gray-400 font-light leading-relaxed max-w-md">
                                        Lead Video Editor | 700+ Video Archives <br />
                                        <span className="text-gray-400 italic mt-1 block">
                                            Recording and editing resident testimonies and site documentation for the major redevelopment project.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* 2026 - Social Media Management */}
                            <div className="relative group">
                                <div className="absolute -left-2 top-0 h-full w-[1px] bg-white/5 group-hover:bg-red-500/50 transition-colors" />
                                <div className="pl-6 md:pl-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[9px] md:text-xs text-red-500 font-mono font-bold">2026 //</span>
                                        <h3 className="font-bold text-sm md:text-2xl text-white uppercase tracking-tight">Social Management</h3>
                                    </div>
                                    <p className="text-[10px] md:text-[14px] text-gray-400 font-light leading-relaxed max-w-md">
                                        Content Lead for <span className="text-white/80">Laturkars, Turning Point, Gravitees & WFSS.</span> <br />
                                        <span className="text-gray-400 italic mt-1 block">
                                            Directing, shooting, and editing native video content for brand Instagram growth.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* 2025 - PIM Trust */}
                            <div className="relative group">
                                <div className="absolute -left-2 top-0 h-full w-[1px] bg-white/5 group-hover:bg-red-500/50 transition-colors" />
                                <div className="pl-6 md:pl-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[9px] md:text-xs text-red-500 font-mono font-bold">2025 //</span>
                                        <h3 className="font-bold text-sm md:text-2xl text-white uppercase tracking-tight">Pune Int. Marathon Trust</h3>
                                    </div>
                                    <p className="text-[10px] md:text-[14px] text-gray-400 font-light leading-relaxed max-w-md">
                                        Freelance Video Editor | Cinematographer <br />
                                        <span className="text-gray-400 italic mt-1 block">
                                            Directing professional podcast productions and large-scale event coverage.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* 2025 - Lords Framing */}
                            <div className="relative group">
                                <div className="absolute -left-2 top-0 h-full w-[1px] bg-white/5 group-hover:bg-red-500/50 transition-colors" />
                                <div className="pl-6 md:pl-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[9px] md:text-xs text-red-500 font-mono font-bold">2025 //</span>
                                        <h3 className="font-bold text-sm md:text-2xl text-white uppercase tracking-tight">Lords Framing Org.</h3>
                                    </div>
                                    <p className="text-[10px] md:text-[14px] text-gray-400 font-light leading-relaxed max-w-md">
                                        Videographer & Social Media Lead <br />
                                        <span className="text-gray-400 italic mt-1 block">
                                            Managing end-to-end video shooting and digital strategy.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Services Footer - Fixed at bottom */}
                        <div className="pl-6 md:pl-10 pt-6 mt-6 border-t border-white/5 flex-shrink-0">
                            <h3 className="font-mono text-[9px] md:text-xs text-gray-400 uppercase mb-4 tracking-[0.3em]">Specialized Services</h3>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                {["Motion Graphics", "Color Grading", "Cinematography", "VFX"].map((service) => (
                                    <span key={service} className="text-[7px] md:text-[11px] font-mono text-red-500 border border-red-500/20 px-2 py-1 rounded-sm bg-red-500/5">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}