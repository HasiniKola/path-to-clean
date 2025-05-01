
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EducationalContent {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: number;
}

interface EducationalCardProps {
  content: EducationalContent;
  className?: string;
}

const EducationalCard: React.FC<EducationalCardProps> = ({ content, className }) => {
  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="aspect-video relative">
        <img 
          src={content.image} 
          alt={content.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foliage-dark">
          {content.category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{content.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{content.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{content.readTime} min read</span>
          <Button variant="ghost" size="sm" className="text-foliage-dark hover:text-foliage-dark/80">
            Read more <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationalCard;
