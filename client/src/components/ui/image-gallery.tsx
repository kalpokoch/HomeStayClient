import { useState } from 'react';
import { Link } from 'wouter';
import { Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROPERTY_DATA } from '@/lib/constants';

interface ImageGalleryProps {
  showAllPhotosButton?: boolean;
}

export default function ImageGallery({ showAllPhotosButton = true }: ImageGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const mainImage = PROPERTY_DATA.images.find(img => img.isMain);
  const thumbnailImages = PROPERTY_DATA.images.filter(img => !img.isMain).slice(0, 4);

  return (
    <div className="mb-8" data-testid="image-gallery">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        {/* Main large image on left */}
        <div
          className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer"
          data-testid="image-main"
          onMouseEnter={() => setHoveredImage(0)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={mainImage?.url}
            alt={mainImage?.alt}
            className={`w-full h-64 lg:h-96 object-cover transition-all duration-300 image-hover-effect ${
              hoveredImage === 0 ? 'brightness-90' : ''
            }`}
          />
        </div>
        
        {/* Thumbnail images on right */}
        {thumbnailImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer"
            data-testid={`image-thumbnail-${index + 1}`}
            onMouseEnter={() => setHoveredImage(index + 1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={`w-full h-32 lg:h-48 object-cover transition-all duration-300 image-hover-effect ${
                hoveredImage === index + 1 ? 'brightness-90' : ''
              }`}
            />
            
            {/* Show all photos button on last image */}
            {index === thumbnailImages.length - 1 && showAllPhotosButton && (
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <Link href="/photos">
                  <Button
                    variant="secondary"
                    className="bg-white text-airbnb-dark shadow-md hover:shadow-lg transition-shadow"
                    data-testid="button-show-all-photos"
                  >
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Show all photos
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
