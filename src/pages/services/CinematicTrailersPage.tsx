import React from 'react';
import { Film } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const CinematicTrailersPage: React.FC = () => {
  const pageData = {
    title: 'Cinematic Trailers',
    subtitle: 'Epic Movie-Style Trailers That Captivate Audiences',
    description: 'Create stunning cinematic trailers with Hollywood-level production quality. Our expert editors craft compelling narratives with dramatic effects, professional color grading, and immersive sound design that leaves audiences wanting more.',
    backgroundImage: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Epic Cinematic Editing',
      'Professional Color Grading',
      'Sound Design & Mixing',
      'Visual Effects (VFX)',
      'Motion Graphics',
      'Title Sequences',
      'Dramatic Transitions',
      'Music Synchronization'
    ],
    benefits: [
      'Hollywood-quality production value',
      'Compelling storytelling techniques',
      'Professional sound design',
      'Custom visual effects',
      'Multiple format delivery',
      'Fast turnaround times'
    ],
    process: [
      { step: 'Concept', description: 'Discuss your vision and story requirements' },
      { step: 'Production', description: 'Create cinematic trailer with effects' },
      { step: 'Sound', description: 'Add professional audio and music' },
      { step: 'Final', description: 'Deliver in multiple formats and resolutions' }
    ],
    testimonial: {
      name: 'Michael Chen',
      role: 'Film Director',
      content: 'The cinematic trailer created by Buraaq Studios exceeded our expectations. The quality rivals major studio productions.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Action Movie Trailer',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'High-octane action trailer with explosive effects',
        videoUrl: 'https://youtu.be/xKypkUUlsVQ'
      },
      {
        title: 'Drama Film Teaser',
        image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Emotional drama with beautiful cinematography',
        videoUrl: 'https://youtu.be/682SyDroQAw'
      },
      {
        title: 'Sci-Fi Epic',
        image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Futuristic sci-fi with stunning visual effects',
        videoUrl: 'https://youtu.be/eysfsdIxGrQ'
      }
    ],
    icon: Film,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-purple-600'
  };

  return <ServicePageLayout {...pageData} />;
};

export default CinematicTrailersPage;