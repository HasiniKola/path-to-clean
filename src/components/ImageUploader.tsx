
import React, { useState, useRef } from 'react';
import { Upload, Camera, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onImageUpload: (file: File, location: { lat: number; lng: number } | null) => void;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, className }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      
      // Create preview URL
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const droppedFile = files[0];
      if (!droppedFile.type.startsWith('image/')) {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an image file (JPG, PNG, etc.)",
        });
        return;
      }
      
      setFile(droppedFile);
      const objectUrl = URL.createObjectURL(droppedFile);
      setPreviewUrl(objectUrl);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleGetLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setIsLoadingLocation(false);
          
          toast({
            title: "Location captured successfully",
            description: `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
          
          toast({
            variant: "destructive",
            title: "Error getting location",
            description: error.message,
          });
        }
      );
    } else {
      setIsLoadingLocation(false);
      toast({
        variant: "destructive",
        title: "Geolocation not supported",
        description: "Your browser doesn't support geolocation.",
      });
    }
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    if (file) {
      onImageUpload(file, location);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div 
        className={cn(
          "border-2 border-dashed border-gray-300 rounded-lg p-6",
          "bg-gray-50 hover:bg-gray-100 transition-colors duration-200",
          "flex flex-col items-center justify-center cursor-pointer",
          previewUrl ? "relative" : "h-72"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !previewUrl && fileInputRef.current?.click()}
      >
        {!previewUrl ? (
          <>
            <Upload className="h-12 w-12 text-gray-400 mb-3" />
            <p className="text-gray-700 font-medium mb-1">Drag and drop your image here</p>
            <p className="text-gray-500 text-sm mb-4">or click to browse files</p>
            <Button 
              variant="outline" 
              size="sm"
              className="mb-2"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Select File
            </Button>
            <p className="text-gray-400 text-xs">Supports: JPG, PNG, GIF (max 5MB)</p>
          </>
        ) : (
          <>
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full h-auto max-h-80 object-contain rounded-md" 
            />
            <Button 
              variant="destructive" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveImage();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        )}
        <input 
          type="file" 
          className="hidden" 
          accept="image/*" 
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button 
          variant="outline" 
          className="flex-1 flex items-center gap-2"
          onClick={handleGetLocation}
          disabled={isLoadingLocation}
        >
          <MapPin className="h-4 w-4" />
          {isLoadingLocation ? 'Getting Location...' : location ? 'Update Location' : 'Get Current Location'}
        </Button>
        
        <Button 
          className="flex-1 flex items-center gap-2" 
          disabled={!previewUrl}
          onClick={handleSubmit}
        >
          <Camera className="h-4 w-4" />
          Submit Report
        </Button>
      </div>

      {location && (
        <div className="mt-4 p-3 bg-foliage-light/20 border border-foliage-light rounded-md">
          <p className="text-sm text-gray-700 flex items-center gap-1">
            <MapPin className="h-4 w-4 text-foliage-dark" />
            Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
