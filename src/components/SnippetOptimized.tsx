import { motion } from 'motion/react';
import { CheckCircle, XCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';

export function SnippetOptimized() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* What is Peer Support - Definition Snippet (40-60 words) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        What is Peer Support for Mental Health?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
                        Peer support for mental health is emotional support provided by people with lived experience of mental health challenges. Unlike professional therapy, peer support offers understanding, validation, and connection from someone who has faced similar struggles with anxiety, depression, or stress.
                    </p>
                </motion.div>

                {/* Best Features List Snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Best Features of CoffieCalm
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-6 h-6 text-purple-600" />
                                <h3 className="font-bold text-gray-900">Complete Anonymity</h3>
                            </div>
                            <p className="text-gray-600">No real names, photos, or personal information required</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl border border-sky-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="w-6 h-6 text-sky-600" />
                                <h3 className="font-bold text-gray-900">24/7 Availability</h3>
                            </div>
                            <p className="text-gray-600">Access emotional support anytime without appointments</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border border-pink-100">
                            <div className="flex items-center gap-3 mb-3">
                                <DollarSign className="w-6 h-6 text-pink-600" />
                                <h3 className="font-bold text-gray-900">100% Free</h3>
                            </div>
                            <p className="text-gray-600">No subscription fees or hidden charges for peer support</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Users className="w-6 h-6 text-indigo-600" />
                                <h3 className="font-bold text-gray-900">Peer-to-Peer Connection</h3>
                            </div>
                            <p className="text-gray-600">Talk with people who understand your experiences</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                                <h3 className="font-bold text-gray-900">No Social Pressure</h3>
                            </div>
                            <p className="text-gray-600">No likes, followers, or performative social media</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl border border-sky-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-6 h-6 text-sky-600" />
                                <h3 className="font-bold text-gray-900">Judgment-Free Space</h3>
                            </div>
                            <p className="text-gray-600">Share openly without fear of criticism or judgment</p>
                        </div>
                    </div>
                </motion.div>

                {/* When to Use - Process Snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        When to Use CoffieCalm
                    </h2>
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 border border-purple-100">
                        <ol className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">When You Need Immediate Support</h3>
                                    <p className="text-gray-600">You're feeling anxious, stressed, or overwhelmed and need someone to talk to right now</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Between Therapy Sessions</h3>
                                    <p className="text-gray-600">You're in therapy but need ongoing emotional support between appointments</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">When Therapy Isn't Accessible</h3>
                                    <p className="text-gray-600">Cost, scheduling, or availability makes professional therapy difficult to access</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">For Anonymous Conversations</h3>
                                    <p className="text-gray-600">You want to discuss your feelings without revealing your identity or creating records</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    5
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">For Ongoing Mental Wellness</h3>
                                    <p className="text-gray-600">You want regular emotional check-ins and peer connection to maintain mental health</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </motion.div>

                {/* Comparison Table Snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Peer Support vs Professional Therapy
                    </h2>
                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-sky-600 text-white">
                                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                                    <th className="px-6 py-4 text-left font-bold">CoffieCalm (Peer Support)</th>
                                    <th className="px-6 py-4 text-left font-bold">Professional Therapy</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-purple-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">Cost</td>
                                    <td className="px-6 py-4 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span>Free</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">$100-300 per session</td>
                                </tr>
                                <tr className="hover:bg-sky-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">Availability</td>
                                    <td className="px-6 py-4 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span>24/7 immediate access</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">Scheduled appointments</td>
                                </tr>
                                <tr className="hover:bg-purple-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">Anonymity</td>
                                    <td className="px-6 py-4 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span>Complete anonymity</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">Personal information required</td>
                                </tr>
                                <tr className="hover:bg-sky-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">Support Type</td>
                                    <td className="px-6 py-4 text-gray-700">Peer emotional support</td>
                                    <td className="px-6 py-4 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span>Professional clinical treatment</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-purple-50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                                    <td className="px-6 py-4 text-gray-700">Immediate support, ongoing conversations, peer connection</td>
                                    <td className="px-6 py-4 text-gray-700">Clinical diagnosis, treatment plans, severe mental illness</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* How to Get Started - Process Snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                        How to Get Started with CoffieCalm
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 border border-purple-100">
                            <ol className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Download CoffieCalm</h3>
                                        <p className="text-gray-600">Get the free app from the App Store or Google Play, or visit app.coffiecalm.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Create Anonymous Profile</h3>
                                        <p className="text-gray-600">Choose a pseudonym and set up your profile without providing personal information</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Space</h3>
                                        <p className="text-gray-600">Join a Sharing Circle for group support or find a Quiet Corner for one-on-one conversations</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Start Connecting</h3>
                                        <p className="text-gray-600">Share your feelings, listen to others, and receive judgment-free emotional support</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
