import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ShoppingCart, Heart, Star, Flame, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { IconLeaf } from '@tabler/icons-react'
import Footer from './Footer'

const products = [
  {
    id: 1,
    name: 'Classic Mathri',
    description: 'Flaky, crispy and perfectly salted — our most loved snack',
    price: 149,
    originalPrice: 179,
    image: '/mathri.png',
    badge: 'Bestseller',
    weight: '200g',
    rating: 4.9,
    reviews: 1240,
    customerFav: true,
  },
  {
    id: 2,
    name: 'Masala Mathri',
    description: 'Bold spices meet traditional crunch in every bite',
    price: 159,
    originalPrice: null,
    image: '/mathri.png',
    badge: null,
    weight: '200g',
    rating: 4.7,
    reviews: 843,
    customerFav: false,
  },
  {
    id: 3,
    name: 'Ajwain Mathri',
    description: 'Carom seeds add a warm, digestive twist to the classic',
    price: 149,
    originalPrice: null,
    image: '/mathri.png',
    badge: null,
    weight: '200g',
    rating: 4.6,
    reviews: 519,
    customerFav: false,
  },
  {
    id: 4,
    name: 'Methi Mathri',
    description: 'Fenugreek-kissed crunch with a subtle homestyle bitterness',
    price: 159,
    originalPrice: 189,
    image: '/mathri.png',
    badge: 'New',
    weight: '200g',
    rating: 4.8,
    reviews: 312,
    customerFav: true,
  },
  {
    id: 5,
    name: 'Namkeen Mix',
    description: 'A festive blend of sev, mathri and roasted nuts',
    price: 199,
    originalPrice: 229,
    image: '/mathri.png',
    badge: null,
    weight: '250g',
    rating: 4.8,
    reviews: 967,
    customerFav: true,
  },
  {
    id: 6,
    name: 'Chakli',
    description: 'Spiral rice-flour bites with a satisfying, light crunch',
    price: 179,
    originalPrice: null,
    image: '/mathri.png',
    badge: 'Limited',
    weight: '180g',
    rating: 4.7,
    reviews: 288,
    customerFav: false,
  },
  {
    id: 7,
    name: 'Shakkar Para',
    description: 'Sweet, melt-in-mouth squares made with pure desi ghee',
    price: 139,
    originalPrice: null,
    image: '/mathri.png',
    badge: null,
    weight: '200g',
    rating: 4.5,
    reviews: 401,
    customerFav: false,
  },
  {
    id: 8,
    name: 'Namak Para',
    description: 'Lightly salted diamond cuts — the perfect tea companion',
    price: 129,
    originalPrice: null,
    image: '/mathri.png',
    badge: null,
    weight: '200g',
    rating: 4.6,
    reviews: 634,
    customerFav: false,
  },
  
]

const badgeConfig = {
  Bestseller: { style: 'bg-[#3C6E47] text-white', icon: <Flame size={9} /> },
  New:        { style: 'bg-[#E8A33D] text-white', icon: <Sparkles size={9} /> },
  Limited:    { style: 'bg-rose-600 text-white',  icon: null },
  'Top Pick': { style: 'bg-[#6B4226] text-white', icon: <Star size={9} className="fill-white" /> },
}

