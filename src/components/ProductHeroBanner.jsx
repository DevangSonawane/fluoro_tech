import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const ProductHeroBanner = ({ productId, productName, fallback }) => {
  const images = useMemo(() => {
    const folder = folderMap[productId];
    if (!folder) return [];
    const urls = Object.entries(modules)
      .filter(([path]) => path.includes(`/FluoroTech/${folder}/`))
      .map(([, url]) => url)
      .sort((a, b) => a.localeCompare(b));
    const prioritized = urls.sort((a, b) => {
      const aScore = a.toLowerCase().includes('/1.jpg') ? -1 : 0;
      const bScore = b.toLowerCase().includes('/1.jpg') ? -1 : 0;
      if (aScore !== bScore) return aScore - bScore;
      return a.localeCompare(b);
    });
    return prioritized.slice(0, 5);
  }, [productId]);

  const [active, setActive] = useState(0);

  const prev = useCallback(() => {
    setActive((i) => (i > 0 ? i - 1 : (images.length ? images.length - 1 : 0)));
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (images.length ? (i + 1) % images.length : 0));
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const current = images[active] || fallback;

  return (
    <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
      <div className="absolute inset-0">
        <img
          src={current}
          alt={productName}
          className="w-full h-[40vh] md:h-[60vh] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 h-[40vh] md:h-[60vh]">
        <div className="absolute inset-x-6 md:inset-x-12 inset-y-8 md:inset-y-12 rounded-2xl bg-white/5 backdrop-blur border border-white/20 shadow-2xl flex items-center justify-center">
          <img
            src={current}
            alt={productName}
            className="max-h-full max-w-full object-contain"
            loading="eager"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/40 border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/40 border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className="absolute bottom-8 left-8 md:left-12 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-bold tracking-wider">Photo Showcase</span>
          </div>
          <h2 className="mt-3 text-2xl md:text-4xl font-black">{productName}</h2>
          <div className="mt-2 text-white/80">
            <span className="text-sm">Real installations and finishes from Fluoro Tech</span>
          </div>
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-6 right-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${active === i ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHeroBanner;
