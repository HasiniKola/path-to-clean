
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Award, BookOpen } from 'lucide-react';

interface UserProfileProps {
  className?: string;
}

interface UserData {
  email: string;
  name: string;
  role: string;
  joinDate: string;
  points: number;
  reportsSubmitted: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ className }) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);
  
  React.useEffect(() => {
    const savedUserData = localStorage.getItem('user_profile');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  if (!userData) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${userData.name}`} alt={userData.name} />
            <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">{userData.name}</p>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="mr-2">
                {userData.role === 'admin' ? 'Municipality Admin' : 'Community Member'}
              </Badge>
              <span className="text-xs text-gray-500 flex items-center">
                <CalendarDays className="h-3 w-3 mr-1" /> 
                Joined {formatDate(userData.joinDate)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3">
          <div className="bg-foliage-light/20 p-3 rounded-md flex items-center">
            <Award className="h-5 w-5 text-foliage-dark mr-2" />
            <div>
              <p className="text-sm font-medium">{userData.points}</p>
              <p className="text-xs text-gray-600">Eco Points</p>
            </div>
          </div>
          <div className="bg-foliage-light/20 p-3 rounded-md flex items-center">
            <MapPin className="h-5 w-5 text-foliage-dark mr-2" />
            <div>
              <p className="text-sm font-medium">{userData.reportsSubmitted}</p>
              <p className="text-xs text-gray-600">Reports</p>
            </div>
          </div>
        </div>

        <div className="bg-foliage-light/10 p-3 rounded-md mt-3">
          <div className="flex items-center mb-1">
            <BookOpen className="h-4 w-4 text-foliage-dark mr-1" />
            <p className="text-sm font-medium">Learning Progress</p>
          </div>
          <p className="text-xs text-gray-600 mb-2">Continue your environmental education</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-foliage-medium h-2 rounded-full" style={{ width: '35%' }}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>3/9 modules</span>
            <span>35% complete</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
