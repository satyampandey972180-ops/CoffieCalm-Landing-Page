import { Helmet } from 'react-helmet-async';
import { StructuredData } from '../types';
import { SEO_CONFIG } from '../config';

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
    description: SEO_CONFIG.organizationDescription,
    sameAs: [
      SEO_CONFIG.twitterHandle,
      SEO_CONFIG.facebookUrl,
    ],
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
    description: SEO_CONFIG.defaultDescription,
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
    </>
  );
}

// FAQPage Schema
export function FAQPageSchema() {
  // Import FAQ data dynamically to avoid circular dependencies
  const faqData = [
    {
      question: 'What are Sharing Circles?',
      answer: 'Sharing Circles are small, topic-based group chats where you can discuss specific feelings or situations with people who relate. They are warm, moderated, and supportive.'
    },
    {
      question: 'Is it really anonymous?',
      answer: 'Yes. You choose a pseudonym (like "CoffeeLover99") and an avatar. We don\'t require your real name or photo to start chatting, so you can share without fear of judgment.'
    },
    {
      question: 'Are the listeners therapists?',
      answer: 'No, they are regular people like you who want to offer support. They are "peers" who practice active listening. CoffieCalm is for support, not clinical therapy.'
    },
    {
      question: 'Does it cost anything?',
      answer: 'CoffieCalm is free to join. You can participate in Sharing Circles and basic Quiet Corner chats at no cost. We may offer premium features in the future, but support should be accessible to everyone.'
    },
    {
      question: 'Can I leave a conversation anytime?',
      answer: 'Absolutely. We respect your boundaries. If a conversation doesn\'t feel right or you just need to go, you can leave without any pressure or explanation.'
    },
    {
      question: 'What if I need help in a crisis?',
      answer: 'If you\'re experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. CoffieCalm is a peer support platform, not a crisis service.'
    }
  ];

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
