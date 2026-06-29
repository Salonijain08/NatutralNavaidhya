import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/Productpage'
import ContactPage from './pages/ContactPage'
import OurProductsSection from './components/OurProductsSection'
import OrderPolicySection from './components/ui/OrderPolicySection'
import ReviewPage from './pages/ReviewPage'
import OurStory from './components/OurStory'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
     
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path="/orderpolicysection" element={<OrderPolicySection />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App