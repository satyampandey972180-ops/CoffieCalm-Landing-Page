import { motion } from 'motion/react';
import { Users, MessageCircle, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '24/7',
    label: 'Listeners Online',
    description: 'Here whenever you need us'
  },
  {
    icon: MessageCircle,
    value: 'Daily',
    label: 'Sharing Circles',
    description: 'New topics every day'
  },
  {
    icon: Award,
    value: '100%',
    label: 'Human Connection',
    description: 'No bots, no algorithms'
  },
  {
    icon: Heart,
    value: 'Zero',
    label: 'Judgment',
    description: 'Warmth & safety first'
  }
];

export function Stats() {
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
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">A Community That Cares</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a growing community of people who believe in the power of listening and shared experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl mb-4 group-hover:from-purple-200 group-hover:to-sky-200 transition-all duration-300 shadow-md group-hover:shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </motion.div>
              <motion.div
                className="text-4xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xl text-gray-900 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}