const OurProductsSection = () => {
  const [wishlisted, setWishlisted] = useState({})
  const [addedToCart, setAddedToCart] = useState({})

  const toggleWishlist = (id) => {
    setWishlisted(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleAddToCart = (id) => {
    setAddedToCart(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setAddedToCart(prev => ({ ...prev, [id]: false })), 1800)
  }

  const discount = (orig, curr) => orig ? Math.round(((orig - curr) / orig) * 100) : null

  return (
    <>
    <section className="bg-[#F6F1E6] py-4 px-6">

      {/* Header */}
      <div className="text-center mb-16 mt-15 space-y-4 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3C6E47]/20 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#2F5739] uppercase backdrop-blur-sm">
          <IconLeaf size={13} />
          Handcrafted With Love
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Our Products
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Every recipe passed down through generations — made fresh, packed with care.
        </p>
        <div className="w-16 h-0.5 bg-[#3C6E47] mx-auto rounded-full" />
      </div>

      {/* Customer Favourites Strip */}
      {/* <div className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center gap-3 bg-[#fff8ed] border border-[#E8A33D]/30 rounded-2xl px-5 py-3.5">
          <div className="bg-[#E8A33D]/15 rounded-full p-2">
            <Heart size={16} className="text-[#E8A33D] fill-[#E8A33D]" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-700 tracking-wide">Customer Favourites</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Marked with <Heart size={9} className="inline text-rose-500 fill-rose-500 mx-0.5" /> — loved by 10,000+ happy customers
            </p>
          </div>
          <div className="ml-auto flex -space-x-2">
            {['🧑‍🍳','👩','🧔','👩‍🦱','🧑'].map((e, i) => (
              <span key={i} className="w-7 h-7 rounded-full bg-white border-2 border-[#F6F1E6] flex items-center justify-center text-sm shadow-sm">{e}</span>
            ))}
          </div>
        </div>
      </div> */}

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const disc = discount(product.originalPrice, product.price)
          const isWished = wishlisted[product.id]
          const isAdded = addedToCart[product.id]

          return (
            <Card
              key={product.id}
              className="bg-white border border-[#E8E0D0] rounded-xl overflow-hidden flex flex-col group hover:shadow-lg hover:shadow-[#3C6E47]/10 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              {/* Customer Fav ribbon */}
              {product.customerFav && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-rose-500 text-white text-[9px] font-bold px-3 py-0.5 rounded-bl-xl tracking-widest uppercase flex items-center gap-1">
                    <Heart size={8} className="fill-white" /> Fav
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative bg-[#fffff] h-46 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-0 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <Badge
                    className={`absolute top-2 left-2 text-[9px] font-bold tracking-widest uppercase border-0 shadow-sm flex items-center gap-1 ${badgeConfig[product.badge].style}`}
                  >
                    {badgeConfig[product.badge].icon}
                    {product.badge}
                  </Badge>
                )}

                {/* Discount pill */}
                {disc && (
                  <span className="absolute top-2 right-8 bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                    -{disc}%
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all shadow-sm
                    ${isWished
                      ? 'bg-rose-500 border-rose-500'
                      : 'bg-white/80 border-[#E8E0D0] hover:border-rose-300'
                    }`}
                >
                  <Heart size={10} className={isWished ? 'fill-white text-white' : 'text-rose-400'} />
                </button>

                {/* Weight */}
                <span className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm text-[9px] font-semibold text-neutral-500 px-1.5 py-0.5 rounded-full border border-[#E8E0D0]">
                  {product.weight}
                </span>
              </div>

              {/* Content */}
              <CardContent className="px-3 pt-3 pb-1 flex-1 space-y-1 border-t border-[#F0EAE0]">
                <h3 className="text-neutral-900 font-bold text-sm leading-snug">
                  {product.name}
                </h3>
                <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Rating row */}
                <div className="flex items-center gap-1 pt-0.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={9}
                        className={i < Math.floor(product.rating)
                          ? 'fill-[#E8A33D] text-[#E8A33D]'
                          : 'fill-neutral-200 text-neutral-200'}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-700">{product.rating}</span>
                  <span className="text-[10px] text-neutral-400">({product.reviews.toLocaleString()})</span>
                </div>

                {/* Price row */}
                <div className="flex items-baseline gap-1.5 pt-0.5">
                  <span className="text-[#3C6E47] font-extrabold text-base">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-neutral-400 text-[10px] line-through">₹{product.originalPrice}</span>
                  )}
                  {disc && (
                    <span className="text-green-600 text-[10px] font-semibold">-{disc}%</span>
                  )}
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter className="px-3 pb-3 pt-2 flex gap-2">
                <Button
                  onClick={() => handleAddToCart(product.id)}
                  className={`flex-1 font-semibold text-[11px] tracking-wide gap-1.5 h-8 rounded-lg transition-all shadow-sm
                    ${isAdded
                      ? 'bg-green-600 hover:bg-green-600 text-white shadow-green-600/20'
                      : 'bg-[#3C6E47] hover:bg-[#2F5739] text-white shadow-[#3C6E47]/20'
                    }`}
                >
                  {isAdded
                    ? <><CheckCircle2 size={14} /> Added!</>
                    : <><ShoppingCart size={14} /> Add to Cart</>
                  }
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

    {/* <div className="max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    { icon: 'ti-truck',      label: 'Free Delivery',  sub: 'Orders above ₹499', bg: 'bg-[#E1F5EE]', color: 'text-[#0F6E56]' },
    { icon: 'ti-leaf',       label: '100% Natural',   sub: 'No preservatives',  bg: 'bg-[#EAF3DE]', color: 'text-[#3B6D11]' },
    { icon: 'ti-home-heart', label: 'Home Recipe',    sub: 'Traditional methods',bg: 'bg-[#FAEEDA]', color: 'text-[#854F0B]' },
    { icon: 'ti-star',       label: '4.8 Rated',      sub: '10,000+ customers', bg: 'bg-[#EEEDFE]', color: 'text-[#534AB7]' },
  ].map((t) => (
    <div key={t.label} className="bg-white border border-[#E8E0D0] rounded-xl p-4 flex flex-col gap-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.bg}`}>
        <i className={`ti ${t.icon} text-xl ${t.color}`} />
      </div>
      <div>
        <p className="text-xs font-bold text-neutral-800">{t.label}</p>
        <p className="text-[11px] text-neutral-400 mt-0.5">{t.sub}</p>
      </div>
    </div>
  ))}
</div> */}

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 text-[#3C6E47] font-semibold text-sm border border-[#3C6E47]/30 px-6 py-2.5 rounded-full hover:bg-[#3C6E47] hover:text-white transition-all cursor-pointer group">
          <IconLeaf size={14} />
          View All Products
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

    </section>
    <Footer />
</>
  )
}

export default OurProductsSection