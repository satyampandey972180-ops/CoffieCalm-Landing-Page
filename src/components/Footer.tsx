import { Heart, Instagram, Linkedin, Twitter } from 'lucide-react';
import img1 from './images/1.png';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-sky-600 rounded-xl flex items-center justify-center">
              {/* <Heart className="w-6 h-6 text-white" /> */}
              <img src={img1} alt='img' className="w-9 h-9" />
            </div>
            <span className="text-xl text-white">CoffieCalm</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Empowering people to take control of their mental wellness, one day at a time.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} CoffieCalm. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
