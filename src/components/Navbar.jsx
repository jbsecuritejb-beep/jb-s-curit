import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#avantages' },
  { label: 'Zones', href: '#zones' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/user_69dbca2349b761e3b97ee65e/50b39e3a4_WhatsAppImage2026-04-01at234759.jpeg"
              alt="JB Sécurité Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-lg text-foreground tracking-tight">
              JB <span className="text-primary">SÉCURITÉ</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm font-heading font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580033994977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono-tech text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>FACEBOOK</span>
            </a>
            <a
              href="https://www.instagram.com/jb_securite?igsh=c3RsM3I4dmxqa3cz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono-tech text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </a>
            <Button
              onClick={() => handleClick('#contact')}
              className="bg-primary text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider px-6 hover:bg-primary/90 pulse-gold"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-foreground p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-border z-50 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-heading font-bold text-lg text-primary">MENU</span>
                <button onClick={() => setIsOpen(false)} className="text-foreground">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="text-left text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border">
                <Button
                  onClick={() => handleClick('#contact')}
                  className="w-full bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-wider pulse-gold"
                >
                  Demander un devis
                </Button>
                <p className="mt-4 font-mono-tech text-xs text-muted-foreground uppercase tracking-wider text-center">
                  SIRET 931 108 823 00010
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}