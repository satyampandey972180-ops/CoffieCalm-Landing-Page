import { motion } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackCTAClick } from '../seo/analytics';

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-sky-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join over 100,000 people who are already taking control of their mental health. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={() => trackCTAClick('Start Free Trial', 'Mid-page CTA')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => trackCTAClick('Schedule a Demo', 'Mid-page CTA')}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-500 text-white rounded-full border-2 border-white/30 hover:bg-purple-400 transition-all"
              >
                Schedule a Demo
              </motion.button>
            </div>
            
            <div className="flex items-center gap-3 text-white/90">
              <Shield className="w-5 h-5" />
              <span>100% confidential • HIPAA compliant • Cancel anytime</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbmF0dXJlJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzY1NDA1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Peaceful nature scene"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}