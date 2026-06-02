"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  id: string;
  beforeImg: string;
  afterImg: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
  className?: string;
}

export function FlipCard({
  id,
  beforeImg,
  afterImg,
  beforeAlt,
  afterAlt,
  label,
  className,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      id={`flip-card-${id}`}
      className={cn(
        "group relative w-full aspect-[3/4] cursor-pointer perspective-1000",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      aria-pressed={isFlipped}
      aria-label={`Toggle before and after view for ${label || "makeup transformation"}`}
    >
      <div
        className={cn(
          "w-full h-full relative preserve-3d transition-transform duration-300 ease-in-out",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front (Before) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-muted">
          <Image
            src={beforeImg}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            Before
          </div>
        </div>

        {/* Back (After) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-muted rotate-y-180">
          <Image
            src={afterImg}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            After
          </div>
          {label && (
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium shadow-sm max-w-[80%] text-right truncate">
              {label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}