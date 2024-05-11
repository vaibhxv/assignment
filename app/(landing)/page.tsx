import React from "react";

import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingContent from "@/components/landing-content";
import { StarBackground } from "@/components/StarBackground";

export default function LandingPage() {
  return (
    <div className="h-full bg-black">
      <StarBackground />
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
