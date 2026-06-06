import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '../data/brand';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8">
          <Link to="/tsmc" className="group transition-colors duration-200 hover:bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Stethoscope className="h-5 w-5 text-accent-400 mr-2 transition-colors duration-200 group-hover:text-accent-300" />
              <h3 className="text-base sm:text-lg font-semibold">{BRAND.tradeName}</h3>
            </div>
            <p className="text-sm text-accent-300/90">{BRAND.heroSubline}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-gray-200">{BRAND.tagline}</p>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-300 group-hover:text-gray-200">
              <li>• Diagnostic Equipment</li>
              <li>• Laboratory Instruments</li>
              <li>• Medical Devices</li>
              <li>• Healthcare Solutions</li>
            </ul>
          </Link>
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-2" />
              <div>
                <h4 className="text-sm font-medium text-white">Address</h4>
                <a 
                  href="https://maps.google.com/?q=TSMC+GF+KAVI+Building,+193+E.+Rodriguez+Jr.+Ave.+Bagumbayan+Libis,+Quezon+City+1110+Philippines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  TSMC GF KAVI Building,<br />
                  193 E. Rodriguez Jr. Ave.<br />
                  Bagumbayan Libis,<br />
                  Quezon City 1110 Philippines
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-gray-400 mt-1 mr-2" />
              <div>
                <h4 className="text-sm font-medium text-white">Phone</h4>
                <a 
                  href="tel:+6327906520" 
                  className="mt-1 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +63 2 7906 0520
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-gray-400 mt-1 mr-2" />
              <div>
                <h4 className="text-sm font-medium text-white">Email</h4>
                <a 
                  href="mailto:info@tsmc.ph" 
                  className="mt-1 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  info@tsmc.ph
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} {BRAND.legalName} All rights reserved.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link to="/tsmc" className="text-sm text-gray-400 hover:text-white transition-colors">Products</Link>
                <Link to="/news" className="text-sm text-gray-400 hover:text-white transition-colors">News</Link>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;