import { Heart, Instagram, Linkedin, Twitter } from 'lucide-react';
import img1 from './images/1.png';
import { trackNavigation, trackExternalLink } from '../seo/analytics';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-sky-600 rounded-xl flex items-center justify-center">
                <img src={img1} alt="CoffieCalm logo - mental wellness platform" className="w-9 h-9" />
              </div>
              <span className="text-xl text-white">CoffieCalm</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering people to take control of their mental wellness, one day at a time.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={() => trackNavigation('How It Works - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={() => trackNavigation('Features - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => trackNavigation('About Us - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={() => trackNavigation('FAQ - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://app.coffiecalm.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackExternalLink('https://app.coffiecalm.com')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => trackNavigation('Privacy Policy - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => trackNavigation('Terms of Service - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={() => trackNavigation('Contact Us - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
            <p>
              © {currentYear} CoffieCalm. All rights reserved.
            </p>
            <span className="hidden md:inline text-gray-600">•</span>
            <p className="text-sm">
              Last updated: January 2026
            </p>
          </div>

          <div className="flex gap-8">
            <a 
              href="#" 
              onClick={() => trackExternalLink('Twitter')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              onClick={() => trackExternalLink('Instagram')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              onClick={() => trackExternalLink('LinkedIn')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
