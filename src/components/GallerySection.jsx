import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  {
    src: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/d0adae42a_WhatsAppImage2026-04-01at2155341.jpg',
    alt: 'Équipe JB Sécurité en mission événementielle',
    span: 'md:col-span-2',
  },
  {
    src: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/0c3890744_WhatsAppImage2026-04-01at2155381.jpg',
    alt: 'Agent de sécurité - contrôle d\'accès',
    span: '',
  },
  {
    src: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/2e8fe9dac_WhatsAppImage2026-04-01at2155292.jpeg',
    alt: 'Maître-chien en intervention',
    span: '',
  },
  {
    src: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/7b5e82687_WhatsAppImage2026-04-01at2155361.jpg',
    alt: 'Sécurité en boîte de nuit',
    span: 'md:col-span-2',
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Sur le terrain
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Notre Équipe en Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg aspect-[4/3] group grain-overlay ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}