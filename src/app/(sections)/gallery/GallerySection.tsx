import React from "react";
import Image from "next/image";
import { FlipCard } from "@/components/FlipCard";
import transformationsData from "@/data/transformations.json";

export function GallerySection() {
  const { flipCards, galleryPhotos } = transformationsData;

  return (
    <section id="gallery" className="w-full">
      {/* PART A — Flip Cards */}
      <div className="w-full bg-white py-12 md:py-20 px-4 md:px-[5%]">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">
          <span
            className="font-accent font-bold tracking-[0.15em] mb-4 text-center uppercase"
            style={{ color: "#B76E79", fontSize: "12px" }}
          >
            Transformations
          </span>

          <h2
            className="font-serif font-bold text-[36px] md:text-[48px] text-center mb-4 leading-tight"
            style={{ color: "#2A2A2A" }}
          >
            Before & After: The Proof
          </h2>

          <p
            className="font-sans text-[18px] text-center mb-2"
            style={{ color: "#888" }}
          >
            Tap any card to witness the transformation ✦
          </p>

          <p
            className="font-sans text-[13px] italic text-center mb-10"
            style={{ color: "#B76E79" }}
          >
            ← tap to flip →
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7">
            {flipCards.map((card) => (
              <FlipCard
                key={card.id}
                id={card.id}
                beforeImg={card.beforeImg}
                afterImg={card.afterImg}
                beforeAlt={card.beforeAlt}
                afterAlt={card.afterAlt}
                label={card.label}
                className="h-[400px] md:h-[480px] shadow-[0_8px_32px_rgba(183,110,121,0.12)] hover:shadow-[0_16px_48px_rgba(183,110,121,0.2)] hover:-translate-y-1 transition-all duration-300 rounded-[16px] overflow-hidden"
              />
            ))}
          </div>
        </div>
      </div>

      {/* PART B — Static Gallery */}
      <div className="w-full py-16 px-4 md:px-[5%]" style={{ backgroundColor: "#FFF5F6" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Elegant divider */}
          <div className="w-full flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-grow max-w-[120px]" style={{ backgroundColor: "#F4D4D7" }} />
            <span className="font-serif italic text-[24px]" style={{ color: "#B76E79" }}>
              ✦ Our Work ✦
            </span>
            <div className="h-px flex-grow max-w-[120px]" style={{ backgroundColor: "#F4D4D7" }} />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative w-full aspect-[3/4] rounded-[12px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top transition-transform duration-400 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(42,42,42,0.75)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />

                {/* Content over image */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="flex justify-end">
                    <span
                      className="px-3 py-1 rounded-full text-white font-accent font-semibold text-[12px]"
                      style={{ backgroundColor: "#B76E79" }}
                    >
                      {photo.category}
                    </span>
                  </div>
                  <span className="text-white font-accent font-semibold text-[14px]">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
