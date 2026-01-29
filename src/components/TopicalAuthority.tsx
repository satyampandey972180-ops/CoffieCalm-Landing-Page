import { motion } from 'motion/react';
import { Brain, Heart, Shield, Users, Sparkles, MessageCircle } from 'lucide-react';

export function TopicalAuthority() {
    return (
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-sky-50">
            <div className="max-w-7xl mx-auto">
                {/* Core Topic 1: Peer Support (200+ words) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                Understanding Peer Support for Mental Health
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>Peer support</strong> is a form of emotional and social support provided by individuals who have lived experience with mental health challenges. Unlike professional therapy or clinical treatment, peer support relies on <strong>mutual understanding</strong>, <strong>shared experiences</strong>, and <strong>empathetic listening</strong> rather than clinical expertise. Research demonstrates that peer support significantly reduces feelings of isolation, improves coping strategies, and enhances overall mental wellness outcomes for people experiencing anxiety, depression, stress, and other emotional challenges.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 my-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional Validation</h3>
                                    <p className="text-gray-600">
                                        Peer support provides emotional validation through shared understanding. When someone with lived experience says "I understand what you're going through," it carries unique weight because they've faced similar mental health challenges. This validation reduces feelings of being alone or misunderstood.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Coping Strategies</h3>
                                    <p className="text-gray-600">
                                        Peers share practical coping strategies that worked for them during difficult times. These real-world strategies for managing anxiety, stress, or depression often feel more accessible than clinical advice because they come from someone who has successfully navigated similar challenges.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hope and Recovery</h3>
                                    <p className="text-gray-600">
                                        Seeing someone who has overcome or is managing similar mental health challenges provides hope. Peer support demonstrates that recovery and wellness are possible, offering inspiration and motivation during difficult periods of anxiety, depression, or emotional distress.
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The effectiveness of peer support stems from <strong>reciprocal relationships</strong> where both parties benefit. Providing support to others can be as therapeutic as receiving it, creating a positive cycle of mutual aid and emotional wellness. Studies show that peer support participants report improved self-esteem, reduced psychiatric symptoms, and better social functioning compared to those without peer support networks.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Core Topic 2: Anonymity in Mental Health (200+ words) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-20"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-sky-600" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                The Importance of Anonymity in Mental Health Support
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>Anonymity</strong> plays a crucial role in mental health support by removing barriers that prevent people from seeking help. <strong>Stigma</strong>, <strong>fear of judgment</strong>, and <strong>privacy concerns</strong> are among the top reasons people avoid discussing mental health challenges. Anonymous support platforms like CoffieCalm address these barriers by allowing individuals to share their experiences with anxiety, depression, stress, and emotional struggles without revealing their identity, creating a safe space for honest, vulnerable conversations about mental wellness.
                            </p>
                            
                            <div className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-2xl p-8 my-8 border border-sky-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Anonymous Mental Health Support</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Reduces Stigma and Shame</h4>
                                            <p className="text-gray-700">
                                                Anonymity eliminates the fear of being labeled or judged for mental health struggles. People feel more comfortable discussing anxiety, depression, suicidal thoughts, or trauma when their identity is protected, leading to more honest and productive conversations.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Protects Privacy and Confidentiality</h4>
                                            <p className="text-gray-700">
                                                Anonymous platforms don't create permanent records linked to your real identity. This is especially important for people concerned about how mental health disclosures might affect employment, relationships, insurance, or social standing.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Encourages Authentic Expression</h4>
                                            <p className="text-gray-700">
                                                Without the pressure of maintaining a public persona or social media image, people can express their true feelings about mental health challenges. Anonymity creates psychological safety for vulnerability and authentic emotional expression.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Research on anonymous mental health support shows that participants are more likely to disclose sensitive information, seek help earlier, and engage more deeply in conversations when anonymity is guaranteed. The combination of <strong>peer support</strong> and <strong>anonymity</strong> creates an optimal environment for mental wellness discussions, particularly for individuals who might otherwise avoid seeking help due to stigma or privacy concerns.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Core Topic 3: Mental Wellness (200+ words) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                                <Brain className="w-6 h-6 text-pink-600" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                Mental Wellness: A Holistic Approach to Emotional Health
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>Mental wellness</strong> is a holistic state of emotional, psychological, and social well-being that goes beyond the absence of mental illness. It encompasses how we think, feel, and act in daily life, how we handle stress and anxiety, how we relate to others, and how we make choices that support our emotional health. Mental wellness is not a fixed state but a dynamic process of maintaining balance, building resilience, and cultivating positive coping strategies for life's challenges including anxiety, depression, stress, loneliness, and emotional difficulties.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Heart className="w-6 h-6 text-purple-600" />
                                        <h3 className="text-xl font-bold text-gray-900">Emotional Regulation</h3>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        The ability to understand, manage, and express emotions in healthy ways. Emotional regulation helps manage anxiety, process stress, and respond to challenges without being overwhelmed.
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Key practices:</strong> Mindfulness, journaling, peer support conversations, breathing exercises, and emotional awareness techniques.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Users className="w-6 h-6 text-sky-600" />
                                        <h3 className="text-xl font-bold text-gray-900">Social Connection</h3>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        Meaningful relationships and social support networks are fundamental to mental wellness. Connection reduces loneliness, provides emotional validation, and creates a sense of belonging.
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Key practices:</strong> Peer support groups, regular check-ins with friends, community involvement, and authentic conversations about mental health.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Brain className="w-6 h-6 text-pink-600" />
                                        <h3 className="text-xl font-bold text-gray-900">Stress Management</h3>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        Developing healthy coping mechanisms for stress, anxiety, and life challenges. Effective stress management prevents burnout and supports long-term emotional resilience.
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Key practices:</strong> Regular exercise, adequate sleep, time management, setting boundaries, and seeking support when overwhelmed.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Sparkles className="w-6 h-6 text-indigo-600" />
                                        <h3 className="text-xl font-bold text-gray-900">Self-Awareness</h3>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        Understanding your thoughts, emotions, triggers, and patterns. Self-awareness enables you to recognize when you need support and make informed choices about your mental health.
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <strong>Key practices:</strong> Reflection, therapy or peer support, tracking mood patterns, and identifying personal triggers for anxiety or stress.
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Mental wellness requires ongoing attention and care, much like physical health. It involves recognizing when you're struggling with anxiety, depression, or stress, and taking proactive steps to address these challenges. This might include professional therapy for clinical issues, peer support for emotional connection, lifestyle changes for stress management, or a combination of approaches tailored to individual needs.
                            </p>
                            
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">How CoffieCalm Supports Mental Wellness</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    CoffieCalm contributes to mental wellness by providing <strong>accessible peer support</strong>, <strong>emotional validation</strong>, and <strong>social connection</strong> for people experiencing anxiety, stress, loneliness, or other mental health challenges. Through anonymous conversations with empathetic listeners, users can:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <span>Express emotions freely without judgment or stigma</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <span>Receive emotional validation from people with lived experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <span>Learn coping strategies from peers who understand mental health challenges</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <span>Build social connections that reduce isolation and loneliness</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <span>Access immediate support during moments of acute stress or anxiety</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
