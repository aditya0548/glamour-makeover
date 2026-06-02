"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import servicesData from "@/data/services.json";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  service: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted data:", data);
    setIsSuccess(true);
    reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-card rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
          Book an Appointment
        </h2>
        <p className="text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you to confirm your booking.
        </p>
      </div>

      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-center border border-green-200">
          <span className="mr-2 font-bold text-lg">✓</span>
          <p>Thank you! We&apos;ll be in touch within 24 hours.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                errors.name ? "border-destructive focus:ring-destructive/50" : "border-input"
              )}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                errors.email ? "border-destructive focus:ring-destructive/50" : "border-input"
              )}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                errors.phone ? "border-destructive focus:ring-destructive/50" : "border-input"
              )}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Event Date Field */}
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
              Event Date <span className="text-destructive">*</span>
            </label>
            <input
              id="eventDate"
              type="date"
              {...register("eventDate", { required: "Event date is required" })}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                errors.eventDate ? "border-destructive focus:ring-destructive/50" : "border-input"
              )}
            />
            {errors.eventDate && (
              <p className="mt-1 text-sm text-destructive">{errors.eventDate.message}</p>
            )}
          </div>
        </div>

        {/* Service Select Field */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
            Interested Service <span className="text-destructive">*</span>
          </label>
          <select
            id="service"
            {...register("service", { required: "Please select a service" })}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
              errors.service ? "border-destructive focus:ring-destructive/50" : "border-input"
            )}
          >
            <option value="">Select a service...</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Additional Details <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: "Message is required" })}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none",
              errors.message ? "border-destructive focus:ring-destructive/50" : "border-input"
            )}
            placeholder="Tell us more about your event..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-150 hover:scale-[1.02]"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}