
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeaderboardCard from '@/components/LeaderboardCard';
import AchievementCard from '@/components/AchievementCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Medal, Award, Trophy } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-foliage-dark text-white py-12 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Eco Champions & Achievements</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Recognize and celebrate the contributions of our community members. Every action counts toward a cleaner environment.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <Tabs defaultValue="leaderboard" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="achievements">Your Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="leaderboard">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Top Contributors */}
                  <div className="lg:col-span-3">
                    <h2 className="text-2xl font-bold mb-6">Top Contributors</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {/* Top 3 Users */}
                      <Card className="bg-gradient-to-b from-amber-50 to-white border-amber-200">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400">
                                <img src="https://i.pravatar.cc/150?img=1" alt="User" className="w-full h-full object-cover" />
                              </div>
                              <div className="absolute -top-3 -right-3 bg-amber-400 w-8 h-8 rounded-full flex items-center justify-center">
                                <Trophy className="text-white h-5 w-5" />
                              </div>
                            </div>
                            <h3 className="font-bold mt-4 mb-1">Rahul Sharma</h3>
                            <p className="text-amber-600 font-semibold mb-2">2,580 points</p>
                            <div className="flex items-center text-xs text-gray-500 gap-2">
                              <span>45 Reports</span>
                              <span>•</span>
                              <span>12 Clean-ups</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-b from-gray-50 to-white border-gray-200">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                                <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-full h-full object-cover" />
                              </div>
                              <div className="absolute -top-3 -right-3 bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                                <Medal className="text-white h-5 w-5" />
                              </div>
                            </div>
                            <h3 className="font-bold mt-4 mb-1">Priya Patel</h3>
                            <p className="text-gray-500 font-semibold mb-2">2,340 points</p>
                            <div className="flex items-center text-xs text-gray-500 gap-2">
                              <span>38 Reports</span>
                              <span>•</span>
                              <span>15 Clean-ups</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-b from-amber-50/50 to-white border-amber-100">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-600">
                                <img src="https://i.pravatar.cc/150?img=3" alt="User" className="w-full h-full object-cover" />
                              </div>
                              <div className="absolute -top-3 -right-3 bg-amber-600 w-8 h-8 rounded-full flex items-center justify-center">
                                <Award className="text-white h-5 w-5" />
                              </div>
                            </div>
                            <h3 className="font-bold mt-4 mb-1">Amit Kumar</h3>
                            <p className="text-amber-700 font-semibold mb-2">2,120 points</p>
                            <div className="flex items-center text-xs text-gray-500 gap-2">
                              <span>42 Reports</span>
                              <span>•</span>
                              <span>9 Clean-ups</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Full Leaderboard */}
                    <LeaderboardCard limit={10} />
                  </div>
                  
                  {/* Points System */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">How Points Work</h2>
                    <Card>
                      <CardContent className="p-6">
                        <ul className="space-y-4">
                          <li className="flex justify-between items-center">
                            <span className="text-gray-700">Report Litter</span>
                            <span className="font-semibold text-foliage-dark">+50 pts</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-gray-700">Join Clean-up</span>
                            <span className="font-semibold text-foliage-dark">+100 pts</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-gray-700">Organize Event</span>
                            <span className="font-semibold text-foliage-dark">+200 pts</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-gray-700">Complete Quiz</span>
                            <span className="font-semibold text-foliage-dark">+25 pts</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-gray-700">Invite Friend</span>
                            <span className="font-semibold text-foliage-dark">+20 pts</span>
                          </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h3 className="font-medium text-gray-900 mb-2">Monthly Rewards</h3>
                          <p className="text-gray-600 text-sm">
                            Top performers each month receive special recognition and eco-friendly prizes from our sponsors.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center max-w-md">
                    <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-700 mb-3">Sign in to view your achievements</h2>
                    <p className="text-gray-500">
                      Create an account or sign in to track your progress and see your environmental impact achievements.
                    </p>
                  </div>
                </div>
                
                {/* Below is the achievement content that would be visible when logged in */}
                <div className="mt-8">
                  <AchievementCard />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
