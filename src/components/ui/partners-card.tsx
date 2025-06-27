
'use client';

import { motion } from 'framer-motion';

interface Partner {
  id: string;
  name: string;
  image: string;
  className?: string;
}

interface PartnersCardProps {
  partners: Partner[];
}

export function PartnersCard({ partners }: PartnersCardProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Parceiros</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            <span className="font-bold">Confiado por diversas empresas</span> que escolheram nossa excelência
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-sm w-full mx-auto p-8 rounded-3xl border border-blue-200/30 dark:border-blue-800/30 bg-gray-100/80 dark:bg-slate-800/70 backdrop-blur-sm shadow-[2px_4px_16px_0px_rgba(59,130,246,0.06)_inset] group hover:shadow-[4px_8px_24px_0px_rgba(59,130,246,0.12)_inset] transition-all duration-500"
          >
            {/* Main Content Area */}
            <div className="h-80 rounded-2xl z-40 bg-neutral-200/50 dark:bg-slate-700/50 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] relative overflow-hidden">
              <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
                {/* Partners Logos Container */}
                <div className="flex flex-row flex-shrink-0 justify-center items-center gap-4 flex-wrap">
                  {partners.slice(0, 4).map((partner, index) => (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`
                        rounded-full flex items-center justify-center 
                        bg-white/10 dark:bg-slate-600/20 backdrop-blur-sm
                        shadow-[0px_0px_12px_0px_rgba(59,130,246,0.25)_inset,0px_8px_16px_-4px_rgba(0,0,0,0.1)]
                        dark:shadow-[0px_0px_12px_0px_rgba(59,130,246,0.15)_inset,0px_8px_16px_-4px_rgba(0,0,0,0.3)]
                        hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.4)_inset,0px_12px_24px_-6px_rgba(0,0,0,0.15)]
                        dark:hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.25)_inset,0px_12px_24px_-6px_rgba(0,0,0,0.4)]
                        transition-all duration-300 group-hover:scale-110
                        ${index === 0 ? 'h-12 w-12' : index === 1 ? 'h-16 w-16' : index === 2 ? 'h-20 w-20' : 'h-14 w-14'}
                      `}
                    >
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className={`${partner.className} max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-110`}
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animated Line Effect */}
                <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse">
                  <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <div className="absolute inset-0 flex flex-wrap gap-px">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span
                          key={i}
                          className="inline-block w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full opacity-60 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 text-center">
                Parceiros de Confiança
              </h3>
              <p className="text-sm font-normal text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                Empresas que confiam em nossa expertise para transformar seus negócios com tecnologia de ponta e suporte especializado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
