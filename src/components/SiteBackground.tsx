'use client';

import { useEffect, useRef } from 'react';

/**
 * 全站共用背景：柔和光暈 + 滑鼠視差，並驅動帶有 `.parallax-scroll` / `data-speed` 的元素做滾動視差。
 * - 以 requestAnimationFrame 合併更新，事件監聽使用 passive
 * - 使用者偏好減少動態時不啟用任何位移
 */
export default function SiteBackground() {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let frame = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;

    const update = () => {
      frame = 0;
      if (blobsRef.current) {
        blobsRef.current.style.transform = `translate3d(${pointerX * -20}px, ${pointerY * -20}px, 0)`;
      }
      const scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>('.parallax-scroll').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '0');
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      pointerX = e.clientX / window.innerWidth;
      pointerY = e.clientY / window.innerHeight;
      schedule();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', schedule, { passive: true });
    schedule();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--background)] pointer-events-none">
      <div ref={blobsRef} className="absolute inset-[-5%]" style={{ willChange: 'transform' }}>
        {/* 使用 radial-gradient 而非大半徑 blur，避免色塊顆粒感與額外的合成成本 */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(243,178,55,0.07) 0%, rgba(243,178,55,0.02) 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-[10%] right-[-15%] w-[65%] h-[65%]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(39,104,168,0.10) 0%, rgba(39,104,168,0.03) 50%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-[20%] w-[60%] h-[60%]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(39,104,168,0.06) 0%, rgba(243,178,55,0.02) 50%, transparent 70%)' }}
        />
      </div>
      {/* 細網格：只在畫面上方中央可見，往外淡出 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(253,250,230,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,250,230,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 100%)',
        }}
      />
    </div>
  );
}
