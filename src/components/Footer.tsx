import { Instagram, Twitter } from 'lucide-react';
import img1 from './images/1.png';
import { trackNavigation, trackExternalLink } from '../seo/analytics';
import { SEO_CONFIG } from '../seo/config';

// Custom SVG icons for platforms not in Lucide
const RedditIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);


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
                  href="/privacy.html" 
                  onClick={() => trackNavigation('Privacy Policy - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms.html" 
                  onClick={() => trackNavigation('Terms of Service - Footer')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/contact.html" 
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
              href={SEO_CONFIG.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('Twitter')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Follow us on Twitter/X"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href={SEO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('Instagram')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={SEO_CONFIG.pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('Pinterest')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Follow us on Pinterest"
            >
              <PinterestIcon />
            </a>
            <a 
              href={SEO_CONFIG.redditUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('Reddit')}
              className="hover:text-purple-400 transition-colors" 
              aria-label="Join us on Reddit"
            >
              <RedditIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
