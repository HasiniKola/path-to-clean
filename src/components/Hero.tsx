
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc = 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07', // Default nature image
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 mix-blend-multiply" />
      </div>
      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:py-48 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={buttonLink}>
              <Button className="rounded-md px-6 py-6 text-lg font-semibold shadow-sm">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
