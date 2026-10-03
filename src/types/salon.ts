export type ServiceCategory = 'all' | 'bridal' | 'hair' | 'skin' | 'spa';

export interface ServiceItem {
  id: string;
  category: 'bridal' | 'hair' | 'skin' | 'spa';
  title: string;
  subtitle: string;
  duration: string;
  priceTag: string;
  description: string;
  included: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface BridalPackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  basePrice: number;
  priceDisplay: string;
  features: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  event: string;
  review: string;
  rating: number;
  timeAgo: string;
  verifiedOn: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
