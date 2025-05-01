
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-24">
        <div className="max-w-md w-full text-center">
          <div className="text-foliage-dark font-bold text-6xl mb-2">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Page not found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or does not exist.
          </p>
          <Link to="/">
            <Button className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
