import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <h2 className="font-heading font-bold text-lg text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border">
      {title}
    </h2>
    <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-2">
      {children}
    </div>
  </motion.div>
);

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-heading text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/50b39e3a4_WhatsAppImage2026-04-01at234759.jpeg"
              alt="JB Sécurité Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-foreground">
              JB <span className="text-primary">SÉCURITÉ</span>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Informations légales
          </p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Mentions Légales
          </h1>
          <p className="font-body text-muted-foreground text-sm">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN).
          </p>
        </motion.div>

        <div className="p-8 rounded-lg bg-card border border-border">

          <Section title="1. Éditeur du site">
            <p><span className="text-foreground font-medium">Raison sociale :</span> JB SÉCURITÉ</p>
            <p><span className="text-foreground font-medium">Forme juridique :</span> Entreprise individuelle</p>
            <p><span className="text-foreground font-medium">SIRET :</span> 931 108 823 00010</p>
            <p><span className="text-foreground font-medium">Siège social :</span> 53 Avenue de l'Europe, Bureau 4 bis — 80080 Amiens, France</p>
            <p><span className="text-foreground font-medium">Email :</span> contact@jb-securite.fr</p>
            <p><span className="text-foreground font-medium">Activité :</span> Sécurité privée — surveillance humaine</p>
          </Section>

          <Section title="2. Activité réglementée — Sécurité Privée">
            <p>JB SÉCURITÉ exerce une activité réglementée par le <span className="text-foreground">Code de la Sécurité Intérieure (CSI)</span>, notamment par les articles L.612-1 et suivants.</p>
            <p>L'entreprise est titulaire d'une autorisation d'exercice délivrée par le <span className="text-foreground">Conseil National des Activités Privées de Sécurité (CNAPS)</span>.</p>
          </Section>

          <Section title="3. Article 612-14 du Code de la Sécurité Intérieure">
            <div className="p-5 rounded-lg border border-primary/30 bg-primary/5">
              <p className="font-mono-tech text-xs uppercase tracking-[0.15em] text-primary mb-3">
                Art. L. 612-14 CSI
              </p>
              <p className="text-foreground italic leading-relaxed">
                « L'autorisation d'exercer ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient. »
              </p>
            </div>
            <p className="mt-3">
              Conformément à cet article, les agents de JB SÉCURITÉ n'ont aucun pouvoir de police et agissent dans le strict cadre de la loi, sans prérogatives de puissance publique.
            </p>
          </Section>

          <Section title="4. Assurance Responsabilité Civile Professionnelle">
            <p>JB SÉCURITÉ est couvert par une assurance Responsabilité Civile Professionnelle (RC Pro) conformément à l'obligation prévue par l'article L.612-9 du Code de la Sécurité Intérieure.</p>
          </Section>

          <Section title="5. Hébergement du site">
            <p><span className="text-foreground font-medium">Hébergeur :</span> Base44</p>
            <p><span className="text-foreground font-medium">Site :</span> base44.com</p>
          </Section>

          <Section title="6. Propriété intellectuelle">
            <p>L'ensemble des contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de JB SÉCURITÉ ou sont utilisés avec autorisation. Toute reproduction, même partielle, est strictement interdite sans accord préalable écrit.</p>
          </Section>

          <Section title="7. Protection des données personnelles (RGPD)">
            <p>Les données collectées via le formulaire de contact sont utilisées uniquement dans le cadre du traitement de votre demande de devis. Elles ne sont pas transmises à des tiers.</p>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à : <span className="text-foreground">contact@jb-securite.fr</span></p>
          </Section>

          <Section title="8. Cookies">
            <p>Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.</p>
          </Section>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-muted-foreground text-center">
              Dernière mise à jour : Avril 2026 — JB Sécurité — Amiens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}