import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ServiceCardProps {
  id: string | number;
  name: string;
  description: string;
  price: string;
  features: string[];
  className?: string;
}

export function ServiceCard({
  name,
  description,
  price,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between p-6 bg-card rounded-xl border border-border",
        "shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]",
        "transition-shadow duration-300 ease-in-out h-full",
        className
      )}
    >
      <div>
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        <div className="mb-6">
          <p className="text-xl font-medium text-foreground mb-4">{price}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-150 hover:scale-105"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}