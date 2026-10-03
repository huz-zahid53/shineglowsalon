import { ServiceItem, BridalPackageTier, ReviewItem, FaqItem } from '../types/salon';

export const SALON_INFO = {
  name: 'Shinglow By Ayesha Qadeer',
  fullName: 'Shinglow By Ayesha Qadeer Salon',
  tagline: 'Where Lahore Glows With Timeless Elegance',
  phone: '+92 307 7755987',
  whatsappRaw: '923077755987',
  address: '49 D College Rd, near Ameer Chowk, PCSIR Staff Colony, Lahore',
  city: 'Lahore, Pakistan',
  timings: 'Monday – Sunday : 11:00 AM – 09:00 PM',
  googleRating: 4.9,
  reviewsCount: 148,
  established: '4+ Years of Artistry',
  instagram: 'https://www.instagram.com/shinglowbyayeshaqadeer',
  facebook: 'https://www.facebook.com/shinglowparlor',
  mapUrl: 'https://maps.google.com/maps?q=Shinglow%20By%20Ayesha%20Qadeer%20Salon%20Lahore&output=embed',
  announcement: 'Special 4th Anniversary Celebration · Complimentary Glow Treatment with Bridal Bookings',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'signature-bridal',
    category: 'bridal',
    title: 'Signature Bridal Masterpiece',
    subtitle: 'Barat & Valima Haute Couture Makeup',
    duration: '3.5 - 4 Hours',
    priceTag: 'PKR 45,000 / day',
    description: 'Bespoke bridal glamour tailored to your bridal attire and face structure. High-definition flawless complexion, intricate eye artistry, and all-day radiance.',
    included: [
      'High-Definition long-lasting skin finish',
      'Artisanal eye embellishment & 3D lashes',
      'Architectural hair styling & dupatta setting',
      'Jewelry & accessory pinning with trial consultation'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/975b2e98b_generated_image.png',
    isPopular: true
  },
  {
    id: 'party-event-glam',
    category: 'bridal',
    title: 'Party & Occasion Glam',
    subtitle: 'Engagements, Mehndis & Red Carpet Looks',
    duration: '2 Hours',
    priceTag: 'PKR 14,500',
    description: 'Photogenic, sweat-proof elegance designed to illuminate night and day ceremonies with effortless sophistication.',
    included: [
      'Luminous dewy or velvet-matte skin prep',
      'Subtle smokey or sculpted cut-crease eyes',
      'Premium lash application & brow definition',
      'Signature volume blowout or textured updo'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/97a369d02_generated_image.png',
    isPopular: true
  },
  {
    id: 'hair-transformation',
    category: 'hair',
    title: 'Balayage & Dimensional Colour',
    subtitle: 'Custom Formulation by Senior Stylists',
    duration: '3 - 4.5 Hours',
    priceTag: 'From PKR 18,000',
    description: 'Seamless hand-painted dimension and gloss toning that enhances natural skin undertones with zero harsh demarcation.',
    included: [
      'Bespoke colorimetry consultation & strand test',
      'Bond-building restorative treatment (Olaplex)',
      'Precision gloss toner & glaze infusion',
      'Signature blowout & heat seal styling'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/0a862d6d7_generated_image.png',
    isPopular: true
  },
  {
    id: 'keratin-botox',
    category: 'hair',
    title: 'Keratin & Botox Hair Glassing',
    subtitle: 'Intense Anti-Frizz & Mirror Shine',
    duration: '2.5 Hours',
    priceTag: 'From PKR 16,000',
    description: 'Deep protein restructuring that eliminates frizz while locking in mirror-like liquid smoothness for up to 5 months.',
    included: [
      'Deep clarifying scalp cleanse',
      'Formaldehyde-safe keratin thermal seal',
      'Nutrient sealing silk mist',
      'Take-home post-care protocol guide'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/8c2940e36_generated_image.png',
  },
  {
    id: 'hydra-glow-facial',
    category: 'skin',
    title: 'Hydra-Oxygen Diamond Facial',
    subtitle: 'Pre-Wedding Deep Infusion Ritual',
    duration: '75 Mins',
    priceTag: 'PKR 8,500',
    description: 'Triple-action dermabrasion, ultrasound nutrient infusion, and soothing cryogenic lymphatic drainage for an unmistakable glass skin glow.',
    included: [
      'Diamond vortex pore extraction',
      'Hyaluronic acid + Vitamin C nano-infusion',
      'Cryo-firming contour massage',
      'Gold leaf collagen recovery mask'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/975b2e98b_generated_image.png',
    isPopular: true
  },
  {
    id: 'organic-radiance-spa',
    category: 'skin',
    title: 'Pure Radiance Herbal Facial',
    subtitle: 'Natural Botanical Rejuvenation',
    duration: '60 Mins',
    priceTag: 'PKR 6,500',
    description: 'Gentle organic herbs, rosehip essence, and cooling rose quartz gua-sha designed for sensitive and stressed skin.',
    included: [
      'Aromatherapy steam & gentle extraction',
      'Rosewater herbal compress',
      'Gua-sha facial sculpting',
      'Hydrating herbal moisture barrier veil'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/97a369d02_generated_image.png',
  },
  {
    id: 'luxury-manicure-pedicure',
    category: 'spa',
    title: 'Rose Milk & Candle Melt Mani-Pedi',
    subtitle: 'Nourishing Hand & Foot Sanctuary',
    duration: '90 Mins',
    priceTag: 'PKR 6,000',
    description: 'Warm organic rose milk soak, gentle sugar scrub exfoliation, hot towel compress, and warm shea butter candle massage.',
    included: [
      'Aromatic warm milk soak',
      'Exfoliating botanical buff & cuticle care',
      'Warm soy candle melt massage',
      'High-shine gel finish or breathable lacquer'
    ],
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/8c2940e36_generated_image.png',
  }
];

export const BRIDAL_PACKAGES: BridalPackageTier[] = [
  {
    id: 'intimate-nikkah',
    name: 'The Nikkah & Engagement Glow',
    subtitle: 'Soft, ethereal luminescence for day & evening ceremonies',
    basePrice: 22000,
    priceDisplay: 'PKR 22,000',
    recommendedFor: 'Nikkah, Engagement, or Mehndi functions',
    features: [
      'Customized Dewy Skin Preparation',
      'Soft Glam Eyes with Natural Flutter Lashes',
      'Dupatta Pinning & Fine Jewelry Setting',
      'Signature Textured Braid or Classic Half-Updo',
      'Complimentary Hydrating Lip Glow touch-up kit'
    ]
  },
  {
    id: 'royal-bridal-barat',
    name: 'The Royal Barat & Valima Suite',
    subtitle: 'Our award-winning 2-day bridal transformation',
    badge: 'Most Revered',
    basePrice: 75000,
    priceDisplay: 'PKR 75,000 (2 Days)',
    recommendedFor: 'Traditional Barat & Modern Valima Brides',
    features: [
      '2 Full Bridal Makeup & Styling Sessions',
      'Complimentary Pre-Bridal Hydra-Glow Facial',
      'Full Bridal Consultation & Shade Matching Trial',
      'Luxury 3D Mink Lashes & 24hr Waterproof Lock',
      'Advanced Crown Dupatta & Heavy Veil Engineering',
      'Includes 1 Guest/Mother-of-Bride Makeup'
    ]
  },
  {
    id: 'complete-bridal-troussau',
    name: 'The Empress All-Inclusive Troussau',
    subtitle: 'Head-to-toe pampering leading up to the celebration',
    badge: 'Ultimate Luxury',
    basePrice: 98000,
    priceDisplay: 'PKR 98,000',
    recommendedFor: 'Complete wedding week experience',
    features: [
      'Barat & Valima Signature Makeup Sessions',
      'Mehndi / Mayun Event Makeup Session',
      'Full Body Whitening Polish & Rose Milk Spa',
      'Diamond Hydra-Facial (3 days prior)',
      'Olaplex Hair Repair & Luxury Mani-Pedi Ritual',
      'VIP Private Dressing Lounge Access'
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Mahnoor Tariq',
    event: 'Barat Bride · Lahore',
    review: 'Ayesha and her team created pure magic for my Barat. My makeup lasted over 10 hours under intense stage lights without a single crease. Everyone kept asking where I got my glow from!',
    rating: 5,
    timeAgo: '2 weeks ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-2',
    clientName: 'Zainab Bilal',
    event: 'Hair Balayage & Glossing',
    review: 'I have naturally dark hair and was terrified of bleach damage. Shinglow formulated the most gorgeous subtle caramel balayage without damaging my curls. The glass hair gloss is next level.',
    rating: 5,
    timeAgo: '1 month ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-3',
    clientName: 'Dr. Fatima Hassan',
    event: 'Hydra-Oxygen Facial Regular',
    review: 'The hygiene and calm atmosphere at their PCSIR College Road studio is exceptional. The Hydra Facial removed every speck of congestion and my skin looked luminous for weeks. Truly Lahore’s hidden gem.',
    rating: 5,
    timeAgo: '3 weeks ago',
    verifiedOn: 'Verified Google Review'
  },
  {
    id: 'rev-4',
    clientName: 'Aiman Shahzad',
    event: 'Valima Bride',
    review: 'Ayesha really listens. I wanted an English rose look rather than heavy makeup, and she executed it to perfection. Professional, punctual, and wonderfully kind staff.',
    rating: 5,
    timeAgo: '2 months ago',
    verifiedOn: 'Verified Google Review'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Booking & Consultations',
    question: 'How far in advance should I reserve my bridal dates?',
    answer: 'For wedding season (October through March in Lahore), we recommend reserving your Barat and Valima dates 3 to 6 months in advance. Dates are locked with a 50% advance booking deposit via WhatsApp or bank transfer.'
  },
  {
    category: 'Bridal Services',
    question: 'Do bridal packages include hair styling and dupatta setting?',
    answer: 'Yes, absolutely. All our bridal packages include complete hair architecture (updos, waves, hair fillers if required), heavy dupatta drape pinning, matha patti/tikka placement, and complete jewelry fixing.'
  },
  {
    category: 'Consultation & Trials',
    question: 'Can I book a consultation or makeup trial prior to booking?',
    answer: 'Yes! We offer 30-minute bridal look consultations where we examine your bridal outfits, skin undertones, and hair length to create your bespoke bridal blueprint.'
  },
  {
    category: 'Location & Parking',
    question: 'Where is Shinglow located, and is parking available?',
    answer: 'We are situated at 49 D College Road, near Ameer Chowk, PCSIR Staff Colony in Lahore. Dedicated secure parking is available for our esteemed guests directly in front of the studio.'
  },
  {
    category: 'Sanitization & Products',
    question: 'What cosmetics and skincare brands do you use in studio?',
    answer: 'We exclusively utilize internationally certified luxury brands including Charlotte Tilbury, NARS, Dior Backstage, MAC Cosmetics, Huda Beauty, Olaplex, and medical-grade French dermaceutical skincare.'
  }
];
