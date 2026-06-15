import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 w-full" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Left Column (Image) */}
        <div className="w-full md:w-1/2 relative group">
          {/* Decorative pseudo-border frame */}
          <div
            className="absolute -right-3 -bottom-3 w-full h-full rounded-[20px] z-0"
            style={{ border: "2px solid #B76E79" }}
            aria-hidden="true"
          />
          <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(183,110,121,0.2)] z-10">
            <Image
              src="/images/transformations/gallery-6.jpg"
              alt="Portrait of Rupali, beautiful pink saree bride style"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column (Text) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span
            className="font-accent font-bold tracking-[0.15em] mb-4"
            style={{ color: "#B76E79", fontSize: "12px" }}
          >
            YOUR ARTIST
          </span>

          <h2
            className="font-serif font-bold text-[36px] md:text-[48px] mb-2 leading-tight"
            style={{ color: "#2A2A2A" }}
          >
            Meet Rupali
          </h2>

          <p
            className="font-sans italic mb-6 text-[18px]"
            style={{ color: "#B76E79" }}
          >
            4 Years. Countless Transformations. One Goal: Your Confidence.
          </p>

          <p
            className="font-sans font-normal text-[17px] mb-4 leading-[1.7]"
            style={{ color: "#3C3C3C" }}
          >
            Hi, I&apos;m Rupali — an airbrush makeup artist and hairstylist certified by Rohini Kakde with 4 years of experience transforming faces in Ahilyanagar. From bridal glows that last all day to party looks that turn heads, I specialize in creating beauty moments that make you feel unstoppable. Every face is a canvas. Every transformation is a story.
          </p>

          {/* Certification Badge */}
          <div
            className="inline-flex items-center mt-4 px-5 py-2 rounded-full border shadow-sm"
            style={{
              background: "linear-gradient(90deg, #FFF8F0, #FFF3E8)",
              borderColor: "#D4A574",
            }}
          >
            <span className="font-accent font-semibold text-[13px]" style={{ color: "#8B6914" }}>
              ✦ Certified by Rohini Kakde
            </span>
          </div>

          {/* Specialty Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {["Airbrush Makeup", "Bridal", "Party Glam", "Hairstyling"].map((tag) => (
              <span
                key={tag}
                className="font-accent font-semibold px-4 py-1.5 rounded-full text-[13px]"
                style={{ backgroundColor: "#F4D4D7", color: "#B76E79" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="w-full flex items-center justify-between mt-10 pt-8 border-t" style={{ borderColor: "#E8D5D8" }}>
            <div className="flex flex-col items-center flex-1">
              <span className="font-serif font-bold text-[32px] leading-none" style={{ color: "#B76E79" }}>4+</span>
              <span className="font-sans font-normal text-[13px] mt-1 text-center" style={{ color: "#888" }}>Years Experience</span>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: "#E8D5D8" }} />
            <div className="flex flex-col items-center flex-1">
              <span className="font-serif font-bold text-[32px] leading-none" style={{ color: "#B76E79" }}>100+</span>
              <span className="font-sans font-normal text-[13px] mt-1 text-center" style={{ color: "#888" }}>Happy Clients</span>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: "#E8D5D8" }} />
            <div className="flex flex-col items-center flex-1">
              <span className="font-serif font-bold text-[32px] leading-none" style={{ color: "#B76E79" }}>4.9★</span>
              <span className="font-sans font-normal text-[13px] mt-1 text-center" style={{ color: "#888" }}>Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
