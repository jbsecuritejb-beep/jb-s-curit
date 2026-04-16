import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, ShieldCheck, Zap, Users, FileCheck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Clock,
    title: 'Disponible 24/7',
    description: 'Intervention à toute heure, de jour comme de nuit, week-ends et jours fériés compris.',
  },
  {
    icon: Award,
    title: 'Équipe Certifiée',
    description: 'Agents titulaires du CQP APS, habilitations à jour et formation continue.',
  },
  {
    icon: ShieldCheck,
    title: 'Assurance RC Pro',
    description: 'Couverture responsabilité civile professionnelle renforcée pour votre sérénité.',
  },
  {
    icon: Zap,
    title: 'Intervention Rapide',
    description: 'Déploiement rapide sur site. Réactivité garantie sur l\'ensemble de nos zones.',
  },
  {
    icon: Users,
    title: 'Équipe Expérimentée',
    description: 'Des professionnels aguerris avec une solide expérience terrain en sécurité privée.',
  },
  {
    icon: FileCheck,
    title: 'Protocoles Stricts',
    description: 'Respect rigoureux des protocoles de sécurité et des réglementations en vigueur.',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="avantages" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Pourquoi nous choisir
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Nos Engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {adv.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}