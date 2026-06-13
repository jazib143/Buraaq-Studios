import React from 'react';
import { Sparkles, Instagram, Youtube, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@BuraaqStudios', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/buraaqstudios/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-jazib-ali-26b4a0312/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@buraaqstudios.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'YouTube Editing', href: '/services/youtube-editing' },
        { name: 'Cinematic Trailers', href: '/services/cinematic-trailers' },
        { name: 'Instagram Reels', href: '/services/instagram-reels' },
        { name: 'Business Promos', href: '/services/business-promos' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/#faq' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Support', href: 'mailto:contact@buraaqstudios.com' },
      ]
    }
  ];

  return (
    <footer className="bg-dark border-t border-dark-accent">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="text-teal w-8 h-8" />
              <h3 className="text-2xl font-bold text-gradient">Buraaq Studios</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional video editing services that transform your vision into compelling visual stories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-accent rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-teal transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal/10 to-cyan/10 rounded-lg p-8 mb-12 text-center border border-teal/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can bring your video vision to life with our professional editing services.
          </p>
          <Link to="/#contact">
            <button className="btn-primary">
              Get Started Today
            </button>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark-accent">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Buraaq Studios. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-teal transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-white hover:bg-cyan transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;