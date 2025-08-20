// booking-card.tsx (Simplified Version)
import { useState, useEffect, useCallback } from 'react';
import { Calendar, ChevronDown, Heart, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { PROPERTY_DATA } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { useBooking } from '@/contexts/BookingContexts';

export default function BookingCard() {
  const { selectedDates, guestCount, setGuestCount } = useBooking();
  const { toast } = useToast();

  // Format dates for display
  const checkInDate = selectedDates.from?.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }) || 'Add date';
  
  const checkOutDate = selectedDates.to?.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }) || 'Add date';

  // Calculate total price based on selected dates
  const calculateTotalPrice = () => {
    if (selectedDates.from && selectedDates.to) {
      const nights = Math.ceil((selectedDates.to.getTime() - selectedDates.from.getTime()) / (1000 * 60 * 60 * 24));
      return nights * PROPERTY_DATA.pricePerNight;
    }
    return PROPERTY_DATA.totalPrice;
  };

  const calculateNights = () => {
    if (selectedDates.from && selectedDates.to) {
      return Math.ceil((selectedDates.to.getTime() - selectedDates.from.getTime()) / (1000 * 60 * 60 * 24));
    }
    return PROPERTY_DATA.nights;
  };

  const handleReservation = () => {
    toast({
      title: "Reservation Initiated",
      description: "Redirecting to payment page...",
    });
  };

  const handleReport = () => {
    toast({
      title: "Report Submitted",
      description: "Thank you for your feedback. We'll review this listing.",
    });
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 z-30"> {/* Simple sticky with proper top margin */}
        <Card
          id="booking-card"
          className="bg-white border border-airbnb-border shadow-lg"
          data-testid="booking-card"
        >
          <CardContent className="p-6">
            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-2xl font-semibold text-airbnb-dark" data-testid="text-price">
                  ₹{calculateTotalPrice().toLocaleString()}
                </span>
                <span className="text-airbnb-gray">for {calculateNights()} nights</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-airbnb-pink">
                <Heart className="w-4 h-4 fill-current" />
                <span>Prices include all fees</span>
              </div>
            </div>

            {/* Date and Guest Selection */}
            <div className="border border-airbnb-border rounded-lg mb-4">
              <div className="grid grid-cols-2">
                <div className="p-3 border-r border-airbnb-border">
                  <Label className="block text-xs font-semibold text-airbnb-dark mb-1">
                    CHECK-IN
                  </Label>
                  <div className="text-sm text-airbnb-dark cursor-pointer hover:bg-gray-50 rounded p-1 -m-1 transition-colors" data-testid="display-checkin">
                    {checkInDate}
                  </div>
                </div>
                <div className="p-3">
                  <Label className="block text-xs font-semibold text-airbnb-dark mb-1">
                    CHECKOUT
                  </Label>
                  <div className="text-sm text-airbnb-dark cursor-pointer hover:bg-gray-50 rounded p-1 -m-1 transition-colors" data-testid="display-checkout">
                    {checkOutDate}
                  </div>
                </div>
              </div>
              <div className="p-3 border-t border-airbnb-border">
                <Label className="block text-xs font-semibold text-airbnb-dark mb-1">
                  GUESTS
                </Label>
                <Select value={guestCount} onValueChange={setGuestCount}>
                  <SelectTrigger className="border-none shadow-none p-0 text-sm text-airbnb-dark bg-transparent h-auto" data-testid="select-guests">
                    <SelectValue />
                    <ChevronDown className="w-4 h-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Reserve Button */}
            <Button
              className="w-full bg-airbnb-pink text-white py-3 px-6 rounded-lg font-semibold hover:bg-airbnb-pink-dark transition-colors mb-4"
              onClick={handleReservation}
              data-testid="button-reserve"
              disabled={!selectedDates.from || !selectedDates.to}
            >
              {selectedDates.from && selectedDates.to ? 'Reserve' : 'Select dates to reserve'}
            </Button>

            <p className="text-center text-sm text-airbnb-gray mb-6">
              You won't be charged yet
            </p>

            {/* Report Listing */}
            <div className="text-center">
              <Button
                variant="ghost"
                className="text-sm text-airbnb-gray hover:text-airbnb-pink transition-colors p-0"
                onClick={handleReport}
                data-testid="button-report"
              >
                <Flag className="w-4 h-4 mr-1" />
                Report this listing
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
