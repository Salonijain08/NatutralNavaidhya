import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import OurProductsSection from '@/components/OurProductsSection'
import OrderPolicySection from '@/components/ui/OrderPolicySection'
import ReviewSectionGrid from './ReviewPage'
import OurStory from '@/components/OurStory'
import Footer from '@/components/Footer'
import ContactPage from './ContactPage'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Homepage = () => {

  const location = useLocation();

useEffect(() => {
  const path = location.pathname.replace("/", "");

  if (!path) return;

  const timer = setTimeout(() => {
    const element = document.getElementById(path);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 100);

  return () => clearTimeout(timer);
}, [location.pathname]);
  return (
    <div>
      <Navbar />

<HeroSection />

<section id="products">
  <OurProductsSection />
</section>

<OrderPolicySection />

<section id="reviews">
  <ReviewSectionGrid />
</section>

<section id="ourstory">
  <OurStory />
</section>

<section id="contact">
  <ContactPage />
</section>
      <div> <Footer /></div>
    </div>
  )
}

export default Homepage