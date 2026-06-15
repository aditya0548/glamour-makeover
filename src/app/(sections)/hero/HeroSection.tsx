import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #2A2A2A 50%, #4A3F5C 100%)",
      }}
    >
      {/* Decorative blurred circles */}
      <div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{ backgroundColor: "#F4D4D7", opacity: 0.06 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{ backgroundColor: "#F4D4D7", opacity: 0.06 }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[200px] h-[200px] rounded-full blur-[80px]"
        style={{ backgroundColor: "#F4D4D7", opacity: 0.06 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <div
          className="mb-6 px-4 py-1.5 rounded-full border animate-fade-in-up"
          style={{
            backgroundColor: "rgba(183,110,121,0.15)",
            borderColor: "rgba(183,110,121,0.4)",
            color: "#F4D4D7",
            fontSize: "13px",
            animationDelay: "100ms",
            animationFillMode: "both"
          }}
        >
          ✦ Ahilyanagar&apos;s Trusted Beauty Artist
        </div>

        <h1
          className="font-serif font-bold text-white text-[36px] sm:text-[48px] lg:text-[72px] leading-tight mb-6 tracking-[-0.02em] animate-hero-title"
          style={{
            animationFillMode: "both"
          }}
        >
          Tap. Flip. Transform.
        </h1>

        <p
          className="font-sans text-[16px] lg:text-[20px] mb-10 max-w-xl animate-fade-in-up"
          style={{
            color: "#F4D4D7",
            animationDelay: "300ms",
            animationFillMode: "both"
          }}
        >
          Every face tells a story. Let&apos;s make yours legendary.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="#contact"
            className="font-accent font-bold text-white px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 animate-fade-in-up shadow-sm hover:shadow-[0_8px_24px_rgba(183,110,121,0.4)] hover:bg-[#9D5A66]"
            style={{
              backgroundColor: "#B76E79",
              animationDelay: "600ms",
              animationFillMode: "both"
            }}
          >
            Book Your Moment
          </Link>
          <Link
            href="#gallery"
            className="font-sans font-medium hover:underline animate-fade-in-up"
            style={{
              color: "#F4D4D7",
              animationDelay: "700ms",
              animationFillMode: "both"
            }}
          >
            See My Work ↓
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-custom">
        <ChevronDown
          size={32}
          style={{ color: "rgba(244,212,215,0.5)" }}
        />
      </div>
    </section>
  );
}
