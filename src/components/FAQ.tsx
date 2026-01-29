import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What are Sharing Circles?',
    answer: 'Sharing Circles are small, topic-based group chats where you can discuss specific feelings or situations with people who relate. They provide a warm, moderated, and supportive environment for peer-to-peer emotional support. Each circle focuses on a particular theme like anxiety, stress, or daily challenges, allowing you to connect with others experiencing similar situations in a judgment-free space.'
  },
  {
    question: 'Is CoffieCalm really anonymous?',
    answer: 'Yes, CoffieCalm is completely anonymous. You choose a pseudonym (like "CoffeeLover99") and an avatar without providing your real name, photo, or personal information. Your conversations remain private, and you can share freely without fear of judgment or your identity being revealed. CoffieCalm is designed specifically for anonymous emotional support where your privacy is protected.'
  },
  {
    question: 'Are the listeners professional therapists?',
    answer: 'No, CoffieCalm listeners are not professional therapists—they are regular people like you who want to offer peer support. They practice active listening and provide empathetic emotional support based on shared human experiences. CoffieCalm provides peer-to-peer support, not clinical therapy. If you need professional mental health treatment, we recommend consulting a licensed therapist or counselor.'
  },
  {
    question: 'How much does CoffieCalm cost?',
    answer: 'CoffieCalm is free to join and use. You can participate in Sharing Circles and Quiet Corner chats at no cost because we believe emotional support should be accessible to everyone. While we may offer premium features in the future, the core peer support experience will always remain free. There are no hidden fees, subscriptions, or charges for basic emotional support conversations.'
  },
  {
    question: 'Can I leave a conversation anytime?',
    answer: 'Absolutely. CoffieCalm respects your boundaries and autonomy. If a conversation doesn\'t feel right, you need to go, or you simply want to end the chat, you can leave at any time without pressure or explanation. Your comfort and safety are priorities, and you have complete control over your participation in any conversation or Sharing Circle.'
  },
  {
    question: 'What if I need help in a mental health crisis?',
    answer: 'If you\'re experiencing a mental health emergency or crisis, please call 988 (Suicide & Crisis Lifeline) immediately or go to your nearest emergency room. CoffieCalm provides peer support for everyday emotional challenges, not crisis intervention services. We are not equipped to handle emergencies. For urgent mental health needs, always contact professional crisis services or emergency medical care.'
  },
  {
    question: 'How is CoffieCalm different from therapy?',
    answer: 'CoffieCalm provides peer-to-peer emotional support, while therapy offers professional clinical treatment. Unlike therapy, CoffieCalm has no appointments, no clinical records, no fees, and no formal treatment plans. CoffieCalm is ideal for immediate emotional support, ongoing peer connection, and judgment-free conversations. It serves as an accessible alternative to therapy for those seeking peer support rather than professional counseling.'
  },
  {
    question: 'When should I use CoffieCalm?',
    answer: 'Use CoffieCalm when you need someone to talk to about anxiety, stress, loneliness, or everyday mental health challenges. It\'s ideal when you want immediate emotional support without appointments, prefer peer connection over clinical settings, or need a judgment-free space to process your feelings. CoffieCalm is perfect for those moments when you just need someone who understands—available 24/7 whenever you need support.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting started
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.01, boxShadow: '0 10px 40px rgba(147, 51, 234, 0.1)' }}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </motion.div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}