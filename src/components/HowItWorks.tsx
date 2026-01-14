import { motion } from 'motion/react';
import { CheckCircle2, Download, UserPlus, Zap } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description: 'Get started in seconds with our free mobile app available on iOS and Android.'
  },
  {
    icon: UserPlus,
    title: 'Pick Your Role',
    description: 'Choose to be a Listener effectively or a Sharer. You can switch anytime.'
  },
  {
    icon: Zap,
    title: 'Join a Table',
    description: 'Enter a Sharing Circle or find a Quiet Corner for privacy. It’s like pulling up a chair at a café.'
  },
  {
    icon: CheckCircle2,
    title: 'Start Talking',
    description: 'Share your thoughts, listen to others, and feel the weight lift off your shoulders.'
  }
];

export function HowItWorks() {
  return (
    <section id="HowItWorks" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your mental wellness journey in just a few simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-sky-300 -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-center">
                  <div className="text-sm bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
