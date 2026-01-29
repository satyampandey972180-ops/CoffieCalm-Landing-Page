import { motion } from 'motion/react';
import { Apple, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { DownloadModal } from './DownloadModal';
import { trackCTAClick, trackDownload } from '../seo/analytics';

export function FinalCTA() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-sky-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Your Seat at the Table is Ready.
          </h2>

          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            Join CoffieCalm today. Share, listen, and breathe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="https://app.coffiecalm.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('Get started for free', 'Final CTA')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Get started for free
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                trackDownload('App Store');
                setShowDownloadModal(true);
              }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-white shadow-md cursor-pointer"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-purple-200">Download on the</div>
                <div className="text-sm">App Store</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => {
                trackDownload('Google Play');
                setShowDownloadModal(true);
              }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-white shadow-md cursor-pointer"
            >
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-purple-200">Get it on</div>
                <div className="text-sm">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
    </section>
  );
}