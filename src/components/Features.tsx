import { motion } from 'motion/react';
import { Shield, MessageCircle, Heart, Moon, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Anonymous & Safe',
    description: 'Express yourself freely with pseudonymous profiles. Your privacy creates a space for honesty.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageCircle,
    title: 'Sharing Circles',
    description: 'Join small, intimate group chats centered around specific topics or feelings.',
    color: 'from-sky-500 to-sky-600'
  },
  {
    icon: Heart,
    title: 'Listener Role',
    description: 'Empathetic peers who are here to simple listen and support you.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Moon,
    title: 'Calm Pace',
    description: 'No likes, no followers, no rush. A chat environment designed for depth, not dopamine.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Users,
    title: 'No Social Pressure',
    description: 'Avoid the noise of social media. Connect without performance anxiety.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: TrendingUp,
    title: 'Queue System',
    description: 'Fair and accessible connection to listeners when you need them most.',
    color: 'from-orange-500 to-orange-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">Mental Wellness Community Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Anonymous listening and peer support features designed for judgment-free emotional wellness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(147, 51, 234, 0.15)' }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}