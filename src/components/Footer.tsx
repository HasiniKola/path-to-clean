
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-foliage-light" />
              <span className="text-xl font-bold">SwachhPath</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building a cleaner community through citizen engagement.
              Report litter, join clean-up events, and earn rewards while
              making a positive environmental impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-foliage-light">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-foliage-light">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-foliage-light">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-foliage-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-foliage-light transition-colors">Report Litter</Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-300 hover:text-foliage-light transition-colors">Clean-Up Events</Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-300 hover:text-foliage-light transition-colors">Leaderboard</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-foliage-light transition-colors">Educational Resources</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-foliage-light" />
                <a href="mailto:contact@swachhpath.org" className="text-gray-300 hover:text-foliage-light transition-colors">
                  contact@swachhpath.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-foliage-light" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-foliage-light transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-foliage-light" />
                <span className="text-gray-300">
                  123 Green Street, Eco City
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SwachhPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
