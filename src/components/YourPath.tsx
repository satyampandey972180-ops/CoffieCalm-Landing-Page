import { motion } from 'motion/react';
import { UserPlus, Search, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Get the App',
    description: 'Download CoffieCalm and pick your pseudonym. No long forms, just meaningful connection.'
  },
  {
    icon: Search,
    title: 'Find Your Spot',
    description: 'Browse active Sharing Circles or request a listener in the Quiet Corner based on what you want to talk about.'
  },
  {
    icon: MessageSquare,
    title: 'Start Sharing',
    description: 'Pour your heart out, or just listen. There is no pressure to perform here.'
  }
];

export function YourPath() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Your Path to Calm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            It’s as easy as walking into a coffee shop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-sky-300"></div>
              )}

              <div className="relative inline-flex p-6 bg-gradient-to-br from-purple-100 to-sky-100 rounded-full mb-6">
                <step.icon className="w-10 h-10 text-purple-600" />
              </div>

              <h3 className="text-2xl mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}