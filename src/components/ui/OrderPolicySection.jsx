import React, { useState } from 'react'
import {
  MessageCircle,
  PackageCheck,
  MapPin,
  ArrowRight,
  Phone,
  Clock3,
  X,
} from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const PHONE = '9664351597'
const WA_LINK = `https://wa.me/91${PHONE}`
const CALL_LINK = `tel:+91${PHONE}`

const ContactModal = ({ onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-[20px] border border-[#E8E0D0] w-full max-w-sm overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top section — warm bg */}
      <div className=" px-5 pt-5 pb-4    relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white border  flex items-center justify-center text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          <X size={14} />
        </button>

        
        <p className="text-[20px] font-bold     text-center text-[#3C6E47] mb-0.5">
          Contact us
        </p>
        <h3 className="text-base text-center font-extrabold text-neutral-500 leading-snug">
          How would you like to reach us?
        </h3>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col gap-3.5">
        {/* Number pill */}
        <div className="flex items-center gap-3 bg-neutral-50  rounded-xl px-3.5 py-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#E1F5EE] flex items-center justify-center shrink-0">
            <Phone size={16} className="text-[#0F6E56]" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-0.5">
              Phone / WhatsApp
            </p>
            <p className="text-[15px] font-extrabold text-neutral-900 tracking-wide">
              +91 96643 51597
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm py-3 rounded-xl transition-all"
          >
            <IconBrandWhatsapp size={17} />
            Message on WhatsApp
          </a>
          <a
            href={CALL_LINK}
            className="flex items-center justify-center gap-2 bg-[#3C6E47] hover:bg-[#2F5739] text-white font-semibold text-sm py-3 rounded-xl transition-all"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Divider + timing */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-[#F0EAE0]" />
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
  <Clock3 size={12} />
  Available 24×7 &nbsp;·&nbsp; Call anytime
</div>

          <div className="flex-1 h-px bg-[#F0EAE0]" />
        </div>
      </div>
    </div>
  </div>
)

const policies = [
  {
    id: 1,
    // icon: IconBrandWhatsapp,
    iconBg: 'bg-[#E1F5EE]',
    iconColor: 'text-[#0F6E56]',
    accentColor: 'border-l-[#3C6E47]',
    tag: 'Easy Ordering',
    tagBg: 'bg-[#E1F5EE] text-[#0F6E56]',
    title: 'Order on WhatsApp or Call',
    description:
      'No app, no signup — just message or call us directly. Tell us what you want and we handle the rest.',
    cta: 'Chat with us',
    ctaIcon: MessageCircle,
    ctaStyle: 'bg-[#3C6E47] hover:bg-[#2F5739] text-white', extraIcon: null,
    extra: null,
  },
  {
    id: 2,
    // icon: PackageCheck,
    iconBg: 'bg-[#FFF3E0]',
    iconColor: 'text-[#E65100]',
      accentColor: 'border-l-[#3C6E47]',
    tag: 'Bulk Orders',
   tagBg: 'bg-[#E1F5EE] text-[#0F6E56]',
    title: "Large Orders? We've Got You",
    description:
      'Planning a function, wedding, or gifting? We take bulk orders — just let us know a few days in advance.',
    cta: 'Place bulk order',
    ctaIcon: Phone,
    ctaStyle: 'bg-[#3C6E47] hover:bg-[#2F5739] text-white',
    extraIcon: Clock3,
    // extraIconColor: 'text-[#E8A33D]',
    extra: 'Advance notice helps us serve you better',
  },
  {
    id: 3,
    // icon: MapPin,
    iconBg: 'bg-[#EDE7F6]',
    iconColor: 'text-[#4527A0]',
     accentColor: 'border-l-[#3C6E47]',
    tag: 'Jaipur & Nearby',
    tagBg: 'bg-[#E1F5EE] text-[#0F6E56]',
    title: 'Free Delivery in Jaipur',
    description:
      'We deliver free within Jaipur and nearby areas. Fresh, packed, and right at your doorstep.',
    cta: null,
    ctaIcon: null,
    ctaStyle: null,
    extraIcon: MapPin,
    // extraIconColor: 'text-[#7C4DFF]',
    extra: 'Jaipur · Sikar · Ajmer · Alwar & more',
  },
]

const OrderPolicySection = () => {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
<Navbar />
      <section className="bg-[#F6F1E6] py-16 px-6">
        <div className="max-w-6xl mx-auto mt-15">

          {/* Header */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#3C6E47] mb-1">
                How It Works
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Simple ways to order
              </h2>
            </div>
          
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {policies.map((p) => {
              const Icon = p.icon
              const CtaIcon = p.ctaIcon
              const ExtraIcon = p.extraIcon

              return (
                <div
                  key={p.id}
                  className={`bg-white rounded-2xl border border-[#E8E0D0] border-l-4 ${p.accentColor} p-5 flex flex-col gap-4 hover:shadow-md hover:shadow-neutral-200 transition-all duration-200`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    {/* <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.iconBg}`}>
                      <Icon size={20} className={p.iconColor} />
                    </div> */}
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${p.tagBg}`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-1.5">
                    <h3 className="text-neutral-900 font-bold text-[15px] leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#28631e] text-xs leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Extra Note */}
                  {p.extra && (
                    <div className="flex items-center gap-2 text-[11px] text-[#28631e] bg-neutral-50 border border-[#F0EAE0] rounded-lg px-3 py-2">
                      {ExtraIcon && <ExtraIcon size={13} className={p.extraIconColor} />}
                      <span>{p.extra}</span>
                    </div>
                  )}

                  {/* CTA — opens contact modal */}
                  {p.cta && (
                    <button
                      onClick={() => setShowContact(true)}
                      className={`inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${p.ctaStyle}`}
                    >
                      {CtaIcon && <CtaIcon size={13} />}
                      {p.cta}
                      <ArrowRight size={12} />
                    </button>
                  )}

                  {/* Delivery footer */}
                  {!p.cta && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#28631e]" />
                      <span className="text-[11px] text-[#28631e] font-semibold">
                        Free delivery, no minimum order
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}

export default OrderPolicySection
