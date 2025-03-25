"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Products from "../components/products";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ServicesSection from "../components/service-section";
import ReviewsSection from "../components/reviews-section";
import RippleDemo from "../components/ripple-demo";

export default function Home(): JSX.Element {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    // Scroll to top on mount (page load/refresh)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <RippleDemo />
      <Products />
      <ServicesSection />
      <ReviewsSection />
      <About />
      <Contact />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </main>
  );
}