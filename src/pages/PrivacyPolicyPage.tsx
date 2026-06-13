import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Globe, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and any other information provided through contact forms or communication.",
        "Project Files and Content: Videos, images, scripts, audio, and other files submitted for editing purposes.",
        "Usage Data: Browser type, device information, referring site, and user interaction with our website (via cookies or analytics tools)."
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "Communicate with you regarding inquiries or ongoing projects",
        "Deliver and improve our services",
        "Personalize your experience on our site",
        "Send updates, invoices, or feedback requests (with your consent)",
        "Ensure the security and integrity of your data"
      ]
    },
    {
      icon: Lock,
      title: "Confidentiality & NDAs",
      content: [
        "All client projects are treated with strict confidentiality. We are open to signing Non-Disclosure Agreements (NDAs) upon request to ensure your content remains secure and private."
      ]
    },
    {
      icon: Shield,
      title: "Data Sharing & Third Parties",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may use third-party tools (like Google Analytics or contact forms) only to enhance website performance or communication."
      ]
    },
    {
      icon: Globe,
      title: "Cookies",
      content: [
        "We may use cookies to enhance user experience, analyze website traffic, and offer relevant services. You can manage cookie preferences through your browser settings."
      ]
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Request access to your personal data",
        "Ask for corrections or deletion of your data",
        "Withdraw consent at any time",
        "To make such a request, please contact us at privacy@buraaqstudios.com."
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

        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
              <Shield className="w-20 h-20 text-teal mx-auto" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Privacy <span className="text-gradient">Policy</span>
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
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              At Buraaq Studios (www.buraaqstudios.com), we value your privacy and are committed to protecting the personal and project-related information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website, contact us, or work with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div variants={itemVariants} className="card">
              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple to-pink-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">
                      We implement secure hosting, encryption, and strict access control measures to protect your data from unauthorized access, loss, or misuse.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">
                      We may update this Privacy Policy occasionally. All updates will be posted on this page, and your continued use of the site implies acceptance of the revised policy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="card bg-gradient-to-r from-teal/10 to-cyan/10 border-teal/20">
              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions or concerns about our privacy practices, please contact us at:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-teal" />
                      <a href="mailto:contact@buraaqstudios.com" className="text-teal hover:text-cyan transition-colors">
                        contact@buraaqstudios.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-teal" />
                      <a href="https://www.buraaqstudios.com" className="text-teal hover:text-cyan transition-colors">
                        www.buraaqstudios.com
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Privacy Policy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help clarify any concerns you may have about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/#contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button 
                  className="btn-secondary"
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

export default PrivacyPolicyPage;