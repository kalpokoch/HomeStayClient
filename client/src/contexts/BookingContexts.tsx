// contexts/BookingContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  selectedDates: {
    from: Date | undefined;
    to: Date | undefined;
  };
  setSelectedDates: (dates: { from: Date | undefined; to: Date | undefined }) => void;
  guestCount: string;
  setGuestCount: (count: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(2025, 8, 5), // September 5, 2025
    to: new Date(2025, 8, 7)    // September 7, 2025
  });
  
  const [guestCount, setGuestCount] = useState("1");

  return (
    <BookingContext.Provider value={{
      selectedDates,
      setSelectedDates,
      guestCount,
      setGuestCount
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
