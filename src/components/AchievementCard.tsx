
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  goal: number;
  icon: string;
  isCompleted: boolean;
}

interface AchievementCardProps {
  className?: string;
}

// Mock data for achievements
const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Report your first litter sighting',
    progress: 1,
    goal: 1,
    icon: '🌱',
    isCompleted: true
  },
  {
    id: '2',
    title: 'Community Helper',
    description: 'Participate in 5 clean-up events',
    progress: 3,
    goal: 5,
    icon: '🤝',
    isCompleted: false
  },
  {
    id: '3',
    title: 'Eco Warrior',
    description: 'Report 25 litter sightings',
    progress: 18,
    goal: 25,
    icon: '🛡️',
    isCompleted: false
  },
  {
    id: '4',
    title: 'Social Butterfly',
    description: 'Invite 10 friends to join the platform',
    progress: 7,
    goal: 10,
    icon: '🦋',
    isCompleted: false
  },
  {
    id: '5',
    title: 'Knowledge Seeker',
    description: 'Complete all educational modules',
    progress: 4,
    goal: 5,
    icon: '📚',
    isCompleted: false
  }
];

const AchievementCard: React.FC<AchievementCardProps> = ({ className }) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="bg-gradient-to-r from-water-medium to-water-dark p-4">
        <h3 className="text-white font-semibold text-lg">Your Achievements</h3>
        <p className="text-white/80 text-sm">Track your environmental impact</p>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockAchievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={cn(
                "p-4 rounded-lg border transition-all",
                achievement.isCompleted 
                  ? "border-foliage-medium bg-foliage-light/10"
                  : "border-gray-200 hover:border-foliage-light"
              )}
            >
              <div className="flex gap-3 items-start">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">
                        {achievement.progress}/{achievement.goal}
                      </span>
                    </div>
                    <Progress 
                      value={(achievement.progress / achievement.goal) * 100} 
                      className={cn(
                        "h-2",
                        achievement.isCompleted ? "bg-gray-100" : "bg-gray-100"
                      )}
                      indicatorClassName={
                        achievement.isCompleted ? "bg-foliage-dark" : "bg-foliage-medium"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
