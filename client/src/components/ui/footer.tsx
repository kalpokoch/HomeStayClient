import { Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const footerSections = [
    // {
    //   title: "Support",
    //   links: [
    //     "Help Center",
    //     "AirCover",
    //     "Safety information",
    //     "Supporting people with disabilities",
    //     "Cancellation options"
    //   ]
    // },
    // {
    //   title: "Community",
    //   links: [
    //     "Airbnb.org: disaster relief housing",
    //     "Combating discrimination",
    //     "Diversity & Belonging",
    //     "Accessibility"
    //   ]
    // },
    // {
    //   title: "Hosting",
    //   links: [
    //     "Airbnb your home",
    //     "AirCover for Hosts",
    //     "Hosting resources",
    //     "Community forum",
    //     "Hosting responsibly"
    //   ]
    // },
    // {
    //   title: "Airbnb",
    //   links: [
    //     "Newsroom",
    //     "New features",
    //     "Careers",
    //     "Investors",
    //     "Gift cards"
    //   ]
    // }
  ];

  return (
    <footer className="bg-airbnb-light-gray border-t border-airbnb-border mt-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-airbnb-dark mb-4">{section.title}</h3>
              <ul className="space-y-3 text-sm text-airbnb-gray">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="hover:text-airbnb-pink transition-colors"
                      data-testid={`link-${section.title.toLowerCase()}-${linkIndex}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        
        <div className="border-t border-airbnb-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-airbnb-gray">
            <span>© 2024 Airbnb, Inc.</span>
            <a href="#" className="hover:text-airbnb-pink transition-colors" data-testid="link-terms">Terms</a>
            <a href="#" className="hover:text-airbnb-pink transition-colors" data-testid="link-sitemap">Sitemap</a>
            <a href="#" className="hover:text-airbnb-pink transition-colors" data-testid="link-privacy">Privacy</a>
            <a href="#" className="hover:text-airbnb-pink transition-colors" data-testid="link-privacy-choices">Your Privacy Choices</a>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" className="text-sm text-airbnb-gray hover:text-airbnb-pink p-2" data-testid="button-language">
              <Globe className="w-4 h-4 mr-2" />
              <span>English (US)</span>
            </Button>
            <Button variant="ghost" className="text-sm text-airbnb-gray hover:text-airbnb-pink p-2" data-testid="button-currency">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>₹ INR</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
