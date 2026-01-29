import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Apple, Play, X, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { trackCTAClick, trackDownload } from '../seo/analytics';

export function Hero() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 lg:px-8">
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700">Welcome to your calm corner</span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              Anonymous Peer Support & Mental Wellness Platform
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CoffieCalm is your emotional support platform for peer-to-peer connection. No therapists, no influencers, just people sharing and listening in a warm, judgment-free space for mental health support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://app.coffiecalm.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('Join the Café', 'Hero')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Join the Café
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#HowItWorks"
                whileHover={{ scale: 1.05, borderColor: 'rgb(147 51 234)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-purple-300 transition-all cursor-pointer flex items-center justify-center"
              >
                How it Works
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={() => {
                  trackDownload('App Store');
                  setShowDownloadModal(true);
                }}
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-md transition-all cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: '#000', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm">App Store</div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => {
                  trackDownload('Google Play');
                  setShowDownloadModal(true);
                }}
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-md transition-all cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: '#000', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </motion.button>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-600">Active Listeners</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">No ads</div>
                <div className="text-gray-600">Pure Connection</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-600">Supportive</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjUzMjcwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person meditating peacefully in calm environment - mental wellness and mindfulness"
                className="w-full h-auto max-h-96 object-cover"
                lazy={false}
                width={1080}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-sky-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900">Daily Streak</div>
                  <div className="text-2xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">7 Days 🎉</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showDownloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDownloadModal(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl p-6 w-[260px] shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button
                  onClick={() => setShowDownloadModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
                  Coming Soon to Stores!
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  We are finalizing our store listings. In the meantime, you can download the request early access APK directly.
                </p>

                <button
                  onClick={() => alert('Download started!')}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download APK Directly
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}