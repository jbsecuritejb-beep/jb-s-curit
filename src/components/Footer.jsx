import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/50b39e3a4_WhatsAppImage2026-04-01at234759.jpeg"
                alt="JB Sécurité Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg text-foreground">
                JB <span className="text-primary">SÉCURITÉ</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Entreprise de sécurité privée basée à Amiens. Nous assurons la protection de vos événements, chantiers et établissements avec professionnalisme et rigueur.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Opérationnel 24/7
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580033994977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:text-primary transition-all"
              >
                <Facebook className="w-4 h-4 text-primary" />
                <span className="font-heading font-medium text-sm text-foreground">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/jb_securite?igsh=c3RsM3I4dmxqa3cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:text-primary transition-all"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span className="font-heading font-medium text-sm text-foreground">Instagram</span>
              </a>
              <a
                href="https://wa.me/330786747759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:text-primary transition-all"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="font-heading font-medium text-sm text-foreground">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Services', href: '#services' },
                { label: 'Nos Engagements', href: '#avantages' },
                { label: 'Zones d\'intervention', href: '#zones' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Informations Légales
            </h4>
            <div className="space-y-3 font-mono-tech text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
              <p>SIRET : 931 108 823 00010</p>
              <p>53 Avenue de l'Europe</p>
              <p>80080 Amiens — Bureau 4 bis</p>
              <p className="pt-2">Assurance RC Pro</p>
              <p>Agrément sécurité privée</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            © {new Date().getFullYear()} JB Sécurité — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-muted-foreground cursor-pointer hover:text-primary transition-colors">
              Politique de confidentialité
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}