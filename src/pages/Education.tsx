
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationalCard from '@/components/EducationalCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';

// Mock educational content data
const articleData = [
  {
    id: '1',
    title: 'The Impact of Single-Use Plastics',
    excerpt: 'Learn about how single-use plastics affect our environment and what alternatives are available for everyday use.',
    image: 'https://images.unsplash.com/photo-1727201918233-af4c663e84de',
    category: 'Environmental Impact',
    readTime: 5
  },
  {
    id: '2',
    title: 'How to Start Composting at Home',
    excerpt: 'A beginner\'s guide to setting up and maintaining a compost system in your own backyard or apartment.',
    image: 'https://images.unsplash.com/photo-1582392506116-3463666d1275',
    category: 'Sustainable Living',
    readTime: 8
  },
  {
    id: '3',
    title: 'Understanding Waste Segregation',
    excerpt: 'Why segregation is important and how proper waste sorting can significantly impact recycling effectiveness.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
    category: 'Waste Management',
    readTime: 6
  },
  {
    id: '4',
    title: 'The Journey of Your Recycled Items',
    excerpt: 'Follow the path of recyclables from your bin to their transformation into new products.',
    image: 'https://images.unsplash.com/photo-1582408921524-3b39d3b4290a',
    category: 'Recycling',
    readTime: 7
  },
  {
    id: '5',
    title: 'Microplastics: The Invisible Threat',
    excerpt: 'Discover the dangers of microplastics in our environment and how they enter the food chain.',
    image: 'https://images.unsplash.com/photo-1610130383669-95917c70ca20',
    category: 'Environmental Impact',
    readTime: 10
  },
  {
    id: '6',
    title: 'Creating Eco-Friendly Cleaning Solutions',
    excerpt: 'Make your own non-toxic cleaning products using simple ingredients that are better for the environment.',
    image: 'https://images.unsplash.com/photo-1582400861225-5ea8e272c9db',
    category: 'Sustainable Living',
    readTime: 4
  }
];

const videoData = [
  {
    id: '7',
    title: 'The Story of Plastic',
    excerpt: 'A documentary-style look at how plastic production and waste impacts communities around the world.',
    image: 'https://images.unsplash.com/photo-1604187350574-a75bf087b9da',
    category: 'Documentary',
    readTime: 15
  },
  {
    id: '8',
    title: 'DIY Upcycling Projects',
    excerpt: 'Learn creative ways to repurpose items you would normally throw away into useful household objects.',
    image: 'https://images.unsplash.com/photo-1584495900034-a8264b4dd082',
    category: 'Crafts',
    readTime: 12
  },
  {
    id: '9',
    title: 'How Landfills Work',
    excerpt: 'An educational exploration of modern landfill operations and their environmental considerations.',
    image: 'https://images.unsplash.com/photo-1550323594-cde081b6a80a',
    category: 'Educational',
    readTime: 8
  }
];

const Education = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section 
          className="py-20 px-6 bg-cover bg-center relative"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')",
            backgroundBlendMode: "multiply"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Environmental Education Hub</h1>
            <p className="max-w-2xl mx-auto text-white/80 mb-8">
              Expand your knowledge about environmental issues, waste management, and sustainability practices.
              Learn how you can make a positive impact in your daily life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-foliage-medium hover:bg-foliage-dark">Explore Resources</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Take a Quiz</Button>
            </div>
          </div>
        </section>
        
        {/* Educational Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <Tabs defaultValue="articles" className="w-full mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="text-2xl font-bold">Educational Resources</h2>
                <TabsList>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articleData.map((article) => (
                    <EducationalCard key={article.id} content={article} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoData.map((video) => (
                    <EducationalCard key={video.id} content={video} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="quizzes">
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <AlertCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Quizzes coming soon!</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    We're developing interactive quizzes to test your environmental knowledge and help you learn.
                    Check back soon for updates!
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Featured Section */}
            <div className="mt-16 bg-foliage-light/20 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured: Community Success Stories</h2>
                  <p className="text-gray-600 mb-6">
                    Explore inspiring stories from communities around the world who have successfully implemented 
                    clean-up initiatives and waste reduction programs.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Learn about their challenges, solutions, and the positive environmental impact they've achieved
                    through community engagement and education.
                  </p>
                  <Button className="bg-foliage-dark hover:bg-foliage-dark/90">
                    Read Success Stories
                  </Button>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                    alt="Community Clean-up" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 px-6 bg-gray-100">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest environmental news, educational resources,
              and updates about community clean-up events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foliage-medium"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
