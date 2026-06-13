import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Award, Users, Clock, Globe, Target, Zap, Camera, Film, Mail, Phone, Linkedin, MapPin, Monitor, Clapperboard, Star, CheckCircle, Play, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const stats = [
    { icon: Users, number: '20+', label: 'Professional Editors', color: 'text-blue-400', description: 'Expert video editors worldwide' },
    { icon: Globe, number: '50+', label: 'Countries Served', color: 'text-green-400', description: 'Global reach and presence' },
    { icon: Award, number: '1000+', label: 'Projects Completed', color: 'text-yellow-400', description: 'Successful video productions' },
    { icon: Clock, number: '24/7', label: 'Support Available', color: 'text-purple-400', description: 'Round-the-clock assistance' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'We deliver nothing short of perfection in every frame, ensuring your content stands out in the crowded digital landscape.',
      color: 'text-teal'
    },
    {
      icon: Zap,
      title: 'Creative Innovation',
      description: 'Our team pushes creative boundaries, bringing fresh perspectives and cutting-edge techniques to every project.',
      color: 'text-cyan'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand deadlines matter. Our streamlined workflow ensures your projects are delivered on time, every time.',
      color: 'text-purple'
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: 'Your success is our success. We work closely with you to exceed expectations and build lasting partnerships.',
      color: 'text-pink-400'
    }
  ];

  const services = [
    { name: 'YouTube Editing', icon: Monitor, description: 'Engaging content that drives views and subscribers' },
    { name: 'Cinematic Trailers', icon: Film, description: 'Epic movie-style productions with Hollywood quality' },
    { name: 'Social Media Reels', icon: Camera, description: 'Viral short-form content for all platforms' },
    { name: 'Corporate Content', icon: Clapperboard, description: 'Professional business videos that convert' }
  ];

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
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          {/* Main Professional Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          
          {/* Studio Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Professional Equipment Silhouettes */}
          <motion.div
            className="absolute top-20 left-10 opacity-5"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Monitor className="w-24 h-24 text-teal" />
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-16 opacity-5"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -2, 2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <Clapperboard className="w-28 h-28 text-cyan" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/4 opacity-5"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Camera className="w-20 h-20 text-purple" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/3 opacity-5"
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Film className="w-16 h-16 text-yellow-400" />
          </motion.div>

          {/* Professional Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-20 h-20 text-teal mx-auto" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              About <span className="text-gradient">Buraaq Studios</span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Global Post-Production Excellence
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              We are a world-class video editing agency that transforms raw footage into compelling visual stories, serving influencers, agencies, startups, and brands across the globe.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section ref={ref} className="py-20 bg-dark-lighter relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Founder Image */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal to-cyan rounded-full blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="/1.jpeg"
                  alt="Hafiz Muhammad Jazib Ali - Founder of Buraaq Studios"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-teal shadow-2xl mx-auto"
                  style={{
                    boxShadow: '0 0 50px rgba(20, 184, 166, 0.4), 0 0 100px rgba(20, 184, 166, 0.2)'
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal to-cyan p-4 rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Meet Our <span className="text-gradient">Founder</span>
              </motion.h2>
              
              <motion.h3 
                className="text-2xl font-semibold text-teal mb-6"
                variants={itemVariants}
              >
                Hafiz Muhammad Jazib Ali
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Visionary entrepreneur and creative director who founded Buraaq Studios with a mission to revolutionize the video editing industry. With years of experience in post-production and a passion for storytelling, Jazib has built a global team of talented editors who share his commitment to excellence.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8"
                variants={itemVariants}
              >
                Under his leadership, Buraaq Studios has grown from a small creative studio to a globally recognized post-production powerhouse, serving clients across multiple continents and industries.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
              >
                {[
                  { text: 'Visionary Leader', color: 'bg-teal/20 text-teal' },
                  { text: 'Creative Director', color: 'bg-cyan/20 text-cyan' },
                  { text: 'Industry Expert', color: 'bg-purple/20 text-purple' }
                ].map((tag, index) => (
                  <motion.span
                    key={index}
                    className={`px-4 py-2 ${tag.color} rounded-full text-sm font-medium`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(20, 184, 166, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tag.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Impact</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment and global reach
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card text-center group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
                }}
              >
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal/10 to-cyan/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: hoveredStat === index ? 360 : 0,
                      scale: hoveredStat === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 font-medium mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.p>
                  <motion.p 
                    className="text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Values</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that drive everything we do at Buraaq Studios
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)"
                }}
              >
                {/* Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal/5 to-cyan/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredValue === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex items-start space-x-6">
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 ${value.color} bg-dark-accent rounded-xl flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Expertise</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized video editing services that cover every aspect of post-production
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-teal to-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-teal/25"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Global <span className="text-gradient">Partnership</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by influencers, agencies, startups, and brands worldwide
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <Users className="w-12 h-12 text-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Influencers</h3>
              <p className="text-gray-400">Content creators who trust us to make their videos stand out</p>
            </div>
            <div className="card">
              <Globe className="w-12 h-12 text-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Agencies</h3>
              <p className="text-gray-400">Marketing agencies that rely on our expertise for client success</p>
            </div>
            <div className="card">
              <Award className="w-12 h-12 text-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Brands</h3>
              <p className="text-gray-400">Companies that choose us for professional video production</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal/10 to-cyan/10 relative overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
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
              radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)
            `,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied clients worldwide. Let's create something extraordinary together and take your video content to the next level.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/#contact">
                    <motion.button
                      className="btn-primary flex items-center space-x-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Start Your Project</span>
                      <Play className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link to="/#portfolio">
                    <motion.button 
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Our Work
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;