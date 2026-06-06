import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/brand';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`flex-shrink-0 flex items-center relative group ${
                location.pathname === '/' ? 'active-tab' : ''
              }`}
              aria-label="Home"
            >
              <img
                src={BRAND.logoUrl}
                alt={`${BRAND.tradeName} logo`}
                className="h-8 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
                width={32}
                height={32}
              />
              {location.pathname === '/' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-100 transition-transform origin-left" />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {[
              { path: '/about', label: 'About Us' },
              { path: '/tsmc', label: 'Products' },
              { path: '/news', label: 'News' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                  isActive(path)
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="relative z-10">{label}</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform transition-transform duration-300 origin-left ${
                    isActive(path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
                {isActive(path) && (
                  <div className="absolute inset-0 bg-indigo-50 rounded-md -z-10 animate-fade-in" />
                )}
              </Link>
            ))}
            
            {/* Contact Us Link */}
            <Link
              to="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                location.pathname === '/contact' ? 'bg-indigo-700' : ''
              }`}
            >
              <MessageSquare className="hidden sm:inline-block h-4 w-4 mr-1" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-y-0 right-0 transform w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pt-20 pb-3 space-y-1 px-4">
          {[
            { path: '/about', label: 'About Us' },
            { path: '/tsmc', label: 'Products' },
            { path: '/news', label: 'News' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                isActive(path)
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          {/* Mobile Contact Us Link */}
          <Link
            to="/contact"
            className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
              location.pathname === '/contact'
                ? 'text-white bg-indigo-600'
                : 'text-white bg-indigo-500 hover:bg-indigo-600'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;