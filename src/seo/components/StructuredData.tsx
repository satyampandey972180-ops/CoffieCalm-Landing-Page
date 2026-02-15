import { Helmet } from 'react-helmet-async';
import { StructuredData } from '../types';
import { SEO_CONFIG, BRAND_VARIATIONS } from '../config';
import { faqData } from '../data/faqData';

interface StructuredDataProps {
  data: StructuredData | StructuredData[];
}

export function StructuredDataComponent({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.organizationName,
    alternateName: [
      'Coffie Calm',
      'Coffee Calm',
      'CalmCoffie',
      'Calm Coffie'
    ],
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.logo,
    description: 'Anonymous random chat online platform for mental wellness and peer support. CoffieCalm provides free random chat connections for emotional support, combining the immediacy of random chat with the safety of a mental health-focused community.',
    sameAs: [
      SEO_CONFIG.twitterUrl,
      SEO_CONFIG.facebookUrl,
      SEO_CONFIG.instagramUrl,
      SEO_CONFIG.pinterestUrl,
      SEO_CONFIG.redditUrl,
    ],
    about: {
      '@type': 'Thing',
      name: 'Mental Wellness',
      description: 'Peer-to-peer emotional support and mental health conversations'
    },
    mentions: [
      {
        '@type': 'Thing',
        name: 'Peer Support',
        description: 'Emotional support provided by peers with lived experience'
      },
      {
        '@type': 'Thing',
        name: 'Anonymous Support',
        description: 'Confidential emotional conversations without revealing identity'
      },
      {
        '@type': 'Thing',
        name: 'Mental Health',
        description: 'Emotional wellness and psychological well-being'
      },
      {
        '@type': 'Thing',
        name: 'Anxiety Support',
        description: 'Peer support for anxiety and stress management'
      },
      {
        '@type': 'Thing',
        name: 'Random Chat',
        description: 'Instant random chat connections for mental wellness support'
      }
    ]
  };

  return <StructuredDataComponent data={schema} />;
}

// WebSite Schema with Search Action
export function WebSiteSchema() {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    alternateName: 'Coffie Calm',
    url: SEO_CONFIG.siteUrl,
    description: 'Anonymous random chat online platform for mental wellness. Also known as Coffie Calm and Coffee Calm. Connect with peer support through free random chat for emotional support and mental health conversations.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredDataComponent data={schema} />;
}

// WebApplication Schema
export function WebApplicationSchema() {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SEO_CONFIG.siteName,
    alternateName: 'Coffie Calm',
    url: SEO_CONFIG.siteUrl,
    applicationCategory: 'HealthApplication',
    keywords: 'random chat, anonymous chat, mental wellness, peer support, random chat online, emotional support, mental health support, anonymous random chat, random chat mental health',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free anonymous random chat online for mental wellness support. Connect with peer support through instant random chat connections. CoffieCalm provides random chat for emotional support, combining the immediacy of random chat with the safety of a mental health-focused community.',
    about: {
      '@type': 'Thing',
      name: 'Peer Support Platform',
      description: 'Anonymous emotional support through peer-to-peer conversations and random chat'
    },
    mentions: [
      {
        '@type': 'Thing',
        name: 'Mental Wellness'
      },
      {
        '@type': 'Thing',
        name: 'Emotional Support'
      },
      {
        '@type': 'Thing',
        name: 'Anonymous Chat'
      },
      {
        '@type': 'Thing',
        name: 'Random Chat'
      }
    ],
    featureList: [
      'Anonymous random chat online with complete privacy and instant connections',
      '24/7 availability - connect with peer listeners anytime without appointments',
      'Judgment-free support from empathetic listeners who understand mental health challenges',
      'Topic-based Sharing Circles for group peer support on anxiety, stress, and more',
      'One-on-one Quiet Corner conversations for private emotional support',
      'Random chat feature for immediate mental wellness support',
      'No social media features - no likes, followers, or public profiles',
      'Free to use - accessible emotional support for everyone',
      'Safe, moderated environment focused on mental wellness and peer connection'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  return <StructuredDataComponent data={schema} />;
}

// All Schemas Combined
export function AllSchemas() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <WebApplicationSchema />
      <FAQPageSchema />
      <ReviewSchema />
      <HowToSchema />
    </>
  );
}

// HowTo Schema for Getting Started
export function HowToSchema() {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Started with CoffieCalm for Anonymous Emotional Support',
    description: 'Learn how to start using CoffieCalm for anonymous peer-to-peer emotional support in just a few simple steps.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Download the CoffieCalm App',
        text: 'Download the free CoffieCalm app from the App Store (iOS) or Google Play (Android). The app is completely free to download and use.',
        url: SEO_CONFIG.siteUrl
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Create Your Anonymous Profile',
        text: 'Choose a pseudonym (like "CoffeeLover99") and select an avatar. No real name, photo, or personal information required—your identity stays completely anonymous.',
        url: SEO_CONFIG.siteUrl
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Choose Your Support Type',
        text: 'Decide whether you want to join a topic-based Sharing Circle for group peer support or connect one-on-one in a Quiet Corner for private emotional conversations.',
        url: SEO_CONFIG.siteUrl
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Start Your Conversation',
        text: 'Share your thoughts, feelings, or challenges with empathetic peer listeners. Talk freely in a judgment-free space designed for mental wellness and emotional support.',
        url: SEO_CONFIG.siteUrl
      }
    ],
    totalTime: 'PT5M'
  };

  return <StructuredDataComponent data={schema} />;
}

// FAQPage Schema
export function FAQPageSchema() {
  const schema: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredDataComponent data={schema} />;
}

// Review Schema for Testimonials
export function ReviewSchema() {
  const testimonialData = [
    {
      author: 'QuietReader',
      rating: 5,
      reviewBody: 'I always felt too anxious for therapy. Here, I can just sit in a Sharing Circle, listen, and talk when I\'m ready. It feels like a warm hug.',
      datePublished: '2026-01-15'
    },
    {
      author: 'NightOwl_88',
      rating: 5,
      reviewBody: 'Being a Listener has given me so much perspective. It feels good to just be there for someone, without needing to "fix" their problems.',
      datePublished: '2026-01-20'
    },
    {
      author: 'TeaTime',
      rating: 5,
      reviewBody: 'The Quiet Corner is wonderful. No social pressure, no likes, just a real conversation with someone who actually listens.',
      datePublished: '2026-01-25'
    }
  ];

  const schemas: StructuredData[] = testimonialData.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'WebApplication',
      name: SEO_CONFIG.siteName,
    },
    author: {
      '@type': 'Person',
      name: testimonial.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
    },
    reviewBody: testimonial.reviewBody,
    datePublished: testimonial.datePublished,
  }));

  return <StructuredDataComponent data={schemas} />;
}
