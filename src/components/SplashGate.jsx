import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Loading from './Loading';

const SKIP_KEY = 'kael-portfolio-splash-seen';

// Full-screen opening splash: multilingual greetings, then curtain lift.
// Waits `minTime` ms, but:
//  - click / key / wheel skips immediately (curtain still animates out)
//  - the full wait only happens once per session (sessionStorage), so
//    navigating between pages never replays it
function SplashGate({ children, minTime = 6000 }) {
  // Read the seen-flag ONCE, at mount. dismiss() writes sessionStorage, so
  // re-reading it on every render flips `initial` (6000 → 1200) the moment
  // the reveal finishes; that change re-runs the effect below, whose
  // gsap.set() slams the just-faded-in content back to opacity: 0 — the
  // "waited out the splash and got a black page" bug. A repeat visit starts
  // at 1200 already, so the value never flips there and the page survived —
  // exactly why skip-then-refresh looked fine.
  const [initial] = useState(() => {
    try {
      return sessionStorage.getItem(SKIP_KEY) === '1' ? 1200 : minTime;
    } catch {
      /* private mode: just show it */
      return minTime;
    }
  });

  const [show, setShow] = useState(true);
  const loadingRef = useRef(null);
  const contentRef = useRef(null);
  const dismissedRef = useRef(false);

  useEffect(() => {
    // Same guard as the timeline: never undo a reveal that already happened.
    if (!dismissedRef.current) {
      gsap.set(contentRef.current, { opacity: 0, y: 20 });
    }

    const dismiss = () => {
      if (dismissedRef.current || !loadingRef.current) return;
      dismissedRef.current = true;
      try {
        sessionStorage.setItem(SKIP_KEY, '1');
      } catch {
        /* ignore */
      }
      const tl = gsap.timeline({ onComplete: () => setShow(false) });
      tl.to(loadingRef.current, { y: '-100%', duration: 0.9, ease: 'power4.inOut' }).to(
        contentRef.current,
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.3'
      );
    };

    const timer = setTimeout(dismiss, initial);

    const onSkip = () => dismiss();
    window.addEventListener('click', onSkip);
    window.addEventListener('keydown', onSkip);
    window.addEventListener('wheel', onSkip, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', onSkip);
      window.removeEventListener('keydown', onSkip);
      window.removeEventListener('wheel', onSkip);
    };
  }, [initial]);

  return (
    <>
      {show && (
        <div
          ref={loadingRef}
          className="fixed inset-0 z-[70] bg-background cursor-pointer"
          style={{ transform: 'translateY(0%)' }}
        >
          <Loading />
          <span className="absolute bottom-8 right-8 text-xs text-sectext/70 tracking-widest uppercase">
            Click to skip →
          </span>
        </div>
      )}
      <div ref={contentRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </>
  );
}

export default SplashGate;
