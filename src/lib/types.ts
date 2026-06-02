export interface Transformation {
  id: string;
  beforeImg: string;
  afterImg: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  content: string;
  rating?: number;
  date?: string;
}