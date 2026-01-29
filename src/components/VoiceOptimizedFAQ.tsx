import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';

// Voice-optimized FAQs with natural, conversational language
// All sentences are complete and can stand alone
// Pronunciation-friendly terminology (acronyms explained)
// Natural flow when read aloud

const voiceFAQs = [
  {
    question: 'What is CoffieCalm?',
    answer: 'CoffieCalm is a mental wellness app. It connects you with people for anonymous emotional support. You can talk about anxiety, stress, or any mental health challenge. Everything is free and completely anonymous.'
  },
  {
    question: 'How does it work?',
    answer: 'First, you download the app. Then you create an anonymous profile. You don\'t need to use your real name. After that, you can join group conversations or talk one-on-one with a peer listener. It\'s available twenty-four seven.'
  },
  {
    question: 'Is it really anonymous?',
    answer: 'Yes, it\'s completely anonymous. You never have to share your real name, photo, or personal information. There are no social media profiles. Your conversations stay private. We don\'t create permanent records linked to your identity.'
  },
  {
    question: 'Is CoffieCalm free?',
    answer: 'Yes, CoffieCalm is one hundred percent free. There are no subscription fees. There are no hidden charges. You can use all the peer support features at no cost. We believe mental health support should be accessible to everyone.'
  },
  {
    question: 'Is this the same as therapy?',
    answer: 'No, CoffieCalm is not therapy. It\'s peer support. That means you talk with people who have experienced similar mental health challenges. They\'re not professional therapists. They\'re empathetic listeners who understand what you\'re going through. Many people use both therapy and peer support together.'
  },
  {
    question: 'When should I use CoffieCalm?',
    answer: 'Use CoffieCalm when you need someone to talk to right now. Use it when you\'re feeling anxious, stressed, or lonely. Use it between therapy sessions for ongoing support. Use it when you want to talk anonymously without judgment. Use it whenever you need emotional support.'
  },
  {
    question: 'Who can I talk to?',
    answer: 'You can talk to peer listeners. These are people who have lived experience with mental health challenges. They understand anxiety, depression, and stress. They listen without judgment. They provide emotional support based on their own experiences.'
  },
  {
    question: 'What can I talk about?',
    answer: 'You can talk about anything on your mind. Share your feelings about anxiety or stress. Discuss loneliness or depression. Talk about relationship problems or work stress. Share whatever you need to get off your chest. It\'s a judgment-free space.'
  },
  {
    question: 'Is my information safe?',
    answer: 'Yes, your information is safe. We use encryption to protect your conversations. We don\'t sell your data. We don\'t share your information with third parties. Your privacy is our top priority.'
  },
  {
    question: 'Can I use CoffieCalm on my phone?',
    answer: 'Yes, CoffieCalm works on both iPhone and Android phones. You can download it from the App Store or Google Play. You can also use it on the web at app dot coffiecalm dot com.'
  }
];

export function VoiceOptimizedFAQ() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-purple-100 rounded-full mb-6 shadow-sm">
                        <Volume2 className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">Voice-Friendly Answers</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        Quick Answers About CoffieCalm
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Clear, conversational answers to your most common questions
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {voiceFAQs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {faq.question}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Voice Optimization Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 border border-purple-100"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Volume2 className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Optimized for Voice Assistants
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These answers are written in natural, conversational language. They sound natural when read aloud by voice assistants like Siri, Alexa, or Google Assistant. Each sentence is complete and can stand alone. We avoid jargon and explain technical terms. This makes CoffieCalm easy to understand whether you're reading or listening.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
