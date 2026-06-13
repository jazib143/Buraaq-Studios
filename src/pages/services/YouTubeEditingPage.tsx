import React from 'react';
import { Youtube } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const YouTubeEditingPage: React.FC = () => {
  const pageData = {
    title: 'YouTube Video Editing',
    subtitle: 'Engaging Content That Drives Views and Subscribers',
    description: 'Transform your raw footage into compelling YouTube videos that captivate audiences, boost engagement, and grow your channel. Our expert editors understand YouTube\'s algorithm and create content optimized for maximum reach and retention.',
    backgroundImage: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Professional Video Editing',
      'Custom Thumbnail Design',
      'Color Grading & Correction',
      'Audio Enhancement',
      'Motion Graphics & Effects',
      'Intro/Outro Creation',
      'Social Media Clips',
      'Multiple Format Delivery'
    ],
    benefits: [
      'Increase viewer retention with engaging edits',
      'Boost subscriber growth with professional quality',
      'Save time with fast turnaround',
      'Optimize for YouTube algorithm',
      'Custom branding and style',
      'Multiple format delivery'
    ],
    process: [
      { step: 'Upload', description: 'Send us your raw footage and requirements' },
      { step: 'Edit', description: 'Our team creates your professional video' },
      { step: 'Review', description: 'You review and request any changes' },
      { step: 'Deliver', description: 'Receive your final video in all formats' }
    ],
    testimonial: {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      content: 'Buraaq Studios transformed my YouTube channel completely! Their editing style is exactly what I needed to engage my audience.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Tech Review Channel',
        image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional tech reviews with dynamic graphics',
        videoUrl: 'https://youtu.be/AFSHb6DChPQ'
      },
      {
        title: 'Gaming Content',
        image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'High-energy gaming videos with custom effects',
        videoUrl: 'https://youtu.be/xKypkUUlsVQ'
      },
      {
        title: 'Educational Series',
        image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Clear, engaging educational content',
        videoUrl: 'https://youtu.be/wtkgSjNnm_E'
      }
    ],
    icon: Youtube,
    color: 'text-red-400',
    gradient: 'from-red-500 to-red-600'
  };

  return <ServicePageLayout {...pageData} />;
};

export default YouTubeEditingPage;