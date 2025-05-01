
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Report {
  id: string;
  location: string;
  timestamp: string;
  status: 'pending' | 'in-progress' | 'resolved';
  type: string;
  reportedBy: string;
}

const mockReports: Report[] = [
  {
    id: '1',
    location: 'Main Street Park',
    timestamp: '2025-05-01T09:30:00',
    status: 'pending',
    type: 'Litter',
    reportedBy: 'Aisha P.'
  },
  {
    id: '2',
    location: 'Riverfront Walk',
    timestamp: '2025-04-30T14:15:00',
    status: 'in-progress',
    type: 'Illegal Dumping',
    reportedBy: 'Michael T.'
  },
  {
    id: '3',
    location: 'Central Market Square',
    timestamp: '2025-04-30T11:20:00',
    status: 'resolved',
    type: 'Overflowing Bin',
    reportedBy: 'Sarah K.'
  },
  {
    id: '4',
    location: 'Sunset Avenue Beach',
    timestamp: '2025-04-29T16:45:00',
    status: 'pending',
    type: 'Plastic Waste',
    reportedBy: 'David L.'
  },
  {
    id: '5',
    location: 'Oakwood Community Garden',
    timestamp: '2025-04-29T10:10:00',
    status: 'in-progress',
    type: 'Green Waste',
    reportedBy: 'Priya M.'
  }
];

const getStatusColor = (status: Report['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'resolved':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    default:
      return '';
  }
};

const getFormattedDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const ReportsList = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockReports.map(report => (
            <div 
              key={report.id}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{report.location}</h4>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-600">
                    <Badge variant="outline">{report.type}</Badge>
                    <span className="text-xs">
                      Reported: {getFormattedDate(report.timestamp)}
                    </span>
                    <span className="text-xs">
                      By: {report.reportedBy}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "rounded-full text-xs font-medium",
                    getStatusColor(report.status)
                  )}
                >
                  {report.status === 'pending' && 'Pending Review'}
                  {report.status === 'in-progress' && 'In Progress'}
                  {report.status === 'resolved' && 'Resolved'}
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">View All Reports</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportsList;
