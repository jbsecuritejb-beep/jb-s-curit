import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'VOTRE SÉCURITÉ, NOTRE ARCHITECTURE';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/5320db34d_WhatsAppImage2026-04-01at2155291.jpg"
          alt="JB Sécurité en action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Sécurité privée — Amiens & Hauts-de-France
          </p>
        </motion.div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 min-h-[2.5em]">
          {displayText}
          <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Sécurité événementielle, gardiennage de chantier, maître-chien et service de portiers.
          Une équipe formée, disponible 24h/24.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="bg-primary text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider px-8 py-6 hover:bg-primary/90 pulse-gold"
          >
            Demander un devis gratuit
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll('#services')}
            className="border-border text-foreground font-heading font-semibold text-sm uppercase tracking-wider px-8 py-6 hover:bg-secondary hover:text-foreground"
          >
            Nos services
          </Button>
        </motion.div>
      </div>

      {/* Status Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Opérationnel 24/7 — Secteur Amiens
          </p>
          <button onClick={() => handleScroll('#services')} className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}