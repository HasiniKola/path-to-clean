
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MunicipalityStats from '@/components/MunicipalityStats';
import ReportsList from '@/components/ReportsList';
import MunicipalityEvents from '@/components/MunicipalityEvents';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Municipality = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Municipality Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Manage reports, events, and monitor community engagement
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="default" size="sm">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <MunicipalityStats />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reports List */}
            <div className="lg:col-span-2">
              <ReportsList />
            </div>

            {/* Events */}
            <div>
              <MunicipalityEvents />
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>
                  Summary of key performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 flex items-center justify-center border-t">
                <p className="text-center text-gray-500">
                  Analytics charts will appear here
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>
                  Assign and manage cleaning crews and equipment
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 flex items-center justify-center border-t">
                <p className="text-center text-gray-500">
                  Resource management tools will appear here
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Municipality;
