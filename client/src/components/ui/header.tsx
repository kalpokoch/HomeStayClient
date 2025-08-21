import { useHeaderVisibility } from '@/hooks/use-scroll';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const isVisible = useHeaderVisibility();

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-header ${
        isVisible ? 'slide-down' : 'slide-up'
      }`}
      data-testid="sticky-header"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-airbnb-pink" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 1C7.16 1 0 8.16 0 17s7.16 16 16 16 16-7.16 16-16S24.84 1 16 1zm0 29C8.83 30 2 23.17 2 16S8.83 2 16 2s14 6.83 14 14-6.83 14-14 14z"/>
            <path d="M16 6.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5S11.86 8.5 16 8.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
          </svg>
          <span className="ml-2 text-xl font-bold text-airbnb-pink">WOW</span>
        </div>
        <Button variant="ghost" size="icon" data-testid="button-menu">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}
