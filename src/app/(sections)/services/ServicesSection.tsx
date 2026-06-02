import React from "react";
import { ServiceCard } from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Tailored beauty services designed to make you look and feel your absolute best on your special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex justify-center"
            >
              <ServiceCard
                id={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
                features={service.features}
                className="w-full max-w-md lg:max-w-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}