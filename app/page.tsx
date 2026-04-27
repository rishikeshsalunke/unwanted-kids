// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
//       {/* Navigation */}
//       <nav className="absolute top-0 right-0 p-8 flex gap-8 text-sm font-medium z-50">
//         <span className="cursor-pointer hover:text-red-600 transition">Portfolio</span>
//         <span className="text-gray-400 cursor-pointer hover:text-white transition">Long Form</span>
//       </nav>

//       {/* Main Container */}
//       <div className="relative flex items-center justify-center min-h-screen max-w-7xl mx-auto px-10">

//         {/* Top Left Bio */}
//         <div className="absolute top-20 left-0 z-30 flex flex-col gap-6">
//           {/* The Name: Using brand-red, super thick font, and tight line height */}
//           <h1 className="text-6xl md:text-5xl font-black text-brand-red  leading-[0.8] tracking-tighter">
//             Rutuja Dalvi
//           </h1>

//           {/* The Role: Pure white, bold, and slightly smaller than the previous version */}
//           <div className="flex flex-col">
//             <p className="text-2xl md:text-2xl font-bold text-white tracking-tight">
//               video Editor
//             </p>
//             <p className="text-2xl md:text-2xl font-bold text-white tracking-tight">
//               Cinematographer
//             </p>
//           </div>
//         </div>

//         {/* The Central Image - Needs to be a transparent PNG or high-contrast photo */}
//         <div className="relative w-full h-screen flex items-center justify-center z-10">
//           <img
//             src="/hero.png"
//             alt="Rutuja Dalvi"
//             className="h-full object-contain  brightness-75 contrast-125 mix-blend-lighten"
//           // className="h-full object-contain grayscale brightness-75 contrast-125 mix-blend-lighten"
//           />
//         </div>

//         {/* Large "Portfolio" Text Overlay */}
//         <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[15vw]  font-serif italic text-brand-red leading-none z-20 select-none">
//           Portfolio
//         </h1>

//       </div>

//     </main>

    

    
//   );
// }


import Hero from "../src/components/Hero";
import About from "../src/components/About";
import MotionGraphics from "../src/components/MotionGraphics";
import Short from "../src/components/Short";
import Color from "../src/components/Color";
import Social from "../src/components/Social";
import Cinematography from "../src/components/Cinematography";
import LongCont from "../src/components/LongCont";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MotionGraphics />
      <Short />
      <Color />
      <Social />
      {/* <Cinematography /> */}
      <LongCont />
      {/* When we build the Work section, we just add <Work /> here */}
    </main>
  );
}