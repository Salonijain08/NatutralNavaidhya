import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import OurProductsSection from '@/components/OurProductsSection'
import OrderPolicySection from '@/components/ui/OrderPolicySection'
import ReviewSectionGrid from './ReviewPage'
import OurStory from '@/components/OurStory'
import Footer from '@/components/Footer'
import ContactPage from './ContactPage'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurProductsSection />
       <OrderPolicySection/>
       <ReviewSectionGrid />
       <OurStory />
       <ContactPage />
      <div> <Footer /></div>
    </div>
  )
}

export default Homepage