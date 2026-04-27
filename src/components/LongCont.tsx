"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LongFormContent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // This shifts the marquee slightly as you scroll down for parallax depth
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
      className="relative bg-[#F5F5F0] py-24 md:py-40 px-4 md:px-20 overflow-hidden"
    >
      
      {/* 🌪️ CONTINUOUS INFINITE MARQUEE */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.div 
          style={{ x: scrollShift }} 
          className="flex whitespace-nowrap"
        >
          {/* First Block */}
          <motion.div
            animate={{ x: [0, "-100%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.03] italic leading-none"
          >
            <span className="pr-20">NARRATIVES</span>
            <span className="pr-20">LONGFORM</span>
            <span className="pr-20">EPISODIC</span>
          </motion.div>
          
          {/* Duplicated Block for seamless looping */}
          <motion.div
            animate={{ x: [0, "-100%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap text-[25vw] font-black text-black/[0.03] italic leading-none"
          >
            <span className="pr-20">NARRATIVES</span>
            <span className="pr-20">LONGFORM</span>
            <span className="pr-20">EPISODIC</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-red-600" />
            <span className="text-red-600 font-mono text-xs tracking-[0.4em] uppercase font-bold">Studio Archive</span>
          </motion.div>
          
          <h2 className="ranchers-regular text-6xl md:text-9xl text-gray-900 leading-[0.85] italic mb-8">
            Long Form <br /> 
            <span className="text-red-600">Narratives</span>
          </h2>
          
          <p className="text-gray-600 text-sm md:text-lg max-w-xl leading-relaxed font-medium">
            Structuring complex stories through precise pacing and continuity. From multi-cam podcasts to narrative vlogs, I focus on keeping the viewer hooked for the full duration.
          </p>
        </div>

        {/* YOUTUBE GRID */}
        <div className="space-y-4 md:space-y-10 mb-20">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
             <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-400">01 — YouTube Mastercuts</h3>
             <span className="text-[10px] font-bold uppercase text-red-600 animate-pulse">● 4K Resolution</span>
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
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-black/5">
                  <iframe
                    className="w-full h-full border-none grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                    src={item.src}
                    title={item.label}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 flex justify-between items-center px-2">
                  <span className="font-mono text-[10px] text-gray-400 uppercase">{item.label}</span>
                  <span className="text-xs font-bold text-gray-900 italic">View Project ↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INSTAGRAM GRID */}
        <div className="space-y-4 md:space-y-10">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
             <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-400">02 — Social Storytelling</h3>
             <span className="text-[10px] font-bold uppercase text-gray-400">Vertical Format</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {instagramVideos.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-[9/16] rounded-2xl md:rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all border border-black/5"
              >
                <iframe
                  src={item.src}
                  className="w-full h-full border-none scale-[1.01]"
                  title={item.label}
                  scrolling="no"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY DECORATION */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F5F0] to-transparent z-20" />
    </section>
  );
};

export default LongFormContent;