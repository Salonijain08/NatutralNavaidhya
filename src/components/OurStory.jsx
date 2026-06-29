import { motion } from "motion/react";
import { IconLeaf, IconHeart } from "@tabler/icons-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const timeline = [
  {
    emoji: "🏠",
    year: "The Beginning",
    heading: "Started from home",
    desc: "Mamma began making snacks the way her mother taught her — by hand, with patience, and with only the finest ingredients. No shortcuts, no preservatives, just pure love on a plate.",
  },
  {
    emoji: "✨",
    year: "The Spark",
    heading: "When neighbours became customers",
    desc: 'Word spread through the neighbourhood. "Yeh kaahan se laayi?" became a daily question. That\'s when we realised — these weren\'t just snacks, they were memories people wanted to keep.',
  },
  {
    emoji: "📦",
    year: "Taking Shape",
    heading: "NaivedyA is born",
    desc: "We gave the dream a name. NaivedyA — an offering made with devotion. Every batch is still handcrafted with the same recipe, the same care, the same hands.",
  },
  {
    emoji: "🚀",
    year: "Today & Beyond",
    heading: "Growing, but never forgetting our roots",
    desc: "Our family has big dreams — to bring authentic Indian snacks to every home, near and far. No matter how big we grow, the recipe stays the same: honest ingredients, time-honoured methods, and a whole lot of love.",
  },
];

const values = [
  { emoji: "🌿", title: "Pure Ingredients", desc: "No chemicals, no shortcuts. What goes in is what you taste." },
  { emoji: "👐", title: "Handcrafted Always", desc: "Every piece shaped by hand, the way it's always been done." },
  { emoji: "🏡", title: "Family First", desc: "A family business, made for your family's snack time." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function OurStory() {
  return (
    <>
      <Navbar />
    <section className="relative overflow-hidden bg-[#F6F1E6] dark:bg-neutral-950 ">

      {/* Background texture (same as HeroSection) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="story-texture" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M10 60c0-22 18-40 40-40s40 18 40 40-18 40-40 40" fill="none" stroke="#6B4226" strokeWidth="1.4" />
            <circle cx="100" cy="20" r="3" fill="#6B4226" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#story-texture)" />
      </svg>

   <div className="relative max-w-7xl mx-auto px-6 lg:px-15 mt-20 mb-20">

        {/* Badge */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-[#3C6E47]/20 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2F5739] uppercase backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-green-400 mb-6"
        >
          <IconHeart size={14} />
          Made with love since day one
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white lg:text-5xl"
        >
          A kitchen full of love,{" "}
          <span className="text-[#3C6E47]">a dream that grew</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="mt-5 max-w-xl text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          NaivedyA wasn't born in a factory. It started where all the best things do — Mamma's kitchen, with the smell of fresh mathri and the warmth of tradition.
        </motion.p>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3C6E47] to-[#EAF1E6] dark:to-neutral-900 rounded-full" />

          {timeline.map(({ emoji, year, heading, desc }, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={idx * 0.5}
              variants={fadeUp}
              className="flex gap-6 mb-12 relative"
            >
              {/* Dot */}
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#EAF1E6] border-[3px] border-[#3C6E47] flex items-center justify-center text-lg z-10 dark:bg-neutral-900">
                {emoji}
              </div>

              {/* Content */}
              <div className="pt-1">
                <p className="text-xs font-semibold text-[#3C6E47] uppercase tracking-widest mb-1">
                  {year}
                </p>
                <p className="text-base font-semibold text-neutral-900 dark:text-white mb-1.5">
                  {heading}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mamma's Quote */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="border-l-4 border-[#3C6E47] pl-6 pr-4 py-4 bg-[#3C6E47]/5 rounded-r-2xl mt-4 mb-14 dark:bg-[#3C6E47]/10"
        >
          <p className="text-[#2F5739] dark:text-green-300 text-lg italic leading-relaxed font-medium">
            "Ghar ke khaane ka woh swad, jo market mein milta hi nahi — yahi hai NaivedyA ka vaada."
          </p>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
            — Mamma, founder & head chef
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.5}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-14"
        >
          {values.map(({ emoji, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5"
            >
              <span className="text-2xl mb-3 block">{emoji}</span>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Vision Block */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.5}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#3C6E47] rounded-3xl p-8 text-white"
        >
          <span className="text-5xl flex-shrink-0">🌟</span>
          <div>
            <p className="text-xl font-bold mb-2">Our vision — to go far, together</p>
            <p className="text-sm text-white/80 leading-relaxed">
              From one kitchen to thousands of homes across India and beyond — NaivedyA aims to be the name you reach for when you want snacks that taste like home. Authentic, honest, and always made with heart.
            </p>
          </div>
        </motion.div>

      </div>
    </section>

    <Footer />
      </>
  );
}