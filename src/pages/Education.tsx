import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationalCard from '@/components/EducationalCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, ArrowLeft, BookOpen, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Mock educational content data
const articleData = [
  {
    id: '1',
    title: 'The Impact of Single-Use Plastics',
    excerpt: 'Learn about how single-use plastics affect our environment and what alternatives are available for everyday use.',
    image: 'https://images.unsplash.com/photo-1727201918233-af4c663e84de',
    category: 'Environmental Impact',
    readTime: 5,
    content: `
      <h2>The Growing Problem of Single-Use Plastics</h2>
      <p>Single-use plastics have become ubiquitous in our daily lives, from shopping bags and food containers to coffee cups and water bottles. These items, designed to be used once and then discarded, have created a global environmental crisis.</p>
      <p>Plastics take hundreds of years to decompose, and even then, they break down into microplastics that contaminate our soil, water systems, and even the air we breathe. The production of plastics also contributes significantly to greenhouse gas emissions and climate change.</p>
      <h2>The Environmental Impact</h2>
      <p>The environmental consequences of single-use plastics are far-reaching:</p>
      <ul>
        <li>Marine life is severely affected, with millions of sea creatures dying each year from plastic ingestion or entanglement</li>
        <li>Microplastics have been found in drinking water, food, and even human blood</li>
        <li>Plastic production and disposal contribute to air and water pollution</li>
        <li>The carbon footprint of plastic production adds to climate change</li>
      </ul>
      <h2>Sustainable Alternatives</h2>
      <p>Fortunately, there are many alternatives to single-use plastics that can help reduce our environmental impact:</p>
      <ul>
        <li>Reusable shopping bags made from cotton, jute, or recycled materials</li>
        <li>Stainless steel or glass water bottles</li>
        <li>Bamboo or metal straws</li>
        <li>Beeswax wraps instead of plastic food wrap</li>
        <li>Compostable food containers</li>
      </ul>
      <h2>Taking Action</h2>
      <p>As individuals, we can make a significant difference by changing our consumption habits and advocating for change. Here are some steps you can take:</p>
      <ul>
        <li>Refuse single-use plastics whenever possible</li>
        <li>Carry reusable alternatives with you</li>
        <li>Support businesses that use sustainable packaging</li>
        <li>Participate in clean-up events to remove plastic waste from the environment</li>
        <li>Advocate for policies that reduce plastic waste in your community</li>
      </ul>
      <p>By making these changes, we can help create a cleaner, more sustainable future for our planet.</p>
    `
  },
  {
    id: '2',
    title: 'How to Start Composting at Home',
    excerpt: 'A beginner\'s guide to setting up and maintaining a compost system in your own backyard or apartment.',
    image: 'https://images.unsplash.com/photo-1582392506116-3463666d1275',
    category: 'Sustainable Living',
    readTime: 8,
    content: `
      <h2>Why Compost?</h2>
      <p>Composting is nature's way of recycling organic matter back into the soil. By starting a compost system at home, you can:</p>
      <ul>
        <li>Reduce household waste by up to 30%</li>
        <li>Create nutrient-rich soil for your garden</li>
        <li>Lower your carbon footprint</li>
        <li>Save money on fertilizers and soil amendments</li>
      </ul>
      <h2>Getting Started with Composting</h2>
      <p>Whether you have a large yard or a small apartment, there's a composting method that will work for you. Here's how to get started:</p>
      <h3>Choose Your Compost System</h3>
      <p>For yards and outdoor spaces:</p>
      <ul>
        <li>Open compost pile or heap</li>
        <li>Compost bin</li>
        <li>Tumbling composter</li>
      </ul>
      <p>For apartments or limited spaces:</p>
      <ul>
        <li>Worm bin (vermicomposting)</li>
        <li>Bokashi bin</li>
        <li>Electric composter</li>
      </ul>
      <h3>What to Compost</h3>
      <p>The best compost has a mix of "green" and "brown" materials:</p>
      <p><strong>Green materials</strong> (nitrogen-rich):</p>
      <ul>
        <li>Fruit and vegetable scraps</li>
        <li>Coffee grounds and filters</li>
        <li>Fresh grass clippings</li>
        <li>Plant trimmings</li>
        <li>Eggshells</li>
      </ul>
      <p><strong>Brown materials</strong> (carbon-rich):</p>
      <ul>
        <li>Dry leaves</li>
        <li>Small branches and twigs</li>
        <li>Paper products (newspaper, cardboard, paper towels)</li>
        <li>Dryer lint</li>
        <li>Nutshells</li>
      </ul>
      <h3>Maintaining Your Compost</h3>
      <p>To keep your compost healthy and productive:</p>
      <ul>
        <li>Maintain a balance of green and brown materials (aim for a ratio of about 1:3)</li>
        <li>Keep the compost moist but not soggy</li>
        <li>Turn or mix the compost regularly to aerate it</li>
        <li>Chop larger items into smaller pieces to speed up decomposition</li>
      </ul>
      <p>With a little care and attention, you'll have rich, dark compost ready to use in your garden in a few months to a year, depending on your method and conditions.</p>
    `
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
  const location = useLocation();
  const navigate = useNavigate();
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [articleContent, setArticleContent] = useState<any>(null);

  // Check if there's an article ID in the query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const articleId = params.get('article');
    
    if (articleId) {
      setActiveArticle(articleId);
      const article = [...articleData, ...videoData].find(item => item.id === articleId);
      if (article) {
        setArticleContent(article);
      }
    } else {
      setActiveArticle(null);
      setArticleContent(null);
    }
  }, [location]);

  const handleBack = () => {
    // If we're viewing an article, clear the parameter
    if (activeArticle) {
      navigate('/education');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner - Show only when not viewing an article */}
        {!activeArticle && (
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
        )}
        
        {/* Article Detail View */}
        {activeArticle && articleContent && (
          <section className="py-8 px-6">
            <div className="container mx-auto max-w-4xl">
              <Button variant="ghost" onClick={handleBack} className="mb-4 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all resources
              </Button>
              
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img 
                  src={articleContent.image} 
                  alt={articleContent.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="flex items-center justify-between flex-wrap mb-6">
                <div>
                  <span className="inline-block bg-foliage-light/30 text-foliage-dark text-xs px-2 py-1 rounded mr-2">
                    {articleContent.category}
                  </span>
                  <span className="text-sm text-gray-500">{articleContent.readTime} min read</span>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{articleContent.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{articleContent.excerpt}</p>
              
              <Card>
                <CardContent className="p-6 prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: articleContent.content }} />
                </CardContent>
              </Card>
              
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {articleData
                    .filter(item => item.id !== activeArticle)
                    .slice(0, 3)
                    .map(item => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-1 truncate">{item.title}</h4>
                          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.excerpt}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-foliage-dark"
                            onClick={() => navigate(`/education?article=${item.id}`)}
                          >
                            Read more
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Educational Content List - Only show when not viewing an article */}
        {!activeArticle && (
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
                      <EducationalCard 
                        key={article.id} 
                        content={article} 
                        onClick={() => navigate(`/education?article=${article.id}`)}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="videos">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoData.map((video) => (
                      <EducationalCard 
                        key={video.id} 
                        content={video}
                        onClick={() => navigate(`/education?article=${video.id}`)}
                      />
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
        )}
        
        {/* Newsletter Section - Only show when not viewing an article */}
        {!activeArticle && (
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
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
