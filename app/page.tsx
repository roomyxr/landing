import Navbar from './components/navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import UseCases from './components/UseCases';
import Problem from './components/Problem';
import Faq from './components/Faq';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';
import Win1 from './components/Win1';
import TheW from './components/TheW';
import TheB from './components/TheB';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roomy | The Ultimate Spatial Workspace for VR & Immersive Learning',
  description: 'Read PDFs, take interactive notes, and collaborate in a 3D virtual environment. Roomy transforms your Meta Quest 3 and Steam VR into a powerful spatial productivity workspace.',
  keywords: [
    'Spatial Workspace', 
    'VR Productivity App', 
    'Meta Quest 3 office', 
    'Virtual Reality PDF reader', 
    'Immersive learning system', 
    'Roomy spatial computing', 
    'Co-working in VR'
  ],
  alternates: {
    canonical: 'https://roomyxr.com', 
  },
  openGraph: {
    title: 'Roomy | Next-Gen Spatial Workspace',
    description: 'Transform your VR headset into a powerful digital classroom and office. Secure your founder status inside the Roomy waitlist today.',
    url: 'https://roomyxr.com',
    siteName: 'Roomy',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Roomy Spatial Workspace for XR',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roomy | The Ultimate Spatial Workspace for XR',
    description: 'Read PDFs, take notes, and study inside a 3D space on Meta Quest 3.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Roomy',
        'operatingSystem': 'Meta Quest, Apple Vision Pro, Windows, SteamVR, Mobile, Desktop',
        'applicationCategory': 'BusinessApplication, EducationalApplication',
        'offers': {
          '@type': 'Offer',
          'price': '29.00',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/PreOrder'
        },
        'description': 'A dedicated digital sanctuary and spatial workspace for productivity, learning, and mental balance in Virtual Reality.',
        'featureList': [
          'Spatial PDF Document Reader',
          'Interactive AI Focus Tools',
          'Speech-to-Text Note-Taking',
          'Social Co-Working Modules and Quiet Rooms',
          'Lo-Fi Aesthetics and Environmental Adjustments'
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is this just another VR game?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No, Roomy is a dedicated digital sanctuary for productivity, learning, and mental balance. We swapped chaotic energy for Lo-Fi aesthetics and AI-driven focus tools to help you actually get things done.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does the AI Assistant actually help me?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Your AI companion is an interactive partner that learns your habits. It monitors your progress, suggests breaks when you are hitting a wall, and can turn your spoken ideas into PDF notes instantly via speech-to-text.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I need a high-end VR headset to use Roomy?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can access Roomy via Meta Quest or Apple Vision Pro for the full immersive experience, but we also have Desktop and Mobile apps so you can stay in your flow state from any device.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I really study with my friends in VR?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Absolutely. We have a Social Module where you can join Quiet Rooms with your squad to study together, vibe to the same Lo-Fi tracks, or just enjoy the shared presence without the pressure of a noisy real-world cafe.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens after the 100 Founder slots are gone?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Once the 100 slots are filled, the price moves to a standard monthly subscription model (5-10 euros per month). Founders keep their lifetime access and exclusive badge forever with no extra charges.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is it just for students?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Not at all. We engineered specific rooms for Medical Students, Investors, Entrepreneurs, and Artists. Each room comes with specialized tools like 3D anatomical models or real-time data dashboards tailored to your specific professional grind.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="relative min-h-screen bg-primary overflow-x-hidden">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div 
        className="absolute inset-0 z-00 pointer-events-none bg-repeat-y bg-top bg-contain" 
        style={{ backgroundImage: 'url("/bg.svg")', minHeight: '100%' }}
        aria-hidden="true"
      />

      <Navbar />
      
      <div className="relative z-30">
        <Hero />
      </div>
      
      <div className="relative z-20 space-y-8 sm:space-y-8">
        <Problem />
        <Product />
        <Win1 />
        <UseCases />
        <TheW />
        <SpecialOffer />
        <TheB />
        <Faq />
      </div>
      <div className="relative z-40">
        <Footer />
      </div>
    </main>
  );
}