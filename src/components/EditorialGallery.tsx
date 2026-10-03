import React, { useState, useCallback, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  span: string;
}

// Module-level constant — never re-created on render.
const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Traditional Royal Barat Glam',
    tag: 'Bridal Couture',
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/975b2e98b_generated_image.png',
    span: 'lg:col-span-8 aspect-[16/10]',
  },
  {
    id: 'g-2',
    title: 'Gloss Balayage Hair Flow',
    tag: 'Hair Architecture',
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/0a862d6d7_generated_image.png',
    span: 'lg:col-span-4 aspect-[4/5]',
  },
  {
    id: 'g-3',
    title: 'Ethereal Valima Glow',
    tag: 'Signature Makeup',
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/97a369d02_generated_image.png',
    span: 'lg:col-span-4 aspect-[4/5]',
  },
  {
    id: 'g-4',
    title: 'Keratin Silk Glass Finish',
    tag: 'Hair Restorative',
    imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/8c2940e36_generated_image.png',
    span: 'lg:col-span-8 aspect-[16/10]',
  },
];

export const EditorialGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const openLightbox = useCallback((img: GalleryItem) => setActiveImage(img), []);
  const closeLightbox = useCallback(() => setActiveImage(null), []);

  // Keyboard accessibility — Escape closes lightbox.
  useEffect(() => {
    if (!activeImage) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeImage, closeLightbox]);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#e2b4bd] mb-2">Visual Archive</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Moments Captured in <span className="italic font-normal text-gradient-rose">Pure Radiance.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            A curated portfolio of modern brides, celebratory occasions, and precision styling created inside our Lahore studio.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <button
              key={img.id}
              onClick={() => openLightbox(img)}
              className={`${img.span} rounded-2xl overflow-hidden relative group cursor-pointer glass-card border border-white/10 text-left`}
              aria-label={`View enlarged image: ${img.title}`}
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" aria-hidden="true" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#e2b4bd]">{img.tag}</span>
                <h3 className="font-serif text-xl sm:text-2xl font-light mt-0.5">{img.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal — accessible with Escape key, backdrop-click, and proper aria */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${activeImage.title}`}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage.imageUrl}
            alt={activeImage.title}
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
