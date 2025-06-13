
import { useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export function useAutoCarousel(api: CarouselApi | undefined, delay: number = 5000) {
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, delay);

    return () => clearInterval(interval);
  }, [api, delay]);
}
