import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does Buraaq Studios offer?",
      answer: "At Buraaq Studios, we offer full-service professional video editing, including: YouTube Video Editing (Vlogs, Tutorials, Podcasts), Cinematic Episodes & Trailers, Viral Reels with Seamless Transitions, Instagram Reels, TikToks, and Shorts, Brand Commercials & Business Promos, Green Screen / Chroma Key Edits, Creative Title Animation & Motion Graphics, Magnetic Media & High-Impact Social Edits, Color Grading, Sound Design & Sync, and Professional VFX Editing (Coming Soon)."
    },
    {
      id: 2,
      question: "Do you offer free samples before starting the project?",
      answer: "Yes! We offer free sample edits or previews on request to help you evaluate our editing style and quality. This is available for first-time clients or custom projects. Please contact us with your footage or reference for a quick demo."
    },
    {
      id: 3,
      question: "How experienced is your team?",
      answer: "We have a team of video professionals with over 5 years of experience, serving clients across the globe. Our editors are skilled in storytelling, fast-paced content creation, and platform-optimized delivery."
    },
    {
      id: 4,
      question: "How much do you charge?",
      answer: "Our pricing depends on video length & type, editing complexity (motion graphics, color grading, etc.), and required effects & delivery speed. General starting prices: Short Reels: $20–$50, YouTube / Podcasts: $50–$150, Cinematic Projects / Trailers: Custom Quote. Get in touch for a tailored estimate based on your project."
    },
    {
      id: 5,
      question: "What is your payment policy?",
      answer: "For new or one-time projects: 40% upfront before editing begins, 60% due upon final delivery. For recurring clients or long-term collaborations: 100% payment is collected after final delivery (invoiced monthly or per project). All payments are invoiced professionally."
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We currently accept: Payoneer (via invoice), Remitly (International & Pakistan), and Direct Bank Transfer (Local + International). We do not accept PayPal or Wise at this time."
    },
    {
      id: 7,
      question: "What is your typical turnaround time?",
      answer: "Average timelines: Short Reels & Clips: 24–48 hours, YouTube Videos: 2–5 business days, Cinematic / Complex Projects: 5–10 business days. Rush delivery available on request."
    },
    {
      id: 8,
      question: "Can I hire your team for monthly editing?",
      answer: "Yes. We offer monthly retainer packages with dedicated editors, priority delivery, and reduced per-video cost. Ideal for YouTubers, agencies, brands, and influencers."
    },
    {
      id: 9,
      question: "What file formats do you deliver?",
      answer: "We deliver final videos in MP4, MOV, or custom formats (on request). Source files (Premiere Pro, After Effects) are available in specific packages."
    },
    {
      id: 10,
      question: "Do you offer revisions?",
      answer: "Absolutely. All packages include free revisions. For retainer or premium clients, we offer unlimited revisions and priority changes."
    },
    {
      id: 11,
      question: "Do you provide voiceovers, subtitles, or scriptwriting?",
      answer: "Yes. Add-on services include: Male/Female Voiceovers (EN/URDU), Manual or auto-generated subtitles, and Script assistance & visual storytelling help."
    },
    {
      id: 12,
      question: "Are you open to signing NDAs?",
      answer: "Yes. We respect your privacy. All projects are handled confidentially, and we're happy to sign Non-Disclosure Agreements (NDAs) when requested."
    },
    {
      id: 13,
      question: "What platforms are your videos optimized for?",
      answer: "We deliver content ready for: YouTube (16:9), Instagram Reels, TikTok, Shorts (9:16), Facebook, LinkedIn, and custom platforms. Every project is optimized for size, resolution, and compression."
    },
    {
      id: 14,
      question: "How do I get started?",
      answer: "Simply reach out with your project idea, reference, or footage via: Email: hello@buraaqstudios.com / contact@buraaqstudios.com, WhatsApp: +92 348 5040874 / +39 380 9024492. We'll guide you through next steps and share timelines + pricing."
    },
    {
      id: 15,
      question: "Do you work internationally?",
      answer: "Yes! We serve clients across USA, UK, Canada, Italy, UAE, Australia, and beyond. Our workflows are flexible and timezone-friendly."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
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
    <section ref={ref} id="faq" className="py-20 bg-dark-lighter relative overflow-hidden">
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
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-teal" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Find answers to common questions about our video editing services
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal to-cyan mx-auto mt-8"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="card overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 flex items-center justify-between group"
                whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(20, 184, 166, 0.3)" }}
                  >
                    <MessageCircle className="w-4 h-4 text-teal" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-teal transition-colors pr-4">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ 
                    rotate: openItems.includes(item.id) ? 180 : 0,
                    scale: openItems.includes(item.id) ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-teal" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <div className="ml-12 pt-2 border-t border-dark-accent">
                        <p className="text-gray-300 leading-relaxed mt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-teal/10 to-cyan/10 rounded-2xl border border-teal/20"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our video editing services.
            </p>
            <motion.button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;