import { motion } from 'motion/react';
import { Check, X, ArrowRight } from 'lucide-react';

export function Comparison() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        CoffieCalm vs. Traditional Therapy
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Understanding the difference between peer support and professional therapy helps you choose the right support for your needs.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-x-auto mb-16"
                >
                    <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <thead>
                            <tr className="bg-gradient-to-r from-purple-50 to-sky-50">
                                <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
                                <th className="px-6 py-4 text-center text-purple-700 font-bold">CoffieCalm (Peer Support)</th>
                                <th className="px-6 py-4 text-center text-gray-700 font-bold">Traditional Therapy</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Cost</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 text-green-600" />
                                        <span className="text-gray-700">Free</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center text-gray-600">$100-300 per session</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Availability</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 text-green-600" />
                                        <span className="text-gray-700">24/7, Immediate</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center text-gray-600">Scheduled appointments</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Anonymity</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 text-green-600" />
                                        <span className="text-gray-700">Complete anonymity</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center text-gray-600">Personal information required</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Support Type</td>
                                <td className="px-6 py-4 text-center text-gray-700">Peer-to-peer emotional support</td>
                                <td className="px-6 py-4 text-center text-gray-700">Professional clinical treatment</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Clinical Records</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5 text-green-600" />
                                        <span className="text-gray-700">No records</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center text-gray-600">Medical records maintained</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                                <td className="px-6 py-4 text-center text-gray-700">Immediate support, ongoing conversations, peer connection</td>
                                <td className="px-6 py-4 text-center text-gray-700">Mental health diagnosis, treatment plans, clinical care</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* When to Use Each */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">When to Use CoffieCalm</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You need immediate emotional support right now</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You want to talk to someone who understands from experience</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You prefer anonymity and privacy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You're dealing with everyday stress, anxiety, or loneliness</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You want ongoing emotional conversations without appointments</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">When to Use Therapy</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You need a mental health diagnosis or treatment plan</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You're experiencing severe depression or anxiety</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You need professional clinical intervention</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You want evidence-based therapeutic techniques</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">You're dealing with trauma or complex mental health issues</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Key Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl p-8 border border-purple-200"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Bottom Line</h3>
                    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                        <strong>CoffieCalm is an alternative to therapy</strong> for those seeking peer support, not a replacement for professional mental health care. Many people use both—therapy for clinical treatment and CoffieCalm for ongoing emotional support between sessions. <strong>CoffieCalm is ideal when you need someone to talk to right now</strong>, without the formality, cost, or appointments of traditional therapy.
                    </p>
                    <div className="text-center">
                        <motion.a
                            href="https://app.coffiecalm.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            Try Peer Support Free
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* What CoffieCalm Is NOT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-red-50 rounded-2xl p-8 border border-red-200"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">What CoffieCalm Is NOT</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Not Professional Therapy</p>
                                <p className="text-gray-600 text-sm">CoffieCalm provides peer support, not clinical mental health treatment</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Not Crisis Services</p>
                                <p className="text-gray-600 text-sm">For emergencies, call 988 or go to your nearest emergency room</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Not Medical Advice</p>
                                <p className="text-gray-600 text-sm">Peer listeners offer emotional support, not professional medical guidance</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
