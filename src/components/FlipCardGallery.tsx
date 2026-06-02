import React from "react";
import { FlipCard } from "./FlipCard";
import { cn } from "@/lib/utils";
import { Transformation } from "@/lib/types";

interface FlipCardGalleryProps {
  transformations: Transformation[];
  className?: string;
}

export function FlipCardGallery({
  transformations,
  className,
}: FlipCardGalleryProps) {
  if (!transformations || transformations.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full",
        className
      )}
    >
      {transformations.map((transformation) => (
        <FlipCard
          key={transformation.id}
          id={transformation.id}
          beforeImg={transformation.beforeImg}
          afterImg={transformation.afterImg}
          beforeAlt={transformation.beforeAlt}
          afterAlt={transformation.afterAlt}
          label={transformation.label}
        />
      ))}
    </div>
  );
}