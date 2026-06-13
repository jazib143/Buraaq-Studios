import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ExternalLink, Quote, Users, Globe, Award } from 'lucide-react';

const TrustSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const reviews = [
    {
      id: 1,
      text: "Always a pleasure working with Buraaq Studios!",
      author: "Kjetil",
      location: "Austria",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 2,
      text: "Delivered exactly what I needed for my YouTube channel.",
      author: "Sarah M.",
      location: "USA",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 3,
      text: "Gave a massive order - so impressed with the coordination and professionalism. Awesome work.",
      author: "Originalpk12",
      location: "Pakistan",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 4,
      text: "Responded quickly, politely and did a great job",
      author: "Kjetil",
      location: "Austria",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 5,
      text: "Buraaq was very honest, quick to deliver, and very respectful, thank you Buraaq will contact you again and work with you again.",
      author: "Joshtim",
      location: "Canada",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 6,
      text: "As always a pleasure to work with them, they listen to my needs and deliver with good quality!",
      author: "Kjetil",
      location: "Austria",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 7,
      text: "Outstanding video editing quality! The team understood my vision perfectly and delivered beyond expectations.",
      author: "Marcus",
      location: "Germany",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 8,
      text: "Fast turnaround time and excellent communication throughout the project. Highly recommended!",
      author: "Emma",
      location: "UK",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 9,
      text: "Professional editing that transformed my raw footage into something amazing. Will definitely work with them again.",
      author: "Alex",
      location: "Australia",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 10,
      text: "Great attention to detail and creative input. The final video exceeded my expectations completely.",
      author: "Maria",
      location: "Spain",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 11,
      text: "Reliable, professional, and delivers high-quality work consistently. My go-to video editor!",
      author: "David",
      location: "Netherlands",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 12,
      text: "Incredible motion graphics and smooth editing. Perfect for my business promotional videos.",
      author: "Lisa",
      location: "France",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 13,
      text: "Amazing work! They really know how to make content engaging and professional. Exceeded all my expectations.",
      author: "James",
      location: "Canada",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 14,
      text: "Perfect editing for my podcast clips. Great communication and delivered exactly what I wanted.",
      author: "Sophie",
      location: "UK",
      rating: 5,
      platform: "Fiverr"
    },
    {
      id: 15,
      text: "Top-notch quality and very professional service. Will definitely be working with them again soon!",
      author: "Ahmed",
      location: "UAE",
      rating: 5,
      platform: "Fiverr"
    }
  ];

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
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
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
        staggerChildren: 0.1
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
    <section ref={ref} className="py-20 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <Users className="w-8 h-8 text-teal" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by <span className="text-gradient">Creators Worldwide</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Join thousands of satisfied clients who trust us with their video content
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {[
            { icon: Star, number: "5.0", label: "Average Rating", suffix: "/5" },
            { icon: Users, number: "500", label: "Happy Clients", suffix: "+" },
            { icon: Globe, number: "50", label: "Countries", suffix: "+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-dark-lighter border border-dark-accent"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(20, 184, 166, 0.1)",
                borderColor: "rgba(20, 184, 166, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Reviews Grid - Show first 6 reviews */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="card group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredReview(index)}
              onMouseLeave={() => setHoveredReview(null)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal/5 to-cyan/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredReview === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Quote Icon */}
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <Quote className="w-8 h-8 text-teal" />
                </motion.div>

                {/* Review Text */}
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  "{review.text}"
                </motion.p>

                {/* Rating */}
                <motion.div 
                  className="flex space-x-1 mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  {renderStars(review.rating)}
                </motion.div>

                {/* Author Info */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div>
                    <div className="font-semibold text-white">{review.author}</div>
                    <div className="text-sm text-gray-400">{review.location}</div>
                  </div>
                  <div className="text-xs text-teal font-medium bg-teal/20 px-2 py-1 rounded-full">
                    {review.platform}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Reviews Preview */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">More Happy Clients</h3>
            <p className="text-gray-300">See what our global community of creators is saying</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.slice(6, 15).map((review, index) => (
              <motion.div
                key={review.id}
                className="p-4 bg-dark-lighter/50 rounded-lg border border-dark-accent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(20, 184, 166, 0.05)" }}
              >
                <div className="flex space-x-1 mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-gray-300 mb-3 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-white">{review.author}</div>
                    <div className="text-xs text-gray-400">{review.location}</div>
                  </div>
                  <div className="text-xs text-teal bg-teal/20 px-2 py-1 rounded-full">
                    {review.platform}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fiverr CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-2xl border border-teal/20 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal/5 to-cyan/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Want to See More Reviews?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out our complete review history and see why creators worldwide choose Buraaq Studios for their video editing needs.
              </p>
              <motion.a
                href="https://www.fiverr.com/buraaqstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Our Fiverr Profile</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;