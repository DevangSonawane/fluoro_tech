import React, { useMemo, useRef, useEffect, useCallback, useState } from 'react';
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

const modules = import.meta.glob('../../FluoroTech/**/*.{jpg,jpeg,png,JPG,PNG,JPEG}', { eager: true, as: 'url' });

const ProductMarqueeBanner = ({ productId, productName, fallback }) => {
  const images = useMemo(() => {
    const folder = folderMap[productId];
    if (!folder) return fallback ? [fallback] : [];
    const urls = Object.entries(modules)
      .filter(([path]) => path.includes(`/FluoroTech/${folder}/`))
      .map(([, url]) => url)
      .sort((a, b) => a.localeCompare(b));
    if (!urls.length && fallback) return [fallback];
    if (urls.length) {
      console.log('ProductMarqueeBanner', { productId, folder, count: urls.length });
    }
    return urls;
  }, [productId, fallback]);

  const scrollerRef = useRef(null);
  const [sizes, setSizes] = useState({});
  const [visible, setVisible] = useState({});

  const step = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    return Math.floor(el.clientWidth * 0.8);
  };

  const prev = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -step(), behavior: 'auto' });
  }, []);

  const next = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: step(), behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll('[data-src]'));
    const obs = new IntersectionObserver(
      (entries) => {
        const next = {};
        entries.forEach((entry) => {
          const idx = entry.target.getAttribute('data-index');
          if (entry.isIntersecting && idx != null) {
            next[idx] = true;
          }
        });
        if (Object.keys(next).length) {
          setVisible((prev) => ({ ...prev, ...next }));
        }
      },
      { root: el, rootMargin: '800px', threshold: 0.01 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [images]);

  

  return (
    <div className="relative rounded-3xl overflow-hidden">

      <div className="relative z-10 h-[40vh] md:h-[60vh]">
        <div
          ref={scrollerRef}
          className="absolute inset-x-0 inset-y-0 overflow-x-auto overflow-y-hidden no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex items-center gap-3 md:gap-4 px-6 md:px-12 h-full">
            {images.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative shrink-0 snap-center h-[70%] md:h-[75%] rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: sizes[src] ? (sizes[src].w / sizes[src].h) : 1.5, contentVisibility: 'auto', containIntrinsicSize: '800px 500px' }}
              >
                
                <img
                  src={visible[i] ? src : undefined}
                  data-src={src}
                  data-index={i}
                  alt={`${productName} ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchpriority={i === 0 ? 'high' : 'low'}
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    if (img.naturalWidth && img.naturalHeight) {
                      setSizes((prev) => ({
                        ...prev,
                        [src]: { w: img.naturalWidth, h: img.naturalHeight },
                      }));
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 text-slate-800 hover:text-slate-900 p-2 rounded-full bg-slate-200/80 hover:bg-slate-200 shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 text-slate-800 hover:text-slate-900 p-2 rounded-full bg-slate-200/80 hover:bg-slate-200 shadow-md"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        
      </div>
    </div>
  );
};

export default ProductMarqueeBanner;
