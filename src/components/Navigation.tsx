import { Menu, Heart, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import img1 from './images/1.png';







export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled
      ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg'
      : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
            {/* <Heart className="w-6 h-6 text-white" /> */}
            <img src={img1} alt='img' className="w-8 h-8" />
          </div>
          <span className="text-2xl bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">CoffieCalm</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          <a href="#HowItWorks" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-sky-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-sky-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-sky-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-sky-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">

          <motion.a
            href="https://app.coffiecalm.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 51, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 pb-4 border-t border-gray-200"
        >
          <div className="flex flex-col gap-4 pt-4">

            <a href="#experience" className="text-gray-700 hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>

            <a
              href="https://app.coffiecalm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full shadow-md inline-block text-center"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}