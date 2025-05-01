
import React, { useState, useEffect } from 'react';
import { MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MapEvent {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  date: string;
  participants: number;
}

interface MapViewProps {
  className?: string;
}

// Mock data for events
const mockEvents: MapEvent[] = [
  {
    id: '1',
    title: 'Beach Clean-up Day',
    description: 'Join us for a day of cleaning the local beach area.',
    location: { lat: 19.0760, lng: 72.8777 },
    date: '2025-05-15T09:00',
    participants: 24
  },
  {
    id: '2',
    title: 'Park Restoration',
    description: 'Help us restore the city park to its natural beauty.',
    location: { lat: 19.0825, lng: 72.8590 },
    date: '2025-05-22T10:00',
    participants: 18
  },
  {
    id: '3',
    title: 'River Bank Clean-up',
    description: 'Let\'s clean up the river bank and protect our water sources.',
    location: { lat: 19.0638, lng: 72.8963 },
    date: '2025-05-29T08:30',
    participants: 32
  }
];

const MapView: React.FC<MapViewProps> = ({ className }) => {
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);

  // This would be replaced with actual map integration code
  useEffect(() => {
    console.log('Map would initialize here with React Leaflet or Google Maps API');
    // In a real implementation, we would initialize the map here
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleJoinEvent = (event: MapEvent) => {
    console.log('Joining event:', event);
    // In a real app, this would make an API call to join the event
  };

  return (
    <div className={className}>
      <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        {/* This would be replaced with an actual map */}
        <div className="absolute inset-0 bg-gradient-to-br from-water-light/30 to-water-dark/30 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-700 font-medium mb-2">Map integration would appear here</p>
            <p className="text-gray-500 text-sm mb-4">(Using Leaflet.js or Google Maps API)</p>
          </div>
        </div>
        
        {/* Mock event markers */}
        {mockEvents.map((event) => (
          <div 
            key={event.id}
            className={`absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
              ${event.id === '1' ? 'top-1/3 left-1/4' : 
                event.id === '2' ? 'top-1/2 left-3/4' : 'top-2/3 left-1/2'}`}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative">
              <MapPin className="w-8 h-8 text-foliage-dark" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                !
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Upcoming Clean-up Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-foliage-light to-water-light h-2" />
              <CardContent className="p-4">
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <p className="text-gray-500 text-sm mb-3">{formatDate(event.date)}</p>
                <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Info className="h-3 w-3" /> {event.participants} participants
                  </span>
                  <Button 
                    size="sm" 
                    onClick={() => handleJoinEvent(event)}
                    className="bg-foliage-medium hover:bg-foliage-dark"
                  >
                    Join Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <div className="bg-gradient-to-r from-foliage-light to-water-light h-2" />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{selectedEvent.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSelectedEvent(null)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{formatDate(selectedEvent.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    {selectedEvent.location.lat.toFixed(4)}, {selectedEvent.location.lng.toFixed(4)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{selectedEvent.participants} participants</span>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </Button>
                <Button 
                  className="flex-1 bg-foliage-medium hover:bg-foliage-dark" 
                  onClick={() => {
                    handleJoinEvent(selectedEvent);
                    setSelectedEvent(null);
                  }}
                >
                  Join Event
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

// Adding missing icon components
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default MapView;
