
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const partnersData = [
  {
    id: 'casa-do-biscoito',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-12 w-auto',
  },
];

export function PartnersLogos() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4"
          >
            Nossos Parceiros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Trabalhamos com empresas que confiam em nossa expertise tecnológica
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <CardContent className="p-6 flex items-center justify-center">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={partner.className}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
