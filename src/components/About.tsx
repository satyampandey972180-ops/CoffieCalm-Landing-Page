import { motion } from 'motion/react';
import { Target, Users, Zap, Shield, Coffee } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-60"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-50 to-sky-50 border border-purple-100/50 rounded-full mb-10 shadow-sm">
                        <Coffee className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">Our Mission</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent tracking-tight">
                        What is CoffieCalm?
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-6">
                        <strong>CoffieCalm is a mental wellness platform</strong> designed for people seeking emotional support without the barriers of traditional therapy. We provide anonymous peer-to-peer conversations that help with anxiety, stress, loneliness, and everyday mental health challenges.
                    </p>

                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                        CoffieCalm serves as an accessible alternative to therapy for those who need immediate emotional support, prefer peer connection over clinical settings, or want ongoing mental wellness conversations without appointments or social media pressure. Our platform is used for anonymous emotional conversations where you can share freely, listen empathetically, and connect authentically—all in a judgment-free space designed specifically for mental wellness.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20">
                            <Zap className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">How CoffieCalm Works</h3>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                <strong>CoffieCalm provides peer-to-peer emotional support</strong> through anonymous conversations. You start by sharing a thought, question, or feeling. The system matches you with someone interested in listening or sharing similar experiences. You both talk without judgment or obligation.
                            </p>
                            <p>
                                If the interaction feels worthwhile, you can choose to continue as friends. If not, you disconnect and move on. Nothing follows you around and nothing builds a public history. <strong>CoffieCalm is used for authentic emotional connection</strong> without the noise of social media.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-500/20">
                            <Target className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">What Makes CoffieCalm Different</h3>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                <strong>Unlike traditional therapy</strong>, CoffieCalm offers peer support without appointments, clinical settings, or professional fees. <strong>Compared to social media</strong>, we focus on genuine connection without likes, followers, or public performance.
                            </p>
                            <p>
                                <strong>CoffieCalm is an alternative to therapy</strong> for those seeking immediate emotional support, ongoing peer connection, or a judgment-free space to process feelings. It's ideal when you need someone to talk to right now, without the formality or cost of professional counseling.
                            </p>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
