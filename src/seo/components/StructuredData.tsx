import { Helmet } from 'react-helmet-async';
import { StructuredData } from '../types';
import { SEO_CONFIG } from '../config';
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
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.logo,
    description: 'CoffieCalm is a mental wellness platform providing anonymous peer-to-peer emotional support for people experiencing anxiety, stress, loneliness, and mental health challenges. We connect empathetic peer listeners with those seeking judgment-free emotional conversations.',
    sameAs: [
      SEO_CONFIG.twitterHandle,
      SEO_CONFIG.facebookUrl,
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
    url: SEO_CONFIG.siteUrl,
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
    url: SEO_CONFIG.siteUrl,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'CoffieCalm is a mental wellness platform that provides anonymous peer-to-peer emotional support for anxiety, stress, loneliness, and mental health challenges. Connect with empathetic peer listeners 24/7 for judgment-free conversations without appointments, fees, or social pressure.',
    about: {
      '@type': 'Thing',
      name: 'Peer Support Platform',
      description: 'Anonymous emotional support through peer-to-peer conversations'
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
      }
    ],
    featureList: [
      'Anonymous peer-to-peer emotional conversations with complete privacy',
      '24/7 availability - connect with peer listeners anytime without appointments',
      'Judgment-free support from empathetic listeners who understand mental health challenges',
      'Topic-based Sharing Circles for group peer support on anxiety, stress, and more',
      'One-on-one Quiet Corner conversations for private emotional support',
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
