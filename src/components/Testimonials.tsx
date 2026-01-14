import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'QuietReader',
    role: 'Community Member',
    content: 'I always felt too anxious for therapy. Here, I can just sit in a Sharing Circle, listen, and talk when I\'m ready. It feels like a warm hug.',
    rating: 5
  },
  {
    name: 'NightOwl_88',
    role: 'Active Listener',
    content: 'Being a Listener has given me so much perspective. It feels good to just be there for someone, without needing to "fix" their problems.',
    rating: 5
  },
  {
    name: 'TeaTime',
    role: 'Sharer',
    content: 'The Quiet Corner is wonderful. No social pressure, no likes, just a real conversation with someone who actually listens.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">First Impressions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our early community members are saying about finding their calm.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(147, 51, 234, 0.12)' }}
              className="bg-gradient-to-br from-purple-50 to-sky-50 p-8 rounded-2xl relative border border-purple-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + (i * 0.05) }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}