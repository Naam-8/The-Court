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
      {/* Home — Hero + Header */}
      <div id="home" className="bg-black overflow-hidden relative">
        <GridBackground />
        <div className="relative z-10 px-6 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-12">
          <Header
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <HeroSection />
        </div>
      </div>

      <ClubSection />
      <GameSection />
      <SportsLogosSection />
      <CourtGallerySection />
      <MembershipSection />
      <VirtualAdsSection />
      <FaqSection />
      <CtaSection />
      <MemberFormSection />
      <Footer />
    </div>
  );
}
