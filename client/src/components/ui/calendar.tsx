// calendar.tsx
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useBooking } from "@/contexts/BookingContexts"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0",
        month: "space-y-4 flex-1",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-airbnb-dark text-white hover:bg-airbnb-dark hover:text-white focus:bg-airbnb-dark focus:text-white",
        day_today: "bg-airbnb-pink text-white font-semibold ring-2 ring-airbnb-pink ring-opacity-50",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed hover:bg-transparent",
        day_range_middle:
          "aria-selected:bg-airbnb-light aria-selected:text-airbnb-dark",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

// Custom Airbnb-style calendar component
export function AirbnbCalendar() {
  const { selectedDates, setSelectedDates } = useBooking();
  const today = new Date();
  // Set today to August 20, 2025 as specified
  today.setFullYear(2025, 7, 20); // Month is 0-indexed, so 7 = August
  
  const [currentMonth, setCurrentMonth] = React.useState(new Date(2025, 8)); // Start with September 2025

  // Disable all dates before today
  const disabledDays = {
    before: today
  };

  const handleClearDates = () => {
    setSelectedDates({ from: undefined, to: undefined });
  };

  const handleDateSelect = (range: any) => {
    if (range?.from && range?.to) {
      setSelectedDates({ from: range.from, to: range.to });
    } else if (range?.from) {
      setSelectedDates({ from: range.from, to: undefined });
    }
  };

  // Format selected dates for display
  const formatDateRange = () => {
    if (selectedDates.from && selectedDates.to) {
      const fromStr = selectedDates.from.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
      const toStr = selectedDates.to.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
      
      // Calculate nights
      const nights = Math.ceil((selectedDates.to.getTime() - selectedDates.from.getTime()) / (1000 * 60 * 60 * 24));
      return {
        range: `${fromStr} - ${toStr}`,
        nights: nights
      };
    }
    return null;
  };

  const dateInfo = formatDateRange();

  return (
    <div id="calendar-section" className="border-b border-airbnb-border pb-8" data-testid="calendar-section">
      <h3 className="text-xl font-semibold text-airbnb-dark mb-2">
        {dateInfo ? `${dateInfo.nights} nights in Guwahati` : 'Select your dates'}
      </h3>
      {dateInfo && (
        <p className="text-sm text-airbnb-gray mb-8">{dateInfo.range}</p>
      )}
      
      {/* Calendar Container */}
      <div className="bg-white rounded-lg" data-testid="calendar-grid">
        <Calendar
          mode="range"
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          selected={selectedDates}
          onSelect={handleDateSelect}
          numberOfMonths={2}
          disabled={disabledDays}
          modifiers={{
            today: today
          }}
          className="w-full"
          classNames={{
            months: "flex space-x-12 justify-center w-full",
            month: "space-y-4 flex-1",
            caption: "flex justify-center pt-1 relative items-center mb-4",
            caption_label: "text-lg font-medium text-gray-900",
            nav: "space-x-1 flex items-center",
            nav_button: "h-8 w-8 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-gray-100 rounded-full flex items-center justify-center",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex mb-2",
            head_cell: "text-gray-500 rounded-md w-10 font-medium text-sm flex-1 text-center py-2",
            row: "flex w-full",
            cell: "flex-1 h-10 text-center text-sm p-0 relative",
            day: "h-10 w-10 p-0 font-normal hover:bg-gray-100 rounded-full mx-auto flex items-center justify-center transition-colors",
            day_range_start: "bg-black text-white hover:bg-black rounded-full",
            day_range_end: "bg-black text-white hover:bg-black rounded-full", 
            day_selected: "bg-black text-white hover:bg-black rounded-full",
            day_range_middle: "bg-gray-200 text-gray-900 hover:bg-gray-200 rounded-none",
            day_today: "bg-gray-900 text-white hover:bg-gray-900 rounded-full font-semibold",
            day_outside: "text-gray-300 opacity-50",
            day_disabled: "text-gray-300 opacity-30 cursor-not-allowed hover:bg-transparent",
            day_hidden: "invisible",
          }}
        />
      </div>
      
      {/* Bottom section with keyboard icon and clear dates */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center">
          <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center mr-2">
            <div className="grid grid-cols-3 gap-0.5">
              {Array(9).fill(null).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        <button 
          className="text-gray-900 underline hover:text-gray-600 transition-colors font-medium" 
          onClick={handleClearDates}
          data-testid="button-clear-dates"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
