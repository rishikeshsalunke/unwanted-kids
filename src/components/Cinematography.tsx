"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Cinematography = () => {
    const containerRef = useRef(null);

    // Smooth scroll progress for parallax effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });




    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const BASE = "https://res.cloudinary.com/dc7wv0ppt/image/upload/f_auto/q_auto/";
    const profiles = [
        {

            name: "Rutuja Dalvi",
            videoSrc: "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/rutu_cgnsmx.mp4"
,
            images: [

                { id: 1, src: `${BASE}t1_vetnre.png`, className: 'col-span-1 mt-12' },
                { id: 2, src: `${BASE}t2_qijrg4.png`, className: 'col-span-1 mt-20' },
                { id: 3, src: `${BASE}t3_s6tkv4.png`, className: 'col-span-1 mt-12' },
                { id: 4, src: `${BASE}t4_ci0zkg.png`, className: 'col-span-2' },
                { id: 5, src: `${BASE}t5_dz7qfl.png`, className: 'col-span-1' },
                { id: 6, src: `${BASE}t6_qnx13l.png`, className: 'col-span-1 mt-12' },
                { id: 7, src: `${BASE}t7_z6cxqu.png`, className: 'col-span-1' },
                { id: 8, src: `${BASE}t8_xq7koo.png`, className: 'col-span-1 ' },

            ]
        },
        {
            name: "Kids",
            videoSrc: "https://res.cloudinary.com/dc7wv0ppt/video/upload/f_auto/q_auto/kids_dpffte.mp4",
            images: [
                { id: 1, src: `${BASE}k1_p8jo65.png`, className: 'col-span-1' },
                { id: 2, src: `${BASE}k2_sxpuef.png`, className: 'col-span-1 mt-20' },
                { id: 3, src: `${BASE}k3_jkdn1r.png`, className: 'col-span-1' },
                { id: 4, src: `${BASE}k4_myiygl.png`, className: 'col-span-2' },
                { id: 5, src: `${BASE}k5_oakg0b.png`, className: 'col-span-1' },
                { id: 6, src: `${BASE}k6_haiwkl.png`, className: 'col-span-2' },
                { id: 7, src: `${BASE}k7_zntfqi.png`, className: 'col-span-1' },
                { id: 8, src: `${BASE}k8_v0ijib.png`, className: 'col-span-1 mt-12' },
                { id: 9, src: `${BASE}k9_rnrhwl.png`, className: 'col-span-1' },
                { id: 10, src: `${BASE}k10_eqfmaq.png`, className: 'col-span-1' },
            ]
        }
    ];

    return (
        <motion.section
            ref={containerRef}
            className="relative py-24  px-6 md:px-20 bg-[#F5F5F0] font-sans text-[#1a1a1a] overflow-hidden"
        >
            {/* Soft Paper Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            {/* Subtle floating accent */}
            <motion.div
                style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
                className="absolute top-40 right-[-5%] text-[20vw] font-black text-black/[0.02] select-none"
            >
                STUDIO
            </motion.div>

            {/* Header Section */}
            <div className="max-w-screen-2xl mx-auto mb-40 relative">
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15vw] md:text-[12rem] font-light tracking-tighter leading-none"
                    >
                        Cinema<span className="text-red-500 font-serif italic">.</span>
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
                        className="text-gray-500 text-xs md:text-sm max-w-sm uppercase tracking-[0.4em] leading-relaxed"
                    >
                        The art of storytelling through purposeful framing and light.
                    </motion.p>
                </div>
            </div>

            {profiles.map((profile, pIndex) => (
                <div key={`profile-${pIndex}`} className="mb-50">
                    {/* Section Label */}
                    <div className="flex items-center gap-4 mb-16 overflow-hidden">
                        <span className="text-red-500 font-mono text-[10px] tracking-widest">
                            0{pIndex + 1}
                        </span>
                        <motion.h3
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-extralight tracking-tight lowercase"
                        >
                            {profile.name}
                        </motion.h3>
                    </div>

                    {/* Masonry-Style Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 max-w-screen-2xl mx-auto">
                        {profile.images.map((img, iIndex) => (
                            <React.Fragment key={`${pIndex}-${img.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: iIndex * 0.05 }}
                                    className={`${img.className} group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-700`}
                                >
                                    <div className="aspect-square md:aspect-auto h-full overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                            src={img.src}
                                            alt="Cinematography shot"
                                            className="w-full h-full object-cover filter brightness-[1.02] contrast-[0.98]"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 left-4 overflow-hidden">
                                        <motion.p className="text-[9px] font-mono tracking-widest text-white bg-black/80 px-3 py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            INDEX // {img.id}
                                        </motion.p>
                                    </div>
                                </motion.div>

                                {/* Video Break - Now with reduced spacing */}
                                {img.id === 5 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        /* Removed my-12 and added -mt-1 to pull it closer to the images above */
                                        className="col-span-2 md:col-span-3 w-full aspect-video -mt-1 relative overflow-hidden  group"
                                    >
                                        <video
                                            preload="metadata"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-1000"
                                            autoPlay loop muted playsInline
                                        >
                                            <source src={profile.videoSrc} type="video/mp4" />
                                        </video>

                                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                            <div className="h-[0.5%] w-full bg-[#F5F5F0] z-10" />
                                            <div className="h-[0.5%] w-full bg-[#F5F5F0] z-10" />
                                        </div>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ))}

            {/* Footer */}
            <div className="max-w-7xl mx-auto text-center pt-20 border-t border-black/5">
                <p className="font-mono text-[10px] tracking-[1.5em] uppercase opacity-60">
                    Fin / Visual Narrative
                </p>
            </div>
        </motion.section>
    );
};

export default Cinematography;