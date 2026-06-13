import React from 'react';
import { Scissors } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const GreenScreenEditingPage: React.FC = () => {
  const pageData = {
    title: 'Green Screen Editing',
    subtitle: 'Seamless Background Replacement & Compositing',
    description: 'Transform any location into your perfect backdrop with professional green screen editing and compositing. Our advanced techniques ensure realistic, seamless integration that brings your creative vision to life with stunning visual quality.',
    backgroundImage: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Professional Keying',
      'Background Replacement',
      'Realistic Compositing',
      'Lighting Correction',
      'Edge Refinement',
      'Motion Tracking',
      'Color Matching',
      'Shadow Integration'
    ],
    benefits: [
      'Unlimited creative possibilities',
      'Cost-effective location changes',
      'Professional studio quality',
      'Seamless integration',
      'Weather-independent shooting',
      'Enhanced storytelling options'
    ],
    process: [
      { step: 'Analysis', description: 'Analyze green screen footage quality' },
      { step: 'Key', description: 'Professional chroma key extraction' },
      { step: 'Composite', description: 'Seamlessly blend with new background' },
      { step: 'Refine', description: 'Perfect edges and color matching' }
    ],
    testimonial: {
      name: 'David Kim',
      role: 'Content Creator',
      content: 'The green screen work was flawless! You couldn\'t tell it wasn\'t filmed on location. Amazing attention to detail.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Virtual Studio',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional virtual studio environment',
        videoUrl: 'https://youtu.be/eysfsdIxGrQ'
      },
      {
        title: 'Fantasy Landscape',
        image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Magical fantasy world compositing',
        videoUrl: 'https://youtu.be/xKypkUUlsVQ'
      },
      {
        title: 'Corporate Presentation',
        image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional corporate background',
        videoUrl: 'https://youtu.be/AFSHb6DChPQ'
      }
    ],
    icon: Scissors,
    color: 'text-green-400',
    gradient: 'from-green-500 to-green-600'
  };

  return <ServicePageLayout {...pageData} />;
};

export default GreenScreenEditingPage;