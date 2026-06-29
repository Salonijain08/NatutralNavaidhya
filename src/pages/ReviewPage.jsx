import React from "react";
import { IconStarFilled, IconLeaf } from "@tabler/icons-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    avatar: "/mathri.png",
    rating: 5,
    date: "15 March 2025",
    review:
      "These mathris are absolutely divine! The perfect balance of spices and that homemade taste I grew up with. My family finished the entire pack in one sitting.",
    product: "Classic Masala Mathri",
  },
  {
    name: "Rahul Verma",
    location: "Mumbai",
    avatar: "/mathri.png",
    rating: 5,
    date: "02 April 2025",
    review:
      "Finally found namkeens that actually taste authentic. The chakli is crispy and melts in the mouth. Packaging is premium.",
    product: "Mix Namkeen & Chakli",
  },
  {
    name: "Ananya Patel",
    location: "Ahmedabad",
    avatar: "/mathri.png",
    rating: 5,
    date: "20 May 2025",
    review:
      "Bought it for my parents and they loved it so much. The freshness and quality is unmatched. Feels like something made at home with love.",
    product: "Premium Mathri Gift Pack",
  },
];

const ReviewSectionGrid = () => {
  const averageRating = 4.9;
  const totalReviews = "2.4k";

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <IconStarFilled key={i} size={18} className="text-[#E8A33D]" />
      ))}
    </div>
  );

  return (
    <>
      <Navbar />

      <section className="relative bg-[#F6F1E6] dark:bg-neutral-950 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <IconLeaf className="text-[#3C6E47]" size={28} />
              <span className="uppercase tracking-widest text-sm font-semibold text-[#3C6E47]">
                Customer Love
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Real Stories, Real Joy
            </h2>

            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
              {averageRating} • Based on {totalReviews} happy customers
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border border-[#3C6E47]/10 hover:border-[#3C6E47]/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-[#3C6E47]/20 text-6xl mb-4">“</div>

                <p className="text-[17px] leading-relaxed text-neutral-700 dark:text-neutral-300 mb-8 min-h-[180px]">
                  {t.review}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-[#EAF1E6]"
                  />

                  <div>
                    <p className="font-semibold text-lg">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.location}</p>

                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={t.rating} />
                      <span className="text-xs text-neutral-400">
                        • {t.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewSectionGrid;