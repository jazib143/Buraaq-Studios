import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Calendar, Video } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  projectType: string;
  resultMetric: string;
  date: string;
  industry: string;
}

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'TechTalk YouTube Channel',
      content: 'Buraaq Studios transformed my YouTube channel completely! Their editing style is exactly what I needed to engage my audience. The attention to detail and quick turnaround time is exceptional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'YouTube Series',
      resultMetric: '+300% Engagement',
      date: 'December 2024',
      industry: 'Content Creation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'InnovateTech Solutions',
      content: 'Working with Buraaq Studios on our corporate promotional videos was a game-changer. They understood our brand vision perfectly and delivered cinematic quality that exceeded our expectations.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'Corporate Marketing',
      resultMetric: '+150% Conversions',
      date: 'November 2024',
      industry: 'Technology'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      company: 'Fashion Forward Brand',
      content: 'The Instagram reels created by Buraaq Studios helped us increase our engagement by 300%! Their understanding of social media trends and editing techniques is unmatched.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'Instagram Reels',
      resultMetric: '+500K Followers',
      date: 'October 2024',
      industry: 'Fashion'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Fitness Influencer',
      company: 'FitLife Channel',
      content: 'Helped grow my fitness channel with professional edits and engaging thumbnails. My watch time increased by 400% after working with them. The quality is consistently outstanding.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'YouTube Content',
      resultMetric: '+400% Watch Time',
      date: 'September 2024',
      industry: 'Fitness'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Business Owner',
      company: 'Bloom Bakery',
      content: 'Quick turnaround without compromising quality. Our promotional video helped increase foot traffic by 60% within the first month. Highly recommend their services.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'Business Promo',
      resultMetric: '+60% Foot Traffic',
      date: 'August 2024',
      industry: 'Food & Beverage'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Real Estate Agent',
      company: 'Wilson Real Estate',
      content: 'Outstanding virtual property tours that showcase homes beautifully. Our listings now sell 40% faster thanks to their video content. Professional and reliable service.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      projectType: 'Property Tours',
      resultMetric: '+40% Faster Sales',
      date: 'July 2024',
      industry: 'Real Estate'
    }
  ];

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: i * 0.1,
          type: "spring",
          stiffness: 300
        }}
      >
        <Star 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
        />
      </motion.div>
    ));
  };

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

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Don't just take our word for it - hear from our satisfied clients across various industries
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="relative">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                  }}
                  className="card text-center p-8 md:p-12 relative overflow-hidden"
                >
                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal/5 to-cyan/5"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        damping: 10,
                        stiffness: 200
                      }}
                    >
                      <Quote className="w-12 h-12 text-teal mx-auto mb-6" />
                    </motion.div>
                    
                    {/* Testimonial Content */}
                    <motion.p 
                      className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>

                    {/* Rating */}
                    <motion.div 
                      className="flex justify-center mb-6"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <div className="flex space-x-1">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </motion.div>

                    {/* Client Info */}
                    <motion.div 
                      className="flex items-center justify-center space-x-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.img 
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-teal"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="text-left">
                        <motion.h4 
                          className="text-xl font-bold text-white"
                          whileHover={{ color: "#14B8A6" }}
                        >
                          {testimonials[currentIndex].name}
                        </motion.h4>
                        <motion.p 
                          className="text-teal font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {testimonials[currentIndex].role}
                        </motion.p>
                        <motion.p 
                          className="text-gray-400 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          {testimonials[currentIndex].company}
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                      className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-teal mb-1">
                          <Play className="w-4 h-4" />
                          <span className="text-sm font-medium">Project Type</span>
                        </div>
                        <span className="text-white text-sm">{testimonials[currentIndex].projectType}</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-cyan mb-1">
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-medium">Result</span>
                        </div>
                        <span className="text-white text-sm font-bold">{testimonials[currentIndex].resultMetric}</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-purple mb-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">Date</span>
                        </div>
                        <span className="text-white text-sm">{testimonials[currentIndex].date}</span>
                      </div>
                    </motion.div>

                    {/* Industry Tag */}
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="inline-block px-4 py-2 bg-teal/20 text-teal text-sm rounded-full border border-teal/30">
                        {testimonials[currentIndex].industry}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <motion.div 
              className="flex justify-between items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-teal text-teal hover:bg-teal hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex space-x-2 overflow-hidden">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === currentIndex ? 'bg-teal scale-125' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: index === currentIndex ? 1.25 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-teal text-teal hover:bg-teal hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Testimonial Counter */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-gray-400 text-sm">
                {currentIndex + 1} of {testimonials.length} testimonials
              </span>
            </motion.div>

            {/* Auto-play Indicator */}
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm ${isAutoPlaying ? 'text-teal' : 'text-gray-400'} hover:text-teal transition-colors`}
                whileHover={{ scale: 1.05 }}
              >
                {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;