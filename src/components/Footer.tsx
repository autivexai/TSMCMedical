import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '../data/brand';
import { CONTACT } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Sitemap columns ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700">

          {/* Brand column */}
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-5 w-5 text-indigo-400 mr-2" aria-hidden="true" />
              <span className="text-base font-semibold">{BRAND.tradeName}</span>
            </div>
            <p className="text-sm text-indigo-300/90 mb-2">{BRAND.heroSubline}</p>
            <p className="text-sm text-gray-300">{BRAND.tagline}</p>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-300 hover:text-white transition-colors">
                  News &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tsmc" className="text-sm text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/tsmc?category=Diagnostics" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/tsmc?category=Laboratory" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Laboratory
                </Link>
              </li>
              <li>
                <Link to="/tsmc?category=Medical%20Devices" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Medical Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <a
                  href={CONTACT.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors leading-snug"
                >
                  {CONTACT.address.lines.map((line, i) => (
                    <React.Fragment key={i}>{line}{i < CONTACT.address.lines.length - 1 && <br />}</React.Fragment>
                  ))}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <a href={CONTACT.phone.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <a href={CONTACT.email.href} className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                  {CONTACT.email.display}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-block mt-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Get a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; {currentYear} {BRAND.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={() => {
                throw new Error('This is your first error!');
              }}
              className="text-sm text-red-400 hover:text-red-300 transition-colors"
            >
              Break the world
            </button>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;