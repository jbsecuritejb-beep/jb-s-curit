import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, HardHat, Dog, DoorOpen, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const SERVICES = [
  {
    id: 'evenementiel',
    icon: Shield,
    title: 'Sécurité Événementielle',
    subtitle: 'Boîtes de nuit · Bars · Clubs',
    image: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/0c3890744_WhatsAppImage2026-04-01at2155381.jpg',
    description: 'Protection professionnelle pour vos soirées et événements nocturnes. Nos agents formés assurent la sécurité de vos établissements avec discrétion et efficacité.',
    specs: [
      'Agents formés CQP APS',
      'Assurance RC Pro renforcée',
      'Gestion de foule et évacuation',
      'Intervention rapide 24/7',
      'Contrôle d\'accès intelligent',
      'Rapports de mission détaillés',
    ],
  },
  {
    id: 'chantier',
    icon: HardHat,
    title: 'Gardiennage de Chantier',
    subtitle: 'Sites · Matériel · Équipements',
    image: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/b34603a6c_WhatsAppImage2026-04-01at215528.jpg',
    description: 'Surveillance et protection de vos chantiers de construction. Prévention des vols, dégradations et intrusions, de jour comme de nuit.',
    specs: [
      'Rondes de surveillance planifiées',
      'Gardiennage statique et mobile',
      'Protection 24h/24, 7j/7',
      'Gestion des accès chantier',
      'Rapport d\'activité quotidien',
      'Coordination avec forces de l\'ordre',
    ],
  },
  {
    id: 'maitre-chien',
    icon: Dog,
    title: 'Maître-Chien',
    subtitle: 'Détection · Dissuasion · Intervention',
    image: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/2e8fe9dac_WhatsAppImage2026-04-01at2155292.jpeg',
    description: 'Interventions canines pour la détection et la dissuasion. Nos équipes cynophiles sont certifiées et interviennent sur tout type de site.',
    specs: [
      'Chiens certifiés et entraînés',
      'Maître-chien diplômé CQP ASC',
      'Détection de substances',
      'Patrouilles dissuasives',
      'Intervention sur alerte',
      'Disponibilité immédiate',
    ],
  },
  {
    id: 'portiers',
    icon: DoorOpen,
    title: 'Service de Portiers',
    subtitle: 'Contrôle d\'accès · Gestion des flux',
    image: 'https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/7b5e82687_WhatsAppImage2026-04-01at2155361.jpg',
    description: 'Contrôle d\'accès professionnel et gestion des flux pour vos établissements. Accueil, filtrage et gestion de la clientèle avec courtoisie et fermeté.',
    specs: [
      'Filtrage et contrôle d\'accès',
      'Gestion de la file d\'attente',
      'Accueil VIP personnalisé',
      'Prévention des incidents',
      'Communication radio équipe',
      'Présentation soignée',
    ],
  },
];

export default function ServicesGrid() {
  const [openService, setOpenService] = useState(null);

  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Nos prestations
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 relative inline-block scan-beam overflow-hidden px-4">
            Services de Sécurité
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mt-4">
            Des solutions de sécurité adaptées à chaque besoin, de la protection événementielle au gardiennage industriel.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative min-h-[320px] rounded-lg overflow-hidden border border-border bg-card cursor-pointer grain-overlay"
                onClick={() => setOpenService(service)}
              >
                {/* Background image (reveals on hover) */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="font-mono-tech text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                      {service.subtitle}
                    </p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    <span>Fiche technique</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Sheet */}
      <Sheet open={!!openService} onOpenChange={() => setOpenService(null)}>
        <SheetContent className="bg-background border-border w-full sm:max-w-lg overflow-y-auto">
          {openService && (
            <>
              <SheetHeader className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <openService.icon className="w-6 h-6 text-primary" />
                </div>
                <SheetTitle className="font-heading font-bold text-2xl text-foreground">
                  {openService.title}
                </SheetTitle>
                <SheetDescription className="font-body text-muted-foreground">
                  {openService.description}
                </SheetDescription>
              </SheetHeader>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img src={openService.image} alt={openService.title} className="w-full h-48 object-cover" />
              </div>

              <div className="mb-8">
                <h4 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary mb-4">
                  Spécifications techniques
                </h4>
                <div className="space-y-3">
                  {openService.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-secondary/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => { setOpenService(null); handleScroll(); }}
                className="w-full bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-wider pulse-gold"
              >
                Demander un devis
              </Button>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}