'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SessionFeesSection from './components/SessionFeesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SessionFeesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
