
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, LogIn, User, LogOut } from 'lucide-react';
import UserProfile from './UserProfile';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userProfile = localStorage.getItem('user_profile');
    if (userProfile) {
      const userData = JSON.parse(userProfile);
      setIsLoggedIn(true);
      setUserName(userData.name || userData.email.split('@')[0]);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_profile');
    setIsLoggedIn(false);
    toast.success('You have been logged out successfully');
    navigate('/');
  };

  // Store current path before redirection to signin
  const handleSignInClick = () => {
    localStorage.setItem('returnPath', window.location.pathname);
    navigate('/signin');
  };

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
          
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {userName}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <UserProfile />
                <div className="p-4 border-t">
                  <Button variant="destructive" size="sm" className="w-full" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleSignInClick}>
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
              <Link to="/signup">
                <Button variant="default">Join Now</Button>
              </Link>
            </>
          )}
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
            
            {isLoggedIn ? (
              <>
                <div className="px-4 py-2">
                  <UserProfile />
                </div>
                <div className="px-4 py-2">
                  <Button variant="destructive" size="sm" className="w-full" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    handleSignInClick();
                    setIsOpen(false);
                  }}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <Button variant="default" className="w-full">Join Now</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
