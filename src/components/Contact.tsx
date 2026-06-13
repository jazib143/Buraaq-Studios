import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreementAccepted) {
      alert('Please accept the client agreement to proceed.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setAgreementAccepted(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@buraaqstudios.com',
      link: 'mailto:hello@buraaqstudios.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 324 9578385',
      link: 'tel:+923249578385'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+39 380 9024492',
      link: 'https://wa.me/393809024492'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      link: '#'
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-dark-lighter">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your video content? Let's discuss your project and bring your vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-dark border border-dark-accent rounded-lg text-white placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors disabled:opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-dark border border-dark-accent rounded-lg text-white placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors disabled:opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark border border-dark-accent rounded-lg text-white placeholder-gray-400 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project, timeline, and budget..."
                  />
                </div>

                {/* Client Agreement Checkbox */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={agreementAccepted}
                      onChange={(e) => setAgreementAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 text-teal bg-dark border-dark-accent rounded focus:ring-teal focus:ring-2"
                      required
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed">
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={() => setShowAgreement(true)}
                        className="text-teal hover:text-cyan underline transition-colors"
                      >
                        Client Agreement
                      </button>
                      {' '}and confirm that I have read the{' '}
                      <a href="/terms-of-service" className="text-teal hover:text-cyan underline transition-colors">
                        Terms of Service
                      </a>
                      {' '}and{' '}
                      <a href="/privacy-policy" className="text-teal hover:text-cyan underline transition-colors">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !agreementAccepted}
                  className="btn-primary w-full flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                  >
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're here to help bring your video projects to life. Whether you need a quick edit or a complete production, our team is ready to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-dark-accent hover:border-teal/50 transition-all duration-300 hover:bg-dark-accent/30 group"
                >
                  <info.icon className="w-6 h-6 text-teal group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-teal transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-lg border border-teal/20">
              <h4 className="text-xl font-bold text-white mb-4">Quick Response Guarantee</h4>
              <p className="text-gray-300">
                We respond to all inquiries within 24 hours. For urgent projects, contact us via WhatsApp for immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Client Agreement Modal */}
      {showAgreement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowAgreement(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-lighter border border-dark-accent rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Client Agreement</h3>
              <button
                onClick={() => setShowAgreement(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="bg-gradient-to-r from-teal/10 to-cyan/10 p-6 rounded-lg border border-teal/20">
                <p className="text-white font-semibold mb-4">
                  By submitting this form, you confirm that you have read and agreed to our Terms of Service and Privacy Policy.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">You understand that:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal mt-1 flex-shrink-0" />
                        <span>All projects follow our stated delivery timelines, revision policies, and payment terms.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal mt-1 flex-shrink-0" />
                        <span>Any media or content provided by you must be owned or properly licensed.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal mt-1 flex-shrink-0" />
                        <span>You are entering a professional agreement with Buraaq Studios upon submission.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-400 border-t border-dark-accent pt-4">
                    We reserve the right to contact you via email or WhatsApp regarding your inquiry.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setAgreementAccepted(true);
                    setShowAgreement(false);
                  }}
                  className="btn-primary flex-1"
                >
                  I Agree
                </button>
                <button
                  onClick={() => setShowAgreement(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;