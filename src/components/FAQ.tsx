import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
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