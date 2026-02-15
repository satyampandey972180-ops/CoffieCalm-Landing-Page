import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function TermsAndConditions() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-sky-500 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-gray-600">
            Effective Date: 10 February 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By using the CoffeeCalm application, you agree to these Terms. If you do not agree, stop using the app immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                CoffeeCalm provides messaging, mood tracking, and mental wellness tools. It is not a medical or emergency service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>You must provide accurate information</li>
                <li>You are responsible for account security</li>
                <li>You must not share login details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">4. User Conduct</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Harass or abuse other users</li>
                <li>Post illegal content</li>
                <li>Use the app for harmful purposes</li>
                <li>Attempt to hack or misuse the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">5. Messaging and Content</h2>
              <p className="text-gray-600 leading-relaxed">
                Users are fully responsible for their own messages and interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">6. Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Use of the app is also governed by our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not guarantee uninterrupted access to the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                CoffeeCalm is provided "as is" without guarantees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">9. SUICIDE AND CRISIS DISCLAIMER</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-4">
                <p className="text-red-900 font-semibold mb-4">
                  IMPORTANT NOTICE:
                </p>
                <p className="text-red-800 leading-relaxed mb-4">
                  CoffeeCalm is NOT a medical service, emergency service, or suicide prevention platform.
                </p>
                <p className="text-red-800 leading-relaxed mb-4">
                  By using this app, you agree and understand that:
                </p>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>The app does NOT provide professional medical or psychological treatment</li>
                  <li>User messages and mood logs are NOT actively monitored</li>
                  <li>No real-time crisis support is provided</li>
                  <li>The app cannot detect or prevent self-harm</li>
                </ul>
              </div>

              <h3 className="text-xl text-gray-900 mb-4 mt-6">Emergency Situations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are experiencing:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Suicidal thoughts</li>
                <li>Self-harm intentions</li>
                <li>Severe emotional distress</li>
                <li>Immediate mental health crisis</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must seek immediate professional help.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="text-blue-900 font-semibold mb-2">
                  For users in India:
                </p>
                <p className="text-blue-800 leading-relaxed">
                  Kiran Mental Health Helpline: <strong className="text-blue-900">1800-599-0019</strong>
                  <br />
                  Emergency Number: <strong className="text-blue-900">112</strong>
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                CoffeeCalm is not responsible for any harm, self-injury, or emotional consequences resulting from app usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">10. Account Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may suspend accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Terms may be updated at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                Email:{' '}
                <a href="mailto:support@coffiecalm.com" className="text-purple-600 hover:text-purple-700">
                  support@coffiecalm.com
                </a>
                <br />
                Website:{' '}
                <a href="https://www.coffiecalm.com" className="text-purple-600 hover:text-purple-700">
                  www.coffiecalm.com
                </a>
              </p>
            </section>

            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                © 2026 CoffeeCalm. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
