import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowDown, Star } from 'lucide-react';
import StudioEquipment from './StudioEquipment';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-16 sm:pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <motion.div 
          className="particle w-32 h-32 top-20 left-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="particle w-24 h-24 top-40 right-32"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="particle w-16 h-16 bottom-32 left-1/4"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="particle w-20 h-20 bottom-20 right-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        
        {/* Gradient Overlay with Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-purple/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Studio Equipment Animation */}
      <StudioEquipment />

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading with Staggered Animation - Fixed mobile spacing and text overlap */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              delay: 0.5
            }}
            style={{
              lineHeight: '1.1',
              marginBottom: '2rem'
            }}
          >
            <motion.span
              className="block mb-2 sm:mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Professional
            </motion.span>
            <motion.span 
              className="text-gradient block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{ 
                lineHeight: '1.1',
                paddingBottom: '1rem'
              }}
            >
              Video Editing Agency
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Strong Professional Tagline - Updated content and increased mobile spacing */}
        <motion.div 
          className="mb-8 sm:mb-12"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 leading-relaxed px-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎬 We help YouTubers, Podcasters, and Brands turn raw footage into polished, scroll-stopping content.
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            At Buraaq Studios, we specialize in high-quality video editing — from YouTube automation and podcast reels to cinematic trailers, short-form content, and business promos. We blend creativity with technical precision to deliver content that connects, converts, and impresses.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons - Fixed button centering */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          variants={itemVariants}
        >
          <motion.button 
            className="btn-primary flex items-center justify-center space-x-3 group relative overflow-hidden w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan to-teal"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="relative z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Play className="w-5 h-5" />
            </motion.div>
          </motion.button>
          
          <motion.button 
            className="btn-secondary group w-full sm:w-auto flex items-center justify-center"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(20, 184, 166, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="group-hover:text-white transition-colors"
            >
              View Our Work
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Enhanced Stats with Counter Animation - Updated project count */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: 100, label: "Projects Delivered", suffix: "+" },
            { number: 5, label: "Years Experience", suffix: "+" },
            { number: 50, label: "Countries Served", suffix: "+" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-3 sm:p-4 rounded-lg bg-dark-lighter/50 backdrop-blur-sm border border-dark-accent"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 2 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 + index * 0.2 }}
                >
                  {stat.number}{stat.suffix}
                </motion.span>
              </motion.div>
              <motion.div 
                className="text-gray-400 text-xs sm:text-sm md:text-base font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator - Hidden on mobile */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-teal rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(20, 184, 166, 0.7)",
              "0 0 0 10px rgba(20, 184, 166, 0)",
              "0 0 0 0 rgba(20, 184, 166, 0)"
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity },
            scale: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-teal rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          className="mt-2 text-teal text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;