import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              <h2 className="text-2xl text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At CoffieCalm, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mental wellness platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pseudonym and avatar (no real names required)</li>
                <li>Usage data and interaction patterns</li>
                <li>Device information and IP address</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Match you with appropriate peer support conversations</li>
                <li>Ensure platform safety and prevent abuse</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Communicate with you about updates and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of certain data collection practices</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:privacy@coffiecalm.com" className="text-purple-600 hover:text-purple-700">
                  privacy@coffiecalm.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
