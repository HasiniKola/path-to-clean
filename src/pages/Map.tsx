
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Map as MapIcon, Users, Filter } from 'lucide-react';

const Map = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-water-dark text-white py-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Clean-Up Events Map</h1>
                <p className="text-white/80 max-w-xl">
                  Find and join community clean-up events in your area. Make a direct impact by participating in local environmental initiatives.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <Button variant="default" className="bg-white text-water-dark hover:bg-gray-100">
                  <Calendar className="mr-2 h-4 w-4" /> This Week
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <MapView className="mb-12" />
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-water-light/20 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-water-dark" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">328</h3>
                    <p className="text-gray-500 text-sm">Events Organized</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-foliage-light/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-foliage-dark" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">12.5K+</h3>
                    <p className="text-gray-500 text-sm">Participants</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-earth-light/30 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-earth-dark" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">9,840</h3>
                    <p className="text-gray-500 text-sm">Volunteer Hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-water-light/20 p-3 rounded-full">
                    <MapIcon className="h-6 w-6 text-water-dark" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">156</h3>
                    <p className="text-gray-500 text-sm">Areas Cleaned</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-foliage-dark to-water-dark rounded-lg p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">Organize Your Own Clean-Up Event</h2>
                  <p className="text-white/80 max-w-xl">
                    Take initiative in your community by organizing a clean-up event. We provide resources and support to make it successful.
                  </p>
                </div>
                <Button size="lg" className="bg-white text-foliage-dark hover:bg-gray-100">
                  Start an Event
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Map;
