import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import quietCornerImg from '../assets/quiet-corner-illustration.jpg';

export function VirtualSessions() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 max-w-md mx-auto lg:mx-0"
          >
            <ImageWithFallback
              src={quietCornerImg}
              alt="People having meaningful conversation in quiet corner - peer support and emotional wellness"
              className="w-full h-auto max-h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              The Quiet Corner
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with an empathetic listener for a one-on-one conversation. No judgment, no advice-giving unless asked, just pure listening.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}