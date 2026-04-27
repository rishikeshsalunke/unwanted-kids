"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LongFormContent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollShift = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const content = [
    { id: 1, type: 'youtube', src: 'https://www.youtube.com/embed/NW-5OXBDTZo', label: "Podcast Series" },
    { id: 2, type: 'instagram', src: 'https://www.instagram.com/p/DQwGO1GDZKm/embed/', label: "Behind the Scenes" },
    { id: 3, type: 'youtube', src: 'https://www.youtube.com/embed/qnD1p4Q-IRY', label: "Mini Documentary" },
    { id: 4, type: 'youtube', src: 'https://www.youtube.com/embed/BEpq2cMUY4o', label: "Vlog Edit" },
    { id: 5, type: 'instagram', src: 'https://www.instagram.com/p/DI_C7OFvfc5/embed/', label: "Cinematic Reel" },
    { id: 6, type: 'youtube', src: 'https://www.youtube.com/embed/qnD1p4Q-IRY', label: "Interview Set" },
    { id: 7, type: 'instagram', src: 'https://www.instagram.com/reel/DQL_q1hjeR8/embed/', label: "Color Grading" },
    { id: 8, type: 'instagram', src: 'https://www.instagram.com/p/DP6H43uE2B3/embed/', label: "Production Flow" },
  ];

  const youtubeVideos = content.filter(item => item.type === 'youtube');
  const instagramVideos = content.filter(item => item.type === 'instagram');

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#F5F5F0] py-24 md:py-40 px-4 md:px-20 overflow-hidden border-t border-black/5"
    >
      
      {/* 🌪️ CONTINUOUS INFINITE MARQUEE */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.div 
          style={{ x: scrollShift }} 
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, "-100%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.02] italic leading-none uppercase"
            >
              <span className="pr-20">NARRATIVES</span>
              <span className="pr-20">LONGFORM</span>
              <span className="pr-20">EPISODIC</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🖋️ UPDATED EDITORIAL HEADER */}
        <div className="max-w-4xl mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
              Studio Archive
            </span>
          </motion.div>
          
          <h2 className="text-[12vw] md:text-[9rem] font-bold text-gray-900 leading-[0.85] tracking-tighter uppercase mb-10">
            Long Form <br /> 
            <span className="text-red-600 italic font-serif font-light lowercase">Narratives.</span>
          </h2>
          
          <p className="text-gray-500 text-xs md:text-sm max-w-md md:max-w-xl leading-relaxed font-medium uppercase tracking-wider">
            Structuring complex stories through precise pacing and continuity. From multi-cam podcasts to narrative vlogs, I focus on keeping the viewer hooked for the full duration.
          </p>
        </div>

        {/* YOUTUBE GRID */}
        <div className="space-y-4 md:space-y-10 mb-24">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
             <h3 className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400">01 — YouTube Mastercuts</h3>
             <span className="text-[10px] font-bold uppercase text-red-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                4K Production
             </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {youtubeVideos.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.01] border border-black/5">
                  <iframe
                    className="w-full h-full border-none grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    src={item.src}
                    title={item.label}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-5 flex justify-between items-center px-2">
                  <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">{item.label}</span>
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-tighter border-b border-black/20 group-hover:border-red-600 transition-colors cursor-pointer">
                    View Project ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INSTAGRAM GRID */}
        <div className="space-y-4 md:space-y-10">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
             <h3 className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400">02 — Social Storytelling</h3>
             <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Vertical Format</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {instagramVideos.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-[9/16] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all border border-white"
              >
                <iframe
                  src={item.src}
                  className="w-full h-full border-none scale-[1.02]"
                  title={item.label}
                  scrolling="no"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY DECORATION */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F5F0] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default LongFormContent;