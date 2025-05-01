
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UserRank {
  id: string;
  name: string;
  points: number;
  reports: number;
  cleanups: number;
  rank: number;
  avatar: string;
}

interface LeaderboardCardProps {
  className?: string;
  limit?: number;
}

// Mock data for leaderboard
const mockUsers: UserRank[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    points: 2580,
    reports: 45,
    cleanups: 12,
    rank: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Priya Patel',
    points: 2340,
    reports: 38,
    cleanups: 15,
    rank: 2,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '3',
    name: 'Amit Kumar',
    points: 2120,
    reports: 42,
    cleanups: 9,
    rank: 3,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Deepa Nair',
    points: 1980,
    reports: 35,
    cleanups: 11,
    rank: 4,
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: '5',
    name: 'Vijay Singh',
    points: 1840,
    reports: 29,
    cleanups: 14,
    rank: 5,
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
];

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  className,
  limit = 5
}) => {
  const topUsers = mockUsers.slice(0, limit);
  const { toast } = useToast();

  const getRankColor = (rank: number): string => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="bg-gradient-to-r from-foliage-medium to-foliage-dark p-4">
        <h3 className="text-white font-semibold text-lg">Eco Champions</h3>
        <p className="text-white/80 text-sm">Top contributors making a difference</p>
      </div>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {topUsers.map((user) => (
            <div key={user.id} className="flex items-center p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <span className={cn("font-bold text-lg w-6", getRankColor(user.rank))}>
                  {user.rank}
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{user.name}</h4>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>{user.reports} Reports</span>
                    <span>{user.cleanups} Clean-ups</span>
                  </div>
                </div>
              </div>
              <div className="text-foliage-dark font-bold">
                {user.points} pts
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
