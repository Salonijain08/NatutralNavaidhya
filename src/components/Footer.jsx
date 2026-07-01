import { Link } from "react-router-dom";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconLeaf,
  IconShieldCheck,
  IconChefHat,
  IconMail,
  IconPhone,
  IconMapPin,
  IconPackage,
  IconBook,
  IconStar,
  IconClipboardList,
  IconTruckDelivery,
  IconRefresh,
  IconLock,
  IconCertificate,
  IconCircleCheck,
  IconHome,
  IconHeart,
} from "@tabler/icons-react";

const quickLinks = [
  { label: "Home", to: "/", icon: IconHome },
  { label: "Our products", to: "/products", icon: IconPackage },
  { label: "Our story", to: "/ourstory", icon: IconBook },
  { label: "Reviews", to: "/reviews", icon: IconStar },
  { label: "Contact us", to: "/contact", icon: IconMail },
  { label: "Order policy", to: "/orderpolicysection", icon: IconClipboardList },
];

const policyLinks = [
  { label: "Shipping info", to: "#", icon: IconTruckDelivery },
  { label: "Return policy", to: "#", icon: IconRefresh },
  { label: "Privacy policy", to: "#", icon: IconLock },
];
const contactLinks = [
  { label: "navaidhyanatural@gmail.com", href: "mailto:navaidhyanatural@gmail.com", icon: IconMail },
  { label: "+91 9664351597", href: "tel:+919664351597", icon: IconPhone },
  { label: "WhatsApp order", href: "https://wa.me/919664351597", icon: IconBrandWhatsapp },
  { label: "Alwar,Rajasthan", href: "#", icon: IconMapPin },
];
// const socials = [
//   { icon: IconBrandInstagram, href: "#", label: "Instagram" },
//   { icon: IconBrandFacebook, href: "#", label: "Facebook" },
//   { icon: IconBrandWhatsapp, href: "#", label: "WhatsApp" },
//   { icon: IconBrandYoutube, href: "#", label: "YouTube" },
// ];

const certItems = [
  { text: "FSSAI License", sub: "12345678901234" },
  { text: "Hygienic manufacturing unit" },
  { text: "Zero artificial colours or flavours" },
  { text: "Allergen-declared packaging" },
  { text: "Best-before date on every pack" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#234a28]">

      {/* SVG texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="footer-texture" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M10 60c0-22 18-40 40-40s40 18 40 40-18 40-40 40"
              fill="none"
              stroke="#F6F1E6"
              strokeWidth="1.3"
            />
            <circle cx="100" cy="20" r="2.5" fill="#F6F1E6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-texture)" />
      </svg>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-60 w-60 rounded-full border-[50px] border-white/[0.04]" />
      <div className="pointer-events-none absolute -left-8 top-5 h-32 w-32 rounded-full border-[30px] border-white/[0.03]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F6F1E6]/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-5 lg:px-8">

        <div className="grid grid-cols-1 gap-10 pb-10 border-b border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
 


              <div>
                <p className="font-serif text-xl font-bold tracking-wide text-[#F6F1E6]">NaivedyA Natural</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#A8D4B0]">Taste of Tradition</p>
              </div>
            </div>

            <p className="mt-3 max-w-[230px] text-[12.5px] leading-relaxed text-[#B8D4BC]">
              Handcrafted Indian snacks made with time-honoured recipes, the finest natural ingredients, and a pinch of love.
            </p>

            {/* <div className="mt-4 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[#F6F1E6] transition-all hover:bg-white/15 hover:border-white/40"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}

            <div className="mt-4 flex flex-wrap gap-1.5 mt-10" >
              {[
                { icon: IconLeaf, label: "100% Natural" },
                { icon: IconShieldCheck, label: "No Preservatives" },
                { icon: IconChefHat, label: "Handcrafted" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10.5px] text-[#D4EDD8]"
                >
                  <Icon size={11} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-3 text-[13.5px] font-semibold  text-[#A8D4B0]">
              Quick links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, to, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-[13px] text-[#C8DFCC] transition-colors hover:text-[#F6F1E6]"
                  >
                    <Icon size={13} className="text-[#A8D4B0]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Policies */}
          <div>
            <p className="mb-3 text-[13.5px] font-semibold text-[#A8D4B0]">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-[13px] text-[#C8DFCC] transition-colors hover:text-[#F6F1E6]"
                  >
                    <Icon size={13} className="text-[#A8D4B0]" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          
          </div>

          {/* FSSAI Card */}
          <div>
            <p className="mb-3 text-[13.5px] font-semibold text-[#A8D4B0]">
              Food safety
            </p>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 flex-shrink-0">
                  <IconCertificate size={18} className="text-[#F6F1E6]" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#F6F1E6]">FSSAI Certified</p>
                  <p className="text-[10px] font-semibold text-[#A8D4B0] tracking-wide">
                    Food Safety &amp; Standards
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {certItems.map(({ text, sub }, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11.5px] text-[#C8DFCC]">
                    <IconCircleCheck size={13} className="text-[#A8D4B0] flex-shrink-0 mt-0.5" />
                    <div>
                      {text}
                      {sub && (
                        <span className="block font-mono text-[9.5px] text-[#A8D4B0] bg-white/10 rounded px-1.5 py-px mt-0.5 w-fit">
                          {sub}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
          <p className="text-[11.5px] text-[#7AAE82]">© 2026 NaivedyA. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11.5px] text-[#7AAE82]">
            <IconHeart size={13} className="text-[#A8D4B0]" />
            Made with love in India
          </p>
        </div>
      </div>
    </footer>
  );
}