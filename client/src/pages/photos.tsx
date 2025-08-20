import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { PROPERTY_DATA } from '@/lib/constants';

export default function PhotosPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const openFullscreen = (index: number) => {
    setSelectedImageIndex(index);
    setShowFullscreen(true);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev < PROPERTY_DATA.images.length - 1 ? prev + 1 : 0
    );
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => 
      prev > 0 ? prev - 1 : PROPERTY_DATA.images.length - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 mt-16" data-testid="photos-page">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-airbnb-dark" data-testid="text-photos-title">
                Photos of {PROPERTY_DATA.title}
              </h1>
              <p className="text-airbnb-gray" data-testid="text-photos-count">
                {PROPERTY_DATA.images.length} photos
              </p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" data-testid="photos-grid">
          {PROPERTY_DATA.images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => openFullscreen(index)}
              data-testid={`photo-${index}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Back to Listing */}
        <div className="text-center">
          <Link href="/">
            <Button variant="outline" data-testid="button-back-to-listing">
              Back to Listing
            </Button>
          </Link>
        </div>

        {/* Fullscreen Modal */}
        {showFullscreen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            data-testid="fullscreen-modal"
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20"
                onClick={closeFullscreen}
                data-testid="button-close-fullscreen"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white hover:bg-opacity-20"
                onClick={previousImage}
                data-testid="button-previous"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white hover:bg-opacity-20"
                onClick={nextImage}
                data-testid="button-next"
              >
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </Button>

              {/* Main Image */}
              <img
                src={PROPERTY_DATA.images[selectedImageIndex]?.url}
                alt={PROPERTY_DATA.images[selectedImageIndex]?.alt}
                className="max-w-full max-h-full object-contain"
                data-testid="fullscreen-image"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                <span data-testid="image-counter">
                  {selectedImageIndex + 1} / {PROPERTY_DATA.images.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
