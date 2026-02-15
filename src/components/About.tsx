import { motion } from 'motion/react';

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
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">About CoffieCalm (Coffie Calm)</h2>
                    <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            <strong>CoffieCalm</strong> - also known as <strong>Coffie Calm</strong> or <strong>Coffee Calm</strong> - is an anonymous random chat online platform dedicated to mental wellness and peer support.
                        </p>
                        <p>
                            We provide free random chat connections for emotional support, combining the immediacy of random chat with the safety of a mental health-focused community. Unlike typical random chat websites, CoffieCalm creates a judgment-free space specifically designed for meaningful emotional conversations.
                        </p>
                        <p>
                            Our platform brings together the instant connection of random chat online with the empathy and understanding of peer mental wellness support. Whether you're dealing with anxiety, stress, developer burnout, or just need someone to talk to, CoffieCalm (Coffie Calm) is here for you 24/7.
                        </p>
                        <p>
                            Through our random chat feature and topic-based Sharing Circles, we connect people seeking emotional support with empathetic peer listeners who understand mental health challenges. Our mission is to make mental wellness support accessible, immediate, and judgment-free for everyone.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
