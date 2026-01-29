"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import SocialLinks from "./components/SocialLinks";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";

// function TypingText({ text, delay = 50 }: { text: string; delay?: number }) {
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, delay);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, text, delay]);

//   return (
//     <span>
//       {displayText}
//       <span className="animate-pulse">_</span>
//     </span>
//   );
// }

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-green-400">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Banner />

        {showContent && (
          <>
            <InfoSection />
            <SocialLinks />
            <Portfolio />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
