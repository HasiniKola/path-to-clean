
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  participants: number;
  maxParticipants: number;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Park Clean-Up',
    location: 'Central Park',
    date: '2025-05-15T09:00:00',
    participants: 15,
    maxParticipants: 30
  },
  {
    id: '2',
    title: 'Beach Litter Collection',
    location: 'Sunset Beach',
    date: '2025-05-22T08:00:00',
    participants: 24,
    maxParticipants: 40
  },
  {
    id: '3',
    title: 'River Bank Restoration',
    location: 'Narmada Riverfront',
    date: '2025-05-29T10:00:00',
    participants: 8,
    maxParticipants: 20
  }
];

const formatEventDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const MunicipalityEvents = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Upcoming Clean-Up Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockEvents.map(event => (
            <div 
              key={event.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              
              <div className="space-y-2 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-foliage-medium" />
                  {formatEventDate(event.date)}
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-foliage-medium" />
                  {event.location}
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-foliage-medium" />
                  {event.participants} registered / {event.maxParticipants} spots
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="default">Edit Event</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            + Create New Event
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MunicipalityEvents;
