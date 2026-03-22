// Temporary Coming Soon screen.
// Original full site layout is commented out below so it can be restored easily.
// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="text-center px-6">
//         <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
//           Courtlay
//         </div>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
//           Coming Soon
//         </h1>
        
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ClubSection from "./components/ClubSection";
import GameSection from "./components/GameSection";
import SportsLogosSection from "./components/SportsLogosSection";
import CourtGallerySection from "./components/CourtGallerySection";
import VirtualAdsSection from "./components/VirtualAdsSection";
import MembershipSection from "./components/MembershipSection";
import MemberFormSection from "./components/MemberFormSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto min-h-screen">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div id="home" className="bg-black overflow-hidden relative">
        <GridBackground />
        <div className="relative z-10 px-6 pb-6 sm:px-10 sm:pb-8 lg:px-16 lg:pb-12">
          <HeroSection />
        </div>
      </div>

      <GameSection />
      <SportsLogosSection />
      <VirtualAdsSection />
      <CourtGallerySection />
      <FaqSection />
      <CtaSection />
      <MemberFormSection />
      <Footer />
    </div>
  );
}

