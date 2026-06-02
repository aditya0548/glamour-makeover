import { Transformation } from "./types";

export interface CategoryData {
  title: string;
  id: string;
  transformations: Transformation[];
}

export const portfolioData: CategoryData[] = [
  {
    title: "Bridal Makeup",
    id: "bridal",
    transformations: [
      {
        id: "bridal-1",
        beforeImg: "https://picsum.photos/seed/bridal-1-before/600/800",
        afterImg: "https://picsum.photos/seed/bridal-1-after/600/800",
        beforeAlt: "Before bridal makeup",
        afterAlt: "After bridal makeup",
        label: "Bridal Look 1",
      },
      {
        id: "bridal-2",
        beforeImg: "https://picsum.photos/seed/bridal-2-before/600/800",
        afterImg: "https://picsum.photos/seed/bridal-2-after/600/800",
        beforeAlt: "Before bridal makeup",
        afterAlt: "After bridal makeup",
        label: "Bridal Look 2",
      },
      {
        id: "bridal-3",
        beforeImg: "https://picsum.photos/seed/bridal-3-before/600/800",
        afterImg: "https://picsum.photos/seed/bridal-3-after/600/800",
        beforeAlt: "Before bridal makeup",
        afterAlt: "After bridal makeup",
        label: "Bridal Look 3",
      },
      {
        id: "bridal-4",
        beforeImg: "https://picsum.photos/seed/bridal-4-before/600/800",
        afterImg: "https://picsum.photos/seed/bridal-4-after/600/800",
        beforeAlt: "Before bridal makeup",
        afterAlt: "After bridal makeup",
        label: "Bridal Look 4",
      },
    ],
  },
  {
    title: "Party & Event Makeup",
    id: "party",
    transformations: [
      {
        id: "party-1",
        beforeImg: "https://picsum.photos/seed/party-1-before/600/800",
        afterImg: "https://picsum.photos/seed/party-1-after/600/800",
        beforeAlt: "Before party makeup",
        afterAlt: "After party makeup",
        label: "Party Look 1",
      },
      {
        id: "party-2",
        beforeImg: "https://picsum.photos/seed/party-2-before/600/800",
        afterImg: "https://picsum.photos/seed/party-2-after/600/800",
        beforeAlt: "Before party makeup",
        afterAlt: "After party makeup",
        label: "Party Look 2",
      },
      {
        id: "party-3",
        beforeImg: "https://picsum.photos/seed/party-3-before/600/800",
        afterImg: "https://picsum.photos/seed/party-3-after/600/800",
        beforeAlt: "Before party makeup",
        afterAlt: "After party makeup",
        label: "Party Look 3",
      },
    ],
  },
  {
    title: "Airbrush Makeup",
    id: "airbrush",
    transformations: [
      {
        id: "airbrush-1",
        beforeImg: "https://picsum.photos/seed/airbrush-1-before/600/800",
        afterImg: "https://picsum.photos/seed/airbrush-1-after/600/800",
        beforeAlt: "Before airbrush makeup",
        afterAlt: "After airbrush makeup",
        label: "Airbrush Look 1",
      },
      {
        id: "airbrush-2",
        beforeImg: "https://picsum.photos/seed/airbrush-2-before/600/800",
        afterImg: "https://picsum.photos/seed/airbrush-2-after/600/800",
        beforeAlt: "Before airbrush makeup",
        afterAlt: "After airbrush makeup",
        label: "Airbrush Look 2",
      },
      {
        id: "airbrush-3",
        beforeImg: "https://picsum.photos/seed/airbrush-3-before/600/800",
        afterImg: "https://picsum.photos/seed/airbrush-3-after/600/800",
        beforeAlt: "Before airbrush makeup",
        afterAlt: "After airbrush makeup",
        label: "Airbrush Look 3",
      },
    ],
  },
  {
    title: "Hairstyle",
    id: "hairstyle",
    transformations: [
      {
        id: "hair-1",
        beforeImg: "https://picsum.photos/seed/hair-1-before/600/800",
        afterImg: "https://picsum.photos/seed/hair-1-after/600/800",
        beforeAlt: "Before hairstyle",
        afterAlt: "After hairstyle",
        label: "Hairstyle 1",
      },
      {
        id: "hair-2",
        beforeImg: "https://picsum.photos/seed/hair-2-before/600/800",
        afterImg: "https://picsum.photos/seed/hair-2-after/600/800",
        beforeAlt: "Before hairstyle",
        afterAlt: "After hairstyle",
        label: "Hairstyle 2",
      },
    ],
  },
  {
    title: "Combo (Hair & Makeup)",
    id: "combo",
    transformations: [
      {
        id: "combo-1",
        beforeImg: "https://picsum.photos/seed/combo-1-before/600/800",
        afterImg: "https://picsum.photos/seed/combo-1-after/600/800",
        beforeAlt: "Before combo",
        afterAlt: "After combo",
        label: "Combo Look 1",
      },
      {
        id: "combo-2",
        beforeImg: "https://picsum.photos/seed/combo-2-before/600/800",
        afterImg: "https://picsum.photos/seed/combo-2-after/600/800",
        beforeAlt: "Before combo",
        afterAlt: "After combo",
        label: "Combo Look 2",
      },
      {
        id: "combo-3",
        beforeImg: "https://picsum.photos/seed/combo-3-before/600/800",
        afterImg: "https://picsum.photos/seed/combo-3-after/600/800",
        beforeAlt: "Before combo",
        afterAlt: "After combo",
        label: "Combo Look 3",
      },
    ],
  },
];
