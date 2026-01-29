import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Shield } from 'lucide-react';

export function WhyPeerSupport() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Why Peer Support Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Research shows that peer-to-peer emotional support provides significant mental wellness benefits through shared experience and mutual understanding.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reduces Isolation</h3>
                        <p className="text-gray-600">
                            Peer support reduces feelings of loneliness and isolation by connecting you with others who understand your experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100"
                    >
                        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Builds Connection</h3>
                        <p className="text-gray-600">
                            Shared experiences create authentic connections that help you feel understood and less alone in your mental health journey.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100"
                    >
                        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Improves Coping</h3>
                        <p className="text-gray-600">
                            Learning from peers who have faced similar challenges provides practical coping strategies and emotional validation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100"
                    >
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Accessible Support</h3>
                        <p className="text-gray-600">
                            Available 24/7 without appointments or fees, peer support provides immediate emotional help when you need it most.
                        </p>
                    </motion.div>
                </div>

                {/* Evidence-Based Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 lg:p-12 border border-purple-100"
                >
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                        The Science Behind Peer Support
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Shared Experience Matters</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Studies show that people with lived experience of mental health challenges can provide unique emotional support that complements professional care. Peer support helps with anxiety, depression, and stress by offering understanding from someone who "gets it."
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Reduces Stigma</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Anonymous peer support creates a judgment-free environment where you can discuss mental health openly. This reduces stigma and encourages honest conversations about anxiety, stress, and emotional challenges without fear of judgment.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Complements Professional Care</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Research indicates that peer support works best alongside professional mental health care. Many people use CoffieCalm for ongoing emotional support between therapy sessions, providing continuous mental wellness support.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Immediate Availability</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Unlike therapy appointments that may take weeks to schedule, peer support through CoffieCalm is available immediately, 24/7. This instant access helps during moments of acute stress, anxiety, or when you simply need someone to talk to right now.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 italic">
                            CoffieCalm provides evidence-informed peer support designed to complement professional mental health care, not replace it.
                        </p>
                    </div>
                </motion.div>

                {/* User Needs & Pain Points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Common Challenges CoffieCalm Addresses
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Feeling Alone</h4>
                            <p className="text-gray-600">
                                You feel isolated in your struggles and need someone who understands what you're going through without judgment.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Immediate Support Needed</h4>
                            <p className="text-gray-600">
                                You need emotional support right now, but therapy appointments are weeks away or unavailable at this moment.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Therapy Barriers</h4>
                            <p className="text-gray-600">
                                Cost, scheduling, or discomfort with clinical settings prevents you from accessing traditional therapy.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Privacy Concerns</h4>
                            <p className="text-gray-600">
                                You want to talk about your feelings without revealing your identity or creating a permanent record.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Social Media Fatigue</h4>
                            <p className="text-gray-600">
                                You're tired of performative social media and want genuine emotional connection without likes or followers.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Ongoing Support</h4>
                            <p className="text-gray-600">
                                You need regular emotional check-ins and conversations to maintain mental wellness, not just crisis intervention.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
