
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import LeaderboardCard from '@/components/LeaderboardCard';
import { Button } from '@/components/ui/button';
import { Camera, Map, Award, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          title="Building Cleaner Communities Together"
          subtitle="Join SwachhPath to report litter, attend clean-up events, and make a real environmental impact in your community."
          buttonText="Get Started"
          buttonLink="/report"
          imageSrc="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
        />
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                SwachhPath empowers citizens to take action and create cleaner, more sustainable communities through simple and effective tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Camera className="h-6 w-6" />}
                title="Report Litter"
                description="Take a photo of litter or illegal dumping. Our AI will classify the waste type automatically."
              />
              <FeatureCard 
                icon={<Map className="h-6 w-6" />}
                title="Find Clean-Up Events"
                description="Discover community clean-up events near you and register to participate."
              />
              <FeatureCard 
                icon={<Award className="h-6 w-6" />}
                title="Earn Rewards"
                description="Earn points for your contributions and unlock achievements as you progress."
              />
              <FeatureCard 
                icon={<BookOpen className="h-6 w-6" />}
                title="Learn & Share"
                description="Access educational resources about waste management and sustainable practices."
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 px-6 bg-gray-50 pattern-bg">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-foliage-dark mb-2">5,230+</div>
                <p className="text-gray-600">Litter Reports Submitted</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-foliage-dark mb-2">328</div>
                <p className="text-gray-600">Clean-Up Events Organized</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-foliage-dark mb-2">1,850+</div>
                <p className="text-gray-600">Active Community Members</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leaderboard Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Make An Impact</h2>
                <p className="text-gray-600 mb-6">
                  Join our community of eco-conscious citizens working together to make our neighborhoods cleaner and healthier. Every report and clean-up participation earns you points and recognition.
                </p>
                <p className="text-gray-600 mb-8">
                  Check out our leaderboard to see the top contributors making a difference in our community. You could be next!
                </p>
                <div>
                  <Link to="/leaderboard">
                    <Button className="bg-foliage-dark hover:bg-foliage-dark/90 text-white">
                      View Full Leaderboard
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div>
                <LeaderboardCard className="shadow-md" />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-foliage-dark text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join SwachhPath today and start contributing to a cleaner, healthier environment. 
              Every small action counts towards making our community better.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/report">
                <Button size="lg" className="bg-white text-foliage-dark hover:bg-gray-100">
                  Report Litter
                </Button>
              </Link>
              <Link to="/map">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Clean-Up Events
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
