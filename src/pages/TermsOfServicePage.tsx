import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Users, Clock, DollarSign, Shield, Eye, AlertTriangle, RefreshCw, Mail, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Services Offered",
      content: [
        "Video Editing (YouTube, Social Media, Promotional, Corporate, etc.)",
        "Motion Graphics and Visual FX",
        "Faceless Video Production & YouTube Automation",
        "Voiceovers, Thumbnails, Banners, and Channel Branding",
        "Retainer Plans and Bulk Editing Solutions"
      ]
    },
    {
      icon: Users,
      title: "Client Responsibilities",
      content: [
        "Provide all required assets (footage, audio, branding, etc.) on time",
        "Clearly communicate project requirements, deadlines, and expectations",
        "Respond to our feedback and revision requests promptly",
        "Use our services for lawful and authorized purposes only"
      ]
    },
    {
      icon: Clock,
      title: "Turnaround & Revisions",
      content: [
        "Standard turnaround time will be agreed upon based on project size and scope",
        "We offer limited revisions as per your selected package (unlimited revisions may be included in premium tiers)",
        "Major scope changes after final delivery may incur additional charges"
      ]
    },
    {
      icon: DollarSign,
      title: "Payments & Refunds",
      content: [
        "Full or partial advance payments may be required depending on the project",
        "Refunds are offered only in case of failure to deliver the agreed-upon service",
        "No refund is applicable after delivery of final approved files"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "Clients retain full ownership of their original content",
        "Final edited videos and designs are transferred with full usage rights after payment",
        "Buraaq Studios reserves the right to showcase non-confidential work in its portfolio unless otherwise agreed"
      ]
    },
    {
      icon: Eye,
      title: "Confidentiality",
      content: [
        "We treat all client data, media, and projects as confidential",
        "Files shared are not distributed, resold, or used beyond the purpose of your project"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Buraaq Studios is not liable for any loss, damage, or business interruption arising from delays, technical issues, or miscommunications during the editing or design process."
      ]
    },
    {
      icon: RefreshCw,
      title: "Changes to Terms",
      content: [
        "We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page with the updated date."
      ]
    }
  ];

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
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-lighter relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
              <FileText className="w-20 h-20 text-teal mx-auto" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Terms of <span className="text-gradient">Service</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Last Updated: January 2025
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Welcome to Buraaq Studios. By accessing or using our website or services, you agree to be bound by the following Terms of Service. Please read them carefully before placing an order or working with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-xl flex items-center justify-center mx-auto sm:mx-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5 mx-auto sm:mx-0" />
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-r from-teal/10 to-cyan/10 border-teal/20">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-xl flex items-center justify-center mx-auto sm:mx-0"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact</h2>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    For any questions about these Terms, please contact us at:
                  </p>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 justify-center sm:justify-start">
                      <Mail className="w-5 h-5 text-teal mx-auto sm:mx-0" />
                      <a href="mailto:contact@buraaqstudios.com" className="text-teal hover:text-cyan transition-colors text-sm sm:text-base">
                        contact@buraaqstudios.com
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 justify-center sm:justify-start">
                      <Globe className="w-5 h-5 text-teal mx-auto sm:mx-0" />
                      <a href="https://www.buraaqstudios.com" className="text-teal hover:text-cyan transition-colors text-sm sm:text-base">
                        buraaqstudios.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Questions About Our Terms?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We're here to help clarify any concerns you may have about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/#contact">
                <motion.button
                  className="btn-primary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button 
                  className="btn-secondary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;