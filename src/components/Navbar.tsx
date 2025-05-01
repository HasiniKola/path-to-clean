
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foliage-dark">
            <MapPin className="h-6 w-6 text-foliage-medium" />
            <span>SwachhPath</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="font-medium text-gray-700 hover:text-foliage-medium transition-colors">Home</Link>
          <Link to="/report" className="font-medium text-gray-700 hover:text-foliage-medium transition-colors">Report</Link>
          <Link to="/map" className="font-medium text-gray-700 hover:text-foliage-medium transition-colors">Map</Link>
          <Link to="/leaderboard" className="font-medium text-gray-700 hover:text-foliage-medium transition-colors">Leaderboard</Link>
          <Link to="/education" className="font-medium text-gray-700 hover:text-foliage-medium transition-colors">Learn</Link>
          <Button variant="default">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-md border border-gray-300"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:bg-foliage-light hover:text-foliage-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/report" 
              className="px-4 py-2 text-gray-700 hover:bg-foliage-light hover:text-foliage-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Report
            </Link>
            <Link 
              to="/map" 
              className="px-4 py-2 text-gray-700 hover:bg-foliage-light hover:text-foliage-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Map
            </Link>
            <Link 
              to="/leaderboard" 
              className="px-4 py-2 text-gray-700 hover:bg-foliage-light hover:text-foliage-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </Link>
            <Link 
              to="/education" 
              className="px-4 py-2 text-gray-700 hover:bg-foliage-light hover:text-foliage-dark rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            <Button variant="default" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
