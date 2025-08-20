//home.tsx
import { useState } from 'react';
import { Star, Share, Heart, CheckCircle, Home, Calendar, Lock, Wifi, Car, Snowflake, Shield, ShieldAlert, Sparkles, Key, MessageCircle, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/ui/header';
import ImageGallery from '@/components/ui/image-gallery';
import BookingCard from '@/components/ui/booking-card';
import { AirbnbCalendar } from '@/components/ui/calendar';
import Footer from '@/components/ui/footer';
import { PROPERTY_DATA } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { BookingProvider } from '@/contexts/BookingContexts';

const iconMap = {
  CheckCircle,
  Home,
  Calendar,
  Lock,
  Wifi,
  Car,
  Snowflake,
  Shield,
  ShieldAlert,
  Sparkles,
  Key,
  MessageCircle,
  MapPin,
  DollarSign
};

export default function HomePage() {
  const { toast } = useToast();

  const handleShare = () => {
    toast({
      title: "Link copied to clipboard",
      description: "Share this amazing place with your friends!",
    });
  };

  const handleSave = () => {
    toast({
      title: "Added to wishlist",
      description: "This property has been saved to your favorites.",
    });
  };

  return (
    <BookingProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 py-8 mt-16">
          {/* Property Header */}
          <div className="mb-6" data-testid="property-header">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h1 className="text-2xl lg:text-3xl font-semibold text-airbnb-dark mb-4 lg:mb-0" data-testid="text-property-title">
                {PROPERTY_DATA.title}
              </h1>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-airbnb-dark hover:text-airbnb-pink transition-colors"
                  onClick={handleShare}
                  data-testid="button-share"
                >
                  <Share className="w-4 h-4" />
                  <span className="underline">Share</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-airbnb-dark hover:text-airbnb-pink transition-colors"
                  onClick={handleSave}
                  data-testid="button-save"
                >
                  <Heart className="w-4 h-4" />
                  <span className="underline">Save</span>
                </Button>
              </div>
            </div>
          </div>

          <ImageGallery />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8" data-testid="left-content">
              {/* Property Details */}
              <div className="border-b border-airbnb-border pb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-airbnb-dark mb-1" data-testid="text-location">
                      {PROPERTY_DATA.location}
                    </h2>
                    <p className="text-airbnb-gray" data-testid="text-details">{PROPERTY_DATA.details}</p>
                  </div>
                  <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center" data-testid="host-avatar">
                    <span className="text-white font-semibold">A</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium" data-testid="text-rating">{PROPERTY_DATA.rating}</span>
                  </div>
                  <span className="text-airbnb-gray">·</span>
                  <a 
                    href="#reviews" 
                    className="text-sm text-airbnb-dark underline hover:text-airbnb-pink"
                    data-testid="link-reviews"
                  >
                    {PROPERTY_DATA.reviewCount} reviews
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-airbnb-dark">
                  <span className="text-sm">Hosted by</span>
                  <span className="font-medium" data-testid="text-host-name">{PROPERTY_DATA.hostName}</span>
                  {PROPERTY_DATA.isSuperhostStatus && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800" data-testid="badge-superhost">
                      Superhost
                    </Badge>
                  )}
                  <span className="text-airbnb-gray">·</span>
                  <span className="text-sm text-airbnb-gray" data-testid="text-hosting-years">
                    {PROPERTY_DATA.hostYearsHosting} years hosting
                  </span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="border-b border-airbnb-border pb-8 space-y-6" data-testid="feature-cards">
                {PROPERTY_DATA.features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <IconComponent className="w-6 h-6 text-airbnb-pink mt-1" />
                      <div>
                        <h3 className="font-medium text-airbnb-dark" data-testid={`feature-title-${index}`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-airbnb-gray" data-testid={`feature-description-${index}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* About Section */}
              <div className="border-b border-airbnb-border pb-8" data-testid="about-section">
                <h3 className="text-xl font-semibold text-airbnb-dark mb-4">About this place</h3>
                <p className="text-airbnb-gray leading-relaxed" data-testid="text-description">
                  {PROPERTY_DATA.description}
                </p>
              </div>

              {/* Amenities Section */}
              <div className="border-b border-airbnb-border pb-8" data-testid="amenities-section">
                <h3 className="text-xl font-semibold text-airbnb-dark mb-6">What this place offers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROPERTY_DATA.amenities.map((amenity, index) => {
                    const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
                    return (
                      <div key={index} className="flex items-center space-x-3" data-testid={`amenity-${index}`}>
                        <IconComponent className="w-6 h-6 text-airbnb-dark" />
                        <span className="text-airbnb-dark">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Calendar Section */}
              <AirbnbCalendar />

              {/* Reviews Section */}
              <div id="reviews" className="pb-8" data-testid="reviews-section">
                <div className="flex items-center space-x-2 mb-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <h3 className="text-xl font-semibold text-airbnb-dark" data-testid="reviews-heading">
                    {PROPERTY_DATA.rating} · {PROPERTY_DATA.reviewCount} reviews
                  </h3>
                </div>
                
                {/* Rating Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {PROPERTY_DATA.ratingCategories.map((category, index) => {
                    const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                    return (
                      <div key={index} className="flex items-center justify-between" data-testid={`rating-category-${index}`}>
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-airbnb-dark" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={(category.rating / 5) * 100} 
                            className="w-20 h-1"
                          />
                          <span className="text-sm font-medium" data-testid={`rating-value-${index}`}>
                            {category.rating}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <BookingCard />
          </div>
        </div>

        <Footer />
      </div>
    </BookingProvider>
  );
}
