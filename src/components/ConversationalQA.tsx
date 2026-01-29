import { motion } from 'motion/react';
import { MessageCircle, HelpCircle } from 'lucide-react';

const conversationalQueries = [
  {
    question: 'What is the best app for anonymous mental health support?',
    answer: 'CoffieCalm is a leading anonymous mental health support app that provides peer-to-peer emotional conversations without revealing your identity. Unlike other apps, CoffieCalm focuses exclusively on judgment-free peer support with no social media features, no public profiles, and complete anonymity. It\'s ideal for anyone seeking immediate emotional support from empathetic listeners who understand mental health challenges like anxiety, stress, and loneliness.'
  },
  {
    question: 'How can I talk to someone about anxiety anonymously?',
    answer: 'You can talk to someone about anxiety anonymously through CoffieCalm by downloading the app, creating an anonymous profile with a pseudonym, and joining a Sharing Circle focused on anxiety or connecting with a peer listener in a Quiet Corner. Your conversations are completely private, and you never have to reveal your real name, photo, or personal information. CoffieCalm provides 24/7 access to empathetic peer listeners who understand anxiety and can offer emotional support without judgment.'
  },
  {
    question: 'Where can I find peer support without judgment?',
    answer: 'CoffieCalm provides judgment-free peer support through anonymous Sharing Circles and one-on-one Quiet Corner conversations. You can find supportive peers who listen without criticism, advice-giving, or judgment—just genuine emotional support and understanding. The platform is specifically designed to create a safe, warm space where you can share your feelings openly without fear of being judged, criticized, or misunderstood.'
  },
  {
    question: 'Why should I use peer support instead of therapy?',
    answer: 'Peer support through CoffieCalm is ideal when you need immediate emotional support without appointments, prefer talking to someone with lived experience rather than a clinical professional, or want ongoing conversations without the cost and formality of therapy. While therapy provides professional treatment for mental health conditions, peer support offers accessible, relatable connection for everyday emotional challenges. Many people use both—therapy for clinical treatment and peer support for ongoing emotional wellness and immediate support between therapy sessions.'
  },
  {
    question: 'Is CoffieCalm free to use?',
    answer: 'Yes, CoffieCalm is completely free to use. You can join Sharing Circles, connect with peer listeners in Quiet Corners, and access anonymous emotional support at no cost. We believe mental wellness support should be accessible to everyone, so there are no subscription fees, hidden charges, or paywalls for basic peer support features. While we may offer premium features in the future, the core emotional support experience will always remain free.'
  },
  {
    question: 'How does anonymous peer support work?',
    answer: 'Anonymous peer support on CoffieCalm works by connecting you with empathetic listeners who have experienced similar mental health challenges. You create an anonymous profile with a pseudonym (no real name required), then either join topic-based Sharing Circles or request a one-on-one Quiet Corner conversation. You share your thoughts and feelings freely while maintaining complete anonymity. Peer listeners provide emotional support, understanding, and validation based on their own lived experiences—not professional advice or therapy.'
  }
];

export function ConversationalQA() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-purple-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-full mb-6 shadow-sm">
                        <HelpCircle className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">Common Questions</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        Your Questions About Anonymous Support
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about getting emotional support through CoffieCalm
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-6">
                    {conversationalQueries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight pt-1">
                                        {item.question}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-14">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 border border-purple-100 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            CoffieCalm provides anonymous peer support for anxiety, stress, loneliness, and everyday mental health challenges. Our platform connects you with empathetic listeners 24/7—no appointments, no fees, no judgment.
                        </p>
                        <motion.a
                            href="https://app.coffiecalm.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            Try CoffieCalm Free
                            <MessageCircle className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
