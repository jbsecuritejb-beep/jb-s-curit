import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const ZONES = [
  'Amiens', 'Abbeville', 'Beauvais', 'Compiègne', 'Saint-Quentin',
  'Péronne', 'Albert', 'Montdidier', 'Doullens', 'Roye',
  'Creil', 'Laon',
];

export default function ZonesSection() {
  return (
    <section id="zones" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Couverture géographique
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Zones d'Intervention
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Basés à Amiens, nous intervenons dans l'ensemble des Hauts-de-France et au-delà selon vos besoins. Notre positionnement stratégique nous permet un déploiement rapide sur l'ensemble du territoire.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border mb-8">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-heading font-semibold text-sm text-foreground">Disponibilité permanente</p>
                <p className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider">
                  24H/24 — 7J/7 — 365 JOURS/AN
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-sm text-foreground">Siège social</p>
                <p className="font-body text-sm text-muted-foreground">
                  53 Avenue de l'Europe — 80080 Amiens — Bureau 4 bis
                </p>
              </div>
            </div>
          </div>

          {/* Right — Zone Tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {ZONES.map((zone, i) => (
              <motion.div
                key={zone}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`px-5 py-3 rounded-lg border font-heading font-medium text-sm transition-all ${
                  i === 0
                    ? 'bg-primary text-primary-foreground border-primary text-base px-8 py-4'
                    : 'bg-card text-foreground border-border hover:border-primary/40'
                }`}
              >
                <MapPin className={`inline w-3.5 h-3.5 mr-1.5 ${i === 0 ? 'text-primary-foreground' : 'text-primary'}`} />
                {zone}
              </motion.div>
            ))}
            <div className="px-5 py-3 rounded-lg border border-dashed border-primary/40 font-heading font-medium text-sm text-primary">
              + Toute la France
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}