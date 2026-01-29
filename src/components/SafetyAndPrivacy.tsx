import { motion } from 'motion/react';
import { Shield, Lock, Eye, UserX, AlertCircle, CheckCircle, FileText } from 'lucide-react';

export function SafetyAndPrivacy() {
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
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-purple-100 rounded-full mb-6 shadow-sm">
                        <Shield className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">Your Safety & Privacy</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        How We Protect Your Privacy and Safety
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transparency about our anonymity features, data practices, and safety measures
                    </p>
                </motion.div>

                {/* Anonymity Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Anonymity</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <UserX className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">No Real Names Required</h4>
                            <p className="text-gray-600 leading-relaxed">
                                You create a pseudonym when you sign up. You never have to provide your real name, email address, phone number, or any personally identifiable information. Your identity stays completely private.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md border border-sky-100">
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-sky-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">No Photos or Profiles</h4>
                            <p className="text-gray-600 leading-relaxed">
                                CoffieCalm has no social media-style profiles. You don't upload photos. You don't share personal details. There are no followers, likes, or public activity feeds. Your conversations stay between you and your peer listeners.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-100">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                                <Lock className="w-6 h-6 text-pink-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Encrypted Conversations</h4>
                            <p className="text-gray-600 leading-relaxed">
                                All conversations are encrypted to protect your privacy. Your messages are secure during transmission. We use industry-standard encryption protocols to ensure your emotional support conversations remain confidential.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Data Privacy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Privacy Protections</h3>
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-sky-50 rounded-2xl p-8 border border-purple-100">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">What We Collect</h4>
                                    <p className="text-gray-700">
                                        We collect minimal information: your chosen pseudonym, conversation timestamps (not content), and basic usage data to improve the platform. We do NOT collect your real name, email, phone number, location, or any personally identifiable information.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">What We Don't Collect</h4>
                                    <p className="text-gray-700">
                                        We do NOT collect or store: your real identity, personal contact information, conversation content (messages are ephemeral), browsing history outside CoffieCalm, social media connections, or any data that could identify you personally.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">How We Use Data</h4>
                                    <p className="text-gray-700">
                                        We use anonymous usage data to improve CoffieCalm's features and user experience. We NEVER sell your data to third parties. We NEVER share your information with advertisers. We NEVER use your conversations for marketing purposes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Data Retention</h4>
                                    <p className="text-gray-700">
                                        Conversation messages are ephemeral and not permanently stored. We retain minimal account data (pseudonym, timestamps) for platform functionality. You can delete your account at any time, which removes all associated data from our systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Safety Measures */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Safety Measures for Users</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-6 h-6 text-purple-600" />
                                <h4 className="text-lg font-bold text-gray-900">Community Guidelines</h4>
                            </div>
                            <p className="text-gray-600 mb-3">
                                CoffieCalm has clear community guidelines that prohibit harassment, hate speech, bullying, or harmful content. All users agree to treat each other with respect and empathy.
                            </p>
                            <p className="text-gray-600 text-sm">
                                <strong>Enforcement:</strong> Users can report violations. Our moderation team reviews reports and takes action including warnings or account suspension for guideline violations.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <AlertCircle className="w-6 h-6 text-sky-600" />
                                <h4 className="text-lg font-bold text-gray-900">Report and Block Features</h4>
                            </div>
                            <p className="text-gray-600 mb-3">
                                You can report inappropriate behavior or content at any time. You can block users who make you uncomfortable. These features help maintain a safe, supportive environment.
                            </p>
                            <p className="text-gray-600 text-sm">
                                <strong>Your control:</strong> You decide who you interact with. You can leave conversations anytime. You can block users permanently.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <FileText className="w-6 h-6 text-pink-600" />
                                <h4 className="text-lg font-bold text-gray-900">Moderation and Support</h4>
                            </div>
                            <p className="text-gray-600 mb-3">
                                Our moderation team monitors for harmful content and responds to user reports. We work to maintain a judgment-free, supportive environment for mental wellness conversations.
                            </p>
                            <p className="text-gray-600 text-sm">
                                <strong>Response time:</strong> We review reports within 24 hours and take appropriate action to protect user safety.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <Lock className="w-6 h-6 text-indigo-600" />
                                <h4 className="text-lg font-bold text-gray-900">Platform Security</h4>
                            </div>
                            <p className="text-gray-600 mb-3">
                                We use industry-standard security measures to protect CoffieCalm from unauthorized access, data breaches, and cyber threats. Our infrastructure is regularly updated and monitored.
                            </p>
                            <p className="text-gray-600 text-sm">
                                <strong>Security practices:</strong> Encrypted connections, secure servers, regular security audits, and prompt vulnerability patching.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Crisis Support Limitations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important: Crisis Support Limitations</h3>
                                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                    <strong>CoffieCalm is NOT a crisis intervention service.</strong> If you are experiencing a mental health emergency, suicidal thoughts, or immediate danger, please contact professional crisis services immediately.
                                </p>
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 space-y-3">
                                    <p className="text-gray-700">
                                        <strong>Crisis Resources:</strong>
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>National Suicide Prevention Lifeline:</strong> 988 (call or text)</li>
                                        <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                                        <li>• <strong>Emergency Services:</strong> Call 911 (US) or your local emergency number</li>
                                        <li>• <strong>International Crisis Lines:</strong> Visit findahelpline.com</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 mt-4">
                                    CoffieCalm provides peer emotional support for everyday mental health challenges like anxiety, stress, and loneliness. For clinical treatment, diagnosis, or crisis intervention, please seek professional mental health services.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Platform Security Transparency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platform Security Transparency</h3>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">How CoffieCalm Works</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    CoffieCalm is a peer-to-peer mental wellness platform. You connect with other users who volunteer as peer listeners. These are not professional therapists or counselors—they are people with lived experience of mental health challenges who offer empathetic, judgment-free emotional support.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">What CoffieCalm Is</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Anonymous peer-to-peer emotional support platform</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Safe space for discussing anxiety, stress, and mental health challenges</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Complement to professional mental health care</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Free, accessible mental wellness resource</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">What CoffieCalm Is NOT</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <span>NOT professional therapy or clinical treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <span>NOT a crisis intervention or emergency service</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <span>NOT a substitute for professional mental health diagnosis or treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <span>NOT staffed by licensed therapists or medical professionals</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Our Commitment:</strong> We are transparent about what CoffieCalm offers and its limitations. We encourage users to seek professional help when needed and to use CoffieCalm as a complement to, not a replacement for, professional mental health care.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
