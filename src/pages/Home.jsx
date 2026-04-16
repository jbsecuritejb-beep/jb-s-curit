import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import AdvantagesSection from '../components/AdvantagesSection';
import GallerySection from '../components/GallerySection';
import ZonesSection from '../components/ZonesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <GallerySection />
      <AdvantagesSection />
      <ZonesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}