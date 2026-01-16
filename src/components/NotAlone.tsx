import { motion } from 'motion/react';
import { MessageCircle, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import safeSpaceImg from '../assets/safe-space-illustration.png';

export function NotAlone() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0"
          >
            <ImageWithFallback
              src={safeSpaceImg}
              alt="Anonymous chat with caring listeners"
              className="w-full h-auto max-h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-600 mb-3 tracking-wide">COMMUNITY SUPPORT</p>

            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              A Safe Space to Unload
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Life gets heavy sometimes. But you never have to carry it alone. Whether you're feeling lost, anxious, overwhelmed, or simply need a moment of calm, there is always someone here ready to listen.
            </p>



            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">No judgment, just listening</h3>
                  <p className="text-gray-600"></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Peers who get it</h3>
                  <p className="text-gray-600"></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Drop by anytime, 24/7</h3>
                  <p className="text-gray-600"></p>
                </div>
              </li>
            </ul>

            <motion.a
              href="https://app.coffiecalm.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
            >
              Start a Chat
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}