
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Trash2, 
  CheckSquare
} from 'lucide-react';

const stats = [
  {
    title: "Total Reports",
    value: "1,248",
    change: "+12% from last month",
    icon: <MapPin className="h-8 w-8 text-foliage-medium" />
  },
  {
    title: "Resolved Issues",
    value: "892",
    change: "+18% from last month",
    icon: <CheckSquare className="h-8 w-8 text-foliage-dark" />
  },
  {
    title: "Active Volunteers",
    value: "345",
    change: "+5% from last month",
    icon: <Users className="h-8 w-8 text-water-medium" />
  },
  {
    title: "Clean-up Events",
    value: "24",
    change: "+2 from last month",
    icon: <Calendar className="h-8 w-8 text-water-dark" />
  },
  {
    title: "Waste Collected",
    value: "2.4 tons",
    change: "+0.3 tons from last month",
    icon: <Trash2 className="h-8 w-8 text-foliage-medium" />
  }
];

const MunicipalityStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden border-l-4 border-l-foliage-medium">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              {stat.title}
              {stat.icon}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MunicipalityStats;
