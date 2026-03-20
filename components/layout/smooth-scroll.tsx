"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode
} from "react";

type SmoothScrollContextValue = {
  scrollToHash: (href: string) => boolean;
  setScrollLocked: (locked: boolean) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollToHash: () => false,
  setScrollLocked: () => {}
});

function easing(progress: number) {
  return 1 - Math.pow(1 - progress, 4);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.05,
      wheelMultiplier: 0.9,
      autoRaf: false,
      anchors: false
    });

    lenisRef.current = lenis;

    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const setScrollLocked = useCallback((locked: boolean) => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (locked) {
      lenis.stop();
      return;
    }

    lenis.start();
  }, []);

  const scrollToHash = useCallback((href: string) => {
    const hash = href.split("#")[1];

    if (!hash) {
      return false;
    }

    const decodedHash = decodeURIComponent(hash);
    const target = document.getElementById(decodedHash);

    if (!target) {
      return false;
    }

    const nextUrl = `${window.location.pathname}#${decodedHash}`;
    window.history.pushState(null, "", nextUrl);

    const lenis = lenisRef.current;

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -20,
        duration: 1.15,
        easing
      });

      return true;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    return true;
  }, []);

  const value = useMemo(
    () => ({
      scrollToHash,
      setScrollLocked
    }),
    [scrollToHash, setScrollLocked]
  );

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScrollControl() {
  return useContext(SmoothScrollContext);
}
