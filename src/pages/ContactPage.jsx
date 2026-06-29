import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { IconBrandWhatsapp, IconLeaf } from '@tabler/icons-react'
import emailjs from '@emailjs/browser'
import Footer from '@/components/Footer'

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Go to https://emailjs.com → sign up free
// 2. Add a Gmail service → copy Service ID below
// 3. Create an Email Template → copy Template ID below
// 4. Get your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID = 'service_sqisels'
const EMAILJS_TEMPLATE_ID = 'template_7olvkj8'
const EMAILJS_PUBLIC_KEY = 'eAOIql-fqZ2Z-uVoh'
// ──────────────────────────────────────────────────────────────────

const contacts = [
  {
    icon: Phone,
    iconBg: 'bg-[#E1F5EE]',
    iconColor: 'text-[#0F6E56]',
    label: 'Call us',
    value: '+91 96643 51597',
    href: 'tel:+919664351597',
  },
  {
    icon: Phone,
    iconBg: 'bg-[#FFF3E0]',
    iconColor: 'text-[#E65100]',
    label: 'Alternate number',
    value: '+91 78772 31966',
    href: 'tel:+917877231966',
  },
  {
    icon: IconBrandWhatsapp,
    iconBg: 'bg-[#E1F5EE]',
    iconColor: 'text-[#25D366]',
    label: 'WhatsApp',
    value: '+91 96643 51597',
    href: 'https://wa.me/919664351597',
  },
  {
    icon: Mail,
    iconBg: 'bg-[#EDE7F6]',
    iconColor: 'text-[#4527A0]',
    label: 'Email us',
    value: 'jainsaloni1522@gmail.com',
    href: 'mailto:jainsaloni1522@gmail.com',
  },
  {
    icon: MapPin,
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#92400E]',
    label: 'Location',
    value: 'Bapu Nagar, Jaipur, Rajasthan',
    href: null,
  },
]

const ContactPage = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
   <>
      <Navbar />

       <div className="min-h-screen bg-[#F6F1E6]">

      {/* ── Main content ── */}
      <div className="max-w-6xl  bg-[#F6F1E6] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left — contact info with Mathri background */}
        <div className="lg:col-span-2 mt-19 flex flex-col gap-4 relative">
          {/* Background Mathri */}
          

         {/* ── Hero strip (Beige theme) ── */}
 
        {/* Mathri image — low opacity bg */}
        <img
          src="/mathri.png"
          alt=""
          aria-hidden="true"
          className="absolute right-0 bottom-0 h-full w-auto max-w-xs object-contain opacity-10 pointer-events-none select-none"
        />
        
        {/* Decorative elements */}
        <div className="absolute top-[-60px] left-[-60px] w-52 h-52 rounded-full border border-[#3C6E47]/10" />
        <div className="absolute top-[-30px] left-[-30px] w-52 h-52 rounded-full border border-[#3C6E47]/10 mt-10" />

        <div className="relative max-w-6xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3C6E47]/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4 text-[#3C6E47]">
            <IconLeaf size={12} />
            We'd love to hear from you
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 text-neutral-900">
            Contact Us
          </h1>
          <p className="text-neutral-600 text-sm max-w-md">
            Reach out for orders, bulk enquiries, or just to say hello. We're happy to help.
          </p>
        </div>
      
<p className="text-green-900  font-semibold text-sm max-w-md">Contact No. 9664351597, 7877231966</p>
         <p  className="text-white-900  font-semibold text-sm max-w-md"> 321606, Kherli ganj, Alwar  </p>
             <p  className="text-white-900  font-semibold text-sm max-w-md">Rajasthan , India </p>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3 mt-19 mb-5">
          <div className="bg-white border border-[#E8E0D0] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Mathri watermark inside form card */}
            <img
              src="/mathri.png"
              alt=""
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 w-60 h-40 object-contain opacity-[0.06] pointer-events-none select-none"
            />
            <div className="relative">
              <p className="text-xs font-bold tracking-widest uppercase text-[#3C6E47] mb-1">Send a message</p>
              <h3 className="text-xl font-extrabold text-neutral-900 mb-6">We'll get back to you shortly</h3>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E1F5EE] flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-[#3C6E47]" />
                  </div>
                  <p className="text-lg font-extrabold text-neutral-900">Message sent!</p>
                  <p className="text-sm text-neutral-500 max-w-xs">
                    Thanks for reaching out. Saloni Jain from Navaidhya Natural will respond within a few hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-semibold text-[#3C6E47] border border-[#3C6E47]/30 px-5 py-2 rounded-full hover:bg-[#3C6E47] hover:text-white transition-all"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                        className="w-full border border-[#E8E0D0] rounded-xl px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-300 focus:outline-none focus:border-[#3C6E47] focus:ring-1 focus:ring-[#3C6E47]/20 transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-1.5 block">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-[#E8E0D0] rounded-xl px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-300 focus:outline-none focus:border-[#3C6E47] focus:ring-1 focus:ring-[#3C6E47]/20 transition-all bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border border-[#E8E0D0] rounded-xl px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-300 focus:outline-none focus:border-[#3C6E47] focus:ring-1 focus:ring-[#3C6E47]/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-1.5 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you need — order details, bulk enquiry, or anything else..."
                      className="w-full border border-[#E8E0D0] rounded-xl px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-300 focus:outline-none focus:border-[#3C6E47] focus:ring-1 focus:ring-[#3C6E47]/20 transition-all resize-none bg-white"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-rose-500 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                      Something went wrong. Please try again or WhatsApp us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 bg-[#3C6E47] hover:bg-[#2F5739] disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-xl transition-all mt-1"
                  >
                    {status === 'sending' ? (
                      <><Loader2 size={15} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ContactPage