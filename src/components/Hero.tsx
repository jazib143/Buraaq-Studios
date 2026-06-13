import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎬 Cinematic Background Layers */}
      <div className="hero-bg" />
      <div className="hero-overlay" />
      
      <div className="hero-right-glow" />

      {/* 🎥 Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* 🔥 Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CINEMATIC <br /> STORYTELLING
        </motion.h1>

        {/* ✨ Tagline */}
        <motion.p
          className="gold-text tracking-[0.3em] text-xs sm:text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          VISIONS. CAPTURED. ELEVATED.
        </motion.p>

        {/* 📝 Description */}
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          We transform ideas into powerful visual stories. From concept to final
          cut, we craft cinematic experiences that inspire, engage, and leave a
          lasting impact.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Project →
          </button>

          <button
            className="btn-secondary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Our Work
            <Play className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 📊 Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="card text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;