import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import empathyImg from '../assets/empathy-illustration.jpg';

export function UnderstandingCare() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Real empathy from real people
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sometimes you don't need a medical diagnosis; you just need to be heard. Our community is built on the simple power of human connection.
            </p>

            <motion.a
              href="https://app.coffiecalm.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
            >
              Meet the Community
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0"
          >
            <ImageWithFallback
              src={empathyImg}
              alt="Real empathy from real people"
              className="w-full h-auto max-h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}