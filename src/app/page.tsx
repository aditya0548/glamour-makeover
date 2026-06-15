import { HeroSection } from "./(sections)/hero/HeroSection";
import { AboutSection } from "./(sections)/about/AboutSection";
import { GallerySection } from "./(sections)/gallery/GallerySection";
import { ServicesSection } from "./(sections)/services/ServicesSection";
import { TestimonialsSection } from "./(sections)/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />

      {/* Contact Section Placeholder */}
      <section
        id="contact"
        className="w-full py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <span
          className="font-sans text-[16px] md:text-[18px] mb-2"
          style={{ color: "#888" }}
        >
          Ready for your transformation?
        </span>
        <h2
          className="font-serif font-bold text-[36px] md:text-[48px] mb-8"
          style={{ color: "#2A2A2A" }}
        >
          Book Your Moment
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/919284197003"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent font-bold text-white px-8 py-3 rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#25D366" }}
          >
            WhatsApp Rupali
          </a>
          <a
            href="tel:9284197003"
            className="font-accent font-bold text-white px-8 py-3 rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#B76E79" }}
          >
            Call Now
          </a>
        </div>
        <div className="mt-8">
          <a
            href="https://www.instagram.com/rupali_zine_makeup_artist"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-medium text-[14px] hover:underline"
            style={{ color: "#B76E79" }}
          >
            Follow on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
