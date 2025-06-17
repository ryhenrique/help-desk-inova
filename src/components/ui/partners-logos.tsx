'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const partnersData = [
  {
    id: 'casa-do-biscoito',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-12 sm:h-14 lg:h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-8 sm:h-10 lg:h-12 w-auto',
  },
  {
    id: 'vitral-original',
    name: 'Vitral Original',
    image: '/lovable-uploads/2ecb2d16-57e0-41c6-b0f2-deaba1f13fba.png',
    className: 'h-10 sm:h-12 lg:h-14 w-auto',
  },
  // Duplicar as logos para criar um efeito de loop contínuo
  {
    id: 'casa-do-biscoito-2',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-12 sm:h-14 lg:h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos-2',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-8 sm:h-10 lg:h-12 w-auto',
  },
  {
    id: 'vitral-original-2',
    name: 'Vitral Original',
    image: '/lovable-uploads/2ecb2d16-57e0-41c6-b0f2-deaba1f13fba.png',
    className: 'h-10 sm:h-12 lg:h-14 w-auto',
  },
  // Adicionar mais duplicatas para movimento mais suave
  {
    id: 'casa-do-biscoito-3',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-12 sm:h-14 lg:h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos-3',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-8 sm:h-10 lg:h-12 w-auto',
  },
  {
    id: 'vitral-original-3',
    name: 'Vitral Original',
    image: '/lovable-uploads/2ecb2d16-57e0-41c6-b0f2-deaba1f13fba.png',
    className: 'h-10 sm:h-12 lg:h-14 w-auto',
  },
];

export function PartnersLogos() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Confiado por diversas empresas
          </p>
        </div>

        <div className="relative mx-auto flex items-center justify-center max-w-4xl">
          <Carousel
            opts={{ 
              loop: true,
              align: 'start',
              skipSnaps: false,
              dragFree: false,
              containScroll: false
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false
              })
            ]}
            className="w-full pointer-events-none"
          >
            <CarouselContent className="ml-0 -pl-1">
              {partnersData.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="flex basis-1/2 justify-center pl-1 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="mx-4 sm:mx-6 lg:mx-8 flex shrink-0 items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className={`${partner.className} transition-all duration-300 hover:scale-105`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
