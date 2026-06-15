import React from "react";

const testimonials = [
  {
    id: 1,
    quote: "Rupali made me feel like an absolute queen on my wedding day. The makeup lasted all 12 hours without a single touch-up. I'm forever grateful!",
    author: "Priya Sharma",
  },
  {
    id: 2,
    quote: "The airbrush finish was out of this world. My photographer kept saying my skin looked flawless in every single shot. 100% worth it!",
    author: "Neha Patel",
  },
  {
    id: 3,
    quote: "She understood my vision the moment I described it. The final look was exactly what I dreamed of — elegant, beautiful, and ME.",
    author: "Anjali Desai",
  },
  {
    id: 4,
    quote: "From hair to makeup, everything was perfect. My bridal look turned heads all day. Rupali is truly talented and so warm to work with!",
    author: "Sneha Kulkarni",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-20 px-4 md:px-[5%]"
      style={{ backgroundColor: "#1C1C2E" }}
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center">
        <span
          className="font-accent font-bold tracking-[0.15em] mb-4 text-center uppercase"
          style={{ color: "#B76E79", fontSize: "12px" }}
        >
          Reviews
        </span>

        <h2
          className="font-serif font-bold text-[36px] md:text-[48px] text-center mb-4 leading-tight text-white"
        >
          Real Transformations. Real Reviews.
        </h2>

        <p
          className="font-sans text-[16px] text-center mb-12"
          style={{ color: "rgba(244,212,215,0.7)" }}
        >
          Trusted by brides across Ahilyanagar
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-[16px] p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(183,110,121,0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Stars */}
              <div
                className="mb-4 tracking-[2px]"
                style={{ color: "#D4A574", fontSize: "18px" }}
              >
                ★★★★★
              </div>

              {/* Decorative Quote Mark */}
              <div
                className="absolute top-6 right-6 font-serif leading-none select-none"
                style={{ color: "#B76E79", opacity: 0.4, fontSize: "60px" }}
              >
                &ldquo;
              </div>

              {/* Quote Text */}
              <p
                className="font-sans italic font-normal text-[16px] leading-[1.7] relative z-10"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <p
                className="font-accent font-semibold text-[14px] mt-4"
                style={{ color: "#B76E79" }}
              >
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
