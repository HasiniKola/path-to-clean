
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import FeatureCard from '@/components/FeatureCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from '@/hooks/use-toast';
import { Camera, Check, Lock, MessageSquare, AlertTriangle } from 'lucide-react';

interface ReportFormData {
  image: File | null;
  location: { lat: number; lng: number } | null;
  type: string;
  description: string;
}

const Report = () => {
  const [formData, setFormData] = useState<ReportFormData>({
    image: null,
    location: null,
    type: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (file: File, location: { lat: number; lng: number } | null) => {
    setFormData({
      ...formData,
      image: file,
      location
    });
    
    // Simulate the AI classification
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        type: 'Plastic Waste'
      }));
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Report Submitted Successfully",
        description: "Thank you for your contribution! Your report has been logged.",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-foliage-dark text-white py-12 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Report Litter & Environmental Issues</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Help keep our community clean by reporting litter and environmental issues. 
              Simply take a photo, let us detect your location, and submit your report.
            </p>
          </div>
        </section>
        
        {/* Report Form Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <Tabs defaultValue="report" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="report">Report an Issue</TabsTrigger>
                <TabsTrigger value="my-reports">My Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="report">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foliage-light mb-4">
                        <Check className="h-8 w-8 text-foliage-dark" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your report has been submitted successfully. Our team will review it and take appropriate action.
                      </p>
                      <Alert className="mb-4">
                        <Check className="h-4 w-4" />
                        <AlertTitle>Report ID: #12345</AlertTitle>
                        <AlertDescription>
                          You've earned 50 points for this contribution!
                        </AlertDescription>
                      </Alert>
                      <button 
                        className="text-foliage-dark font-medium hover:underline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit another report
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload a Photo</h2>
                      <ImageUploader 
                        onImageUpload={handleImageUpload} 
                      />

                      {isSubmitting && (
                        <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded">
                          <p className="text-sm text-blue-700 flex items-center gap-2">
                            <span className="inline-block w-4 h-4 border-2 border-blue-700 border-t-transparent rounded-full animate-spin"></span>
                            Analyzing image and processing report...
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="my-reports">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                  <div className="text-center py-12">
                    <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">Sign in to view your reports</h3>
                    <p className="text-gray-500 mt-2">Create an account or sign in to track your contributions</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* How It Works */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-foliage-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-foliage-dark" />
                  </div>
                  <h3 className="font-medium mb-2">1. Take a Photo</h3>
                  <p className="text-gray-600 text-sm">
                    Snap a clear picture of the litter or environmental issue.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-foliage-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-foliage-dark" />
                  </div>
                  <h3 className="font-medium mb-2">2. Share Location</h3>
                  <p className="text-gray-600 text-sm">
                    Allow the app to capture your location or manually input it.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-foliage-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-foliage-dark" />
                  </div>
                  <h3 className="font-medium mb-2">3. Add Details</h3>
                  <p className="text-gray-600 text-sm">
                    Provide additional information about the issue if needed.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of issues can I report?</AccordionTrigger>
                  <AccordionContent>
                    You can report various environmental issues including litter, illegal dumping, 
                    plastic waste, electronic waste, construction debris, and other environmental 
                    concerns that impact public spaces.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my personal information kept private?</AccordionTrigger>
                  <AccordionContent>
                    Yes, your personal information is kept confidential. We only share the 
                    location and details of the issue with the relevant authorities or community 
                    clean-up organizers, not your identity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I track the status of my report?</AccordionTrigger>
                  <AccordionContent>
                    Once you create an account and submit a report, you can track its status in 
                    the "My Reports" section. You'll receive notifications when there are updates 
                    to your reported issues.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens after I submit a report?</AccordionTrigger>
                  <AccordionContent>
                    After submission, our system categorizes the issue and notifies the 
                    appropriate local authorities or community organizations. The issue may be 
                    addressed during scheduled clean-ups or by municipal services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Important Notice */}
            <div className="mt-12">
              <Alert variant="default" className="bg-amber-50 text-amber-800 border-amber-200">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Important Safety Notice</AlertTitle>
                <AlertDescription>
                  Always prioritize your safety when reporting issues. Do not trespass on private property 
                  or put yourself in dangerous situations to take photos. If you see hazardous waste or 
                  materials, report it but do not handle it yourself.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Add missing MapPin component
const MapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Report;
