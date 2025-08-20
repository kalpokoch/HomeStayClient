import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScroll(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : scrollY < lastScrollY ? 'up' : null;

      setScrollPosition({
        scrollY,
        scrollDirection,
      });

      lastScrollY = scrollY;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export function useHeaderVisibility() {
  const { scrollY, scrollDirection } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY, scrollDirection]);

  return isVisible;
}
