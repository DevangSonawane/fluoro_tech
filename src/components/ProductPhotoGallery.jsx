import React, { useMemo, useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const folderMap = {
  'halar-ectfe': 'halar ectfe',
  'antistatic-halar': 'antistatic halar',
  'ptfe': 'ptfe',
  'pvdf': 'pvdf',
  'teflon-pfa': 'teflon pfa',
  'tefzel-etfe': 'tefzel',
  'fluon-etfe': 'fluon etfe',
};

const modules = import.meta.glob('/FluoroTech/**/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, as: 'url' });

const ProductPhotoGallery = ({ productId }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const images = useMemo(() => {
    const folder = folderMap[productId];
    if (!folder) return [];
    const urls = Object.entries(modules)
      .filter(([path]) => path.includes(`/FluoroTech/${folder}/`))
      .map(([, url]) => url);
    urls.sort((a, b) => a.localeCompare(b));
    return urls;
  }, [productId]);

  const tileClass = (i) => {
    if (i % 7 === 0) return 'md:col-span-2 h-80';
    if (i % 5 === 0) return 'h-52';
    return 'h-40';
  };

  const open = (idx) => setOpenIndex(idx);
  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setOpenIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const onKey = (e) => {
      if (openIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, images.length, next, prev]);

  if (!images.length) {
    return (
      <div className="text-slate-500 text-sm">No photos available for this product.</div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            onClick={() => open(idx)}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white"
          >
            <img
              src={src}
              alt={`${productId} photo ${idx + 1}`}
              className={`${tileClass(idx)} w-full object-cover transition-transform duration-300 group-hover:scale-105`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>

      {openIndex !== null && images[openIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={close}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={images[openIndex]}
            alt={`${productId} photo ${openIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl border border-white/10 shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPhotoGallery;
