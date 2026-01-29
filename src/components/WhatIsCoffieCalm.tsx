import { motion } from 'motion/react';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

export function WhatIsCoffieCalm() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Entity Definition */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-50 to-sky-50 border border-purple-100/50 rounded-full mb-6 shadow-sm">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">Understanding CoffieCalm</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            What is CoffieCalm?
                        </h2>
                        
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            <strong>CoffieCalm is a mental wellness platform that provides anonymous peer-to-peer emotional support.</strong> It connects people experiencing anxiety, stress, loneliness, or mental health challenges with empathetic listeners who understand—without therapy appointments, clinical records, or social media pressure. Available 24/7 for free.
                        </p>
                    </div>

                    {/* Semantic Relationships Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Is-A Relationship */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What We Are</h3>
                                    <p className="text-gray-600">
                                        CoffieCalm is a <strong>mental wellness platform</strong> and <strong>peer support community</strong> focused on emotional health and anonymous connection.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Provides Relationship */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-2xl border border-sky-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-6 h-6 text-sky-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What We Provide</h3>
                                    <p className="text-gray-600">
                                        CoffieCalm provides <strong>anonymous peer support</strong>, <strong>24/7 emotional conversations</strong>, and <strong>judgment-free listening</strong> for mental wellness.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Helps-With Relationship */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What We Help With</h3>
                                    <p className="text-gray-600">
                                        CoffieCalm helps with <strong>anxiety</strong>, <strong>stress</strong>, <strong>loneliness</strong>, <strong>depression</strong>, and everyday <strong>mental health challenges</strong> through peer connection.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Alternative-To Relationship */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Alternative To</h3>
                                    <p className="text-gray-600">
                                        CoffieCalm offers an <strong>accessible alternative to traditional therapy</strong> for those seeking immediate support, peer connection, or ongoing conversations without clinical settings.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Used-For Relationship */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-gradient-to-br from-purple-50 via-sky-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">What CoffieCalm is Used For</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                                <p className="text-gray-700">
                                    <strong>Anonymous emotional conversations</strong> without revealing your identity
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                                <p className="text-gray-700">
                                    <strong>Immediate support</strong> when you need someone to talk to right now
                                </p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                                <p className="text-gray-700">
                                    <strong>Ongoing mental wellness</strong> through regular peer connections
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Target Audience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Who is CoffieCalm For?</h3>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            CoffieCalm is designed for <strong>anyone seeking emotional support</strong>—whether you're dealing with anxiety, stress, loneliness, or just need someone to talk to. It's ideal for people who prefer <strong>peer connection over clinical therapy</strong>, value <strong>anonymity and privacy</strong>, or want <strong>support without social media pressure</strong>. If you've ever felt like you need to talk but don't know where to turn, CoffieCalm is for you.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
