import { Calendar, Users, Home, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { Link } from 'wouter';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 mt-16" data-testid="dashboard-page">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-airbnb-dark mb-2" data-testid="text-dashboard-title">
              Dashboard
            </h1>
            <p className="text-airbnb-gray" data-testid="text-dashboard-subtitle">
              Manage your property and bookings
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-to-listing">
              Back to Listing
            </Button>
          </Link>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-testid="dashboard-cards">
          {/* Current Tenants */}
          <Card className="border-airbnb-border" data-testid="card-current-tenants">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-airbnb-pink" />
                <span>Current Tenants</span>
              </CardTitle>
              <CardDescription>
                Active guests and their details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-airbnb-gray mb-4" data-testid="text-no-current-tenants">
                  No current tenants
                </p>
                <Button variant="outline" size="sm" disabled data-testid="button-view-tenants">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Bookings */}
          <Card className="border-airbnb-border" data-testid="card-upcoming-bookings">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-airbnb-pink" />
                <span>Upcoming Bookings</span>
              </CardTitle>
              <CardDescription>
                Future reservations and check-ins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-airbnb-gray mb-4" data-testid="text-no-upcoming-bookings">
                  No upcoming bookings
                </p>
                <Button variant="outline" size="sm" disabled data-testid="button-view-bookings">
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property Management */}
          <Card className="border-airbnb-border" data-testid="card-property-management">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="w-5 h-5 text-airbnb-pink" />
                <span>Property Management</span>
              </CardTitle>
              <CardDescription>
                Update listing and manage amenities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Home className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-airbnb-gray mb-4" data-testid="text-property-management">
                  Manage your property details
                </p>
                <Button variant="outline" size="sm" disabled data-testid="button-edit-property">
                  Edit Listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MongoDB Connection Status */}
        <Card className="border-airbnb-border mb-8" data-testid="card-database-status">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-airbnb-pink" />
              <span>Database Connection</span>
            </CardTitle>
            <CardDescription>
              MongoDB integration status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="font-medium text-yellow-800" data-testid="text-connection-status">
                  Connection Pending
                </span>
              </div>
              <p className="text-sm text-yellow-700" data-testid="text-connection-details">
                MongoDB integration is set up but not yet connected. Configure your database connection to enable full functionality.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-yellow-300 text-yellow-800 hover:bg-yellow-100" 
                disabled
                data-testid="button-configure-database"
              >
                Configure Database
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-airbnb-border" data-testid="card-quick-actions">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4" 
                disabled
                data-testid="button-add-booking"
              >
                <div className="text-left">
                  <div className="font-medium">Add New Booking</div>
                  <div className="text-sm text-airbnb-gray">Create manual reservation</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4" 
                disabled
                data-testid="button-update-calendar"
              >
                <div className="text-left">
                  <div className="font-medium">Update Calendar</div>
                  <div className="text-sm text-airbnb-gray">Block dates or set availability</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4" 
                disabled
                data-testid="button-guest-communication"
              >
                <div className="text-left">
                  <div className="font-medium">Guest Communication</div>
                  <div className="text-sm text-airbnb-gray">Send messages to guests</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4" 
                disabled
                data-testid="button-reports"
              >
                <div className="text-left">
                  <div className="font-medium">View Reports</div>
                  <div className="text-sm text-airbnb-gray">Booking and financial reports</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Note */}
        <Card className="border-blue-200 bg-blue-50" data-testid="card-implementation-note">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">i</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2" data-testid="text-note-title">
                  Implementation Note
                </h4>
                <p className="text-sm text-blue-800 mb-3" data-testid="text-note-description">
                  This dashboard is prepared for future implementation. All tenant management features 
                  will be connected to MongoDB once the database integration is complete.
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li data-testid="text-feature-1">• Real-time booking management</li>
                  <li data-testid="text-feature-2">• Guest check-in/check-out tracking</li>
                  <li data-testid="text-feature-3">• Automated notification system</li>
                  <li data-testid="text-feature-4">• Financial reporting and analytics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
