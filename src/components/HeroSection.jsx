import { useEffect, useState } from "react";
import {
  IconLeaf,
  IconChefHat,
  IconCertificate,
  IconShieldCheck,
  IconStarFilled,
  IconArrowRight,
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

const features = [
  { icon: IconLeaf, title: "Authentic Taste", desc: "Real Indian Flavour" },
  { icon: IconChefHat, title: "Traditional Recipe", desc: "Time-Honoured Method" },
  { icon: IconCertificate, title: "Premium Ingredients", desc: "Quality You Can Trust" },
  { icon: IconShieldCheck, title: "No Preservatives", desc: "100% Natural" },
];

const productShowcase = [
  { src: "/mathri.png", alt: "NaivedyA Mathri" },
  {
    src: "/mathri.png",
    alt: "NaivedyA Namkeen",
  },
  {
    src: "/mathri.png",
    alt: "NaivedyA Chakli",
  },
];
const paginate = (newDirection) => {
  console.log("clicked");
  setDirection(newDirection);
  setActiveIdx((prev) => {
    const next = (prev + newDirection + productShowcase.length) % productShowcase.length;
    console.log("prev:", prev, "next:", next);
    return next;
  });
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 2.0, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % productShowcase.length);
    }, 2000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIdx((prev) => (prev + newDirection + productShowcase.length) % productShowcase.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F1E6] dark:bg-neutral-950">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="naivedya-texture"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 60c0-22 18-40 40-40s40 18 40 40-18 40-40 40"
              fill="none"
              stroke="#6B4226"
              strokeWidth="1.4"
            />
            <circle cx="100" cy="20" r="3" fill="#6B4226" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#naivedya-texture)" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-40 pb-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-26 lg:pb-32">

        {/* LEFT SIDE */}
        <div className="pl-7">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#3C6E47]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2F5739] uppercase backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-green-400"
          >
            <IconLeaf size={14} />
            Authentic Indian Snacks
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 lg:text-5xl dark:text-white"
          >
            Crispy Bites
            <br />
            <span className="text-[#3C6E47]">Pure Tradition</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-md text-neutral-600 dark:text-neutral-400"
          >
            Handcrafted with love using time-honoured recipes and the finest natural ingredients — every bite of NaivedyA brings home the taste of tradition.
          </motion.p>

          {/* <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-[#3C6E47] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#3C6E47]/25 transition-all hover:bg-[#2F5739] active:scale-95"
            >
              Shop Now
              <IconArrowRight size={18} />
            </a>

            <a href="#story" className="group flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors group-hover:bg-white dark:border-neutral-700 dark:text-neutral-300 dark:group-hover:bg-neutral-900">
                <IconArrowUpRight size={18} />
              </span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                Our Story
              </span>
            </a>
          </motion.div> */}

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-14 mb-15 grid grid-cols-2 gap-x-19 gap-y-8 sm:grid-cols-4"
          >
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="flex flex-col items-start gap-1 ">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF1E6] text-[#2F5739] dark:bg-neutral-900 dark:text-green-400">
                  <Icon size={18} />
                </span>
               <p className="text-sm font-semibold text-neutral-900 dark:text-white whitespace-nowrap">
  {title}
</p>
               <p className="text-xs text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
  {desc}
</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: FIXED Animated Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-6 -z-10 rounded-[58%_42%_38%_62%/60%_38%_62%_40%] bg-[#EAF1E6] dark:bg-neutral-900" />

         <div className="relative aspect-[5/5] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl shadow-black/10 dark:border-neutral-900">
  <AnimatePresence mode="wait">
    <motion.img
      key={activeIdx}
      src={productShowcase[activeIdx].src}
      alt={productShowcase[activeIdx].alt}
      initial={{ x: direction * 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction * -100, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </AnimatePresence>

  {/* Testing Label */}
  
</div>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition active:scale-95 dark:bg-neutral-800 dark:hover:bg-neutral-700 z-20"
          >
            <IconChevronLeft size={18} className="text-neutral-700 dark:text-white" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition active:scale-95 dark:bg-neutral-800 dark:hover:bg-neutral-700 z-20"
          >
            <IconChevronRight size={18} className="text-neutral-700 dark:text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {productShowcase.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIdx ? 1 : -1);
                  setActiveIdx(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "w-6 bg-[#3C6E47]" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Badges */}
          <div className="absolute -top-5 -right-5 flex h-[72px] w-[72px] rotate-[8deg] flex-col items-center justify-center rounded-full bg-[#3C6E47] text-center text-white shadow-lg shadow-[#3C6E47]/30 z-20">
            <span className="text-[11px] font-bold leading-tight">100%</span>
            <span className="text-[10px] leading-tight">Natural</span>
          </div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-black/10 dark:bg-neutral-900 z-20">
            <div className="flex -space-x-1 text-[#E8A33D]">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={14} />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-neutral-900 dark:text-white">4.8+</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">Happy Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}