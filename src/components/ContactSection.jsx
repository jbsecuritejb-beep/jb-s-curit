import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const SERVICE_OPTIONS = [
  { value: 'securite_evenementielle', label: 'Sécurité Événementielle' },
  { value: 'gardiennage_chantier', label: 'Gardiennage de Chantier' },
  { value: 'maitre_chien', label: 'Maître-Chien' },
  { value: 'portiers', label: 'Service de Portiers' },
  { value: 'autre', label: 'Autre demande' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: '', entreprise: '', email: '', telephone: '', service: '', message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.ContactRequest.create(form);
    toast.success('Votre demande a été transmise avec succès. Nous vous recontacterons rapidement.');
    setForm({ nom: '', entreprise: '', email: '', telephone: '', service: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Briefing Room
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Demander un Devis
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mt-4">
            Décrivez votre besoin et recevez un devis personnalisé sous 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-lg bg-card border border-border space-y-6">
              <ContactInfo icon={MapPin} label="Adresse" value="53 Avenue de l'Europe, 80080 Amiens — Bureau 4 bis" />
              <ContactInfo icon={Phone} label="Téléphone" value="Contactez-nous" />
              <ContactInfo icon={Mail} label="Email" value="contact@jb-securite.fr" />
              <ContactInfo icon={Clock} label="Disponibilité" value="24h/24 — 7j/7" />
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="JB Sécurité Localisation"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.28%2C49.88%2C2.32%2C49.90&layer=mapnik&marker=49.89%2C2.30"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                loading="lazy"
              />
            </div>

            <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              SIRET 931 108 823 00010 — Amiens, France
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-card border border-border space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Nom complet *</Label>
                  <Input id="nom" value={form.nom} onChange={e => handleChange('nom', e.target.value)} required className="bg-secondary border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="entreprise" className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Entreprise</Label>
                  <Input id="entreprise" value={form.entreprise} onChange={e => handleChange('entreprise', e.target.value)} className="bg-secondary border-border focus:border-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} required className="bg-secondary border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone" className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Téléphone *</Label>
                  <Input id="telephone" value={form.telephone} onChange={e => handleChange('telephone', e.target.value)} required className="bg-secondary border-border focus:border-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Service recherché *</Label>
                <Select value={form.service} onValueChange={v => handleChange('service', v)} required>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Votre message *</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  required
                  rows={5}
                  placeholder="Décrivez votre besoin en sécurité : type d'événement, lieu, dates, nombre de personnes..."
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider py-6 hover:bg-primary/90 pulse-gold"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Transmettre la demande
                  </span>
                )}
              </Button>

              <p className="font-body text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité (RGPD).
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{label}</p>
        <p className="font-body text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}