import { Camera, Filter } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

// Sample photos - replace with your own images
const photos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape at sunrise",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Forest path in autumn",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    alt: "Sunlight through trees",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    alt: "Waterfall in forest",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Lake reflection at sunset",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Foggy mountain valley",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Green hills landscape",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    alt: "Morning mist over lake",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    alt: "Wildflowers in meadow",
    width: 800,
    height: 600,
  },
];

const categories = ["All", "Landscape", "Portrait", "Street", "Nature", "Travel"];

export default function PhotographyPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-primary-600 dark:text-primary-300 mr-3" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white">
              Photography
            </h1>
          </div>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A collection of my favorite shots from travels and everyday moments
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-primary-500 dark:text-primary-400 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-primary-900 dark:bg-white text-white dark:text-primary-900"
                  : "bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <PhotoGallery photos={photos} />

        {/* Info Section */}
        <div className="mt-12 bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
            About My Photography
          </h2>
          <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
            Photography has been a passion of mine for several years. I love capturing moments that
            tell stories - whether it&apos;s the golden hour light on a mountain peak, the bustle of city
            streets, or quiet moments in nature.
          </p>
          <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
            I primarily shoot with a [Your Camera Model] and enjoy experimenting with different
            styles and techniques. All photos here are available for personal use - just reach out
            if you&apos;re interested in prints or licensing.
          </p>
        </div>

        {/* Equipment */}
        <div className="mt-8 bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
            Gear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h3 className="font-medium text-primary-900 dark:text-white mb-2">Camera</h3>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                [Your Camera Model] - Main body for most shoots
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h3 className="font-medium text-primary-900 dark:text-white mb-2">Lenses</h3>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                24-70mm f/2.8, 70-200mm f/2.8, 50mm f/1.4
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h3 className="font-medium text-primary-900 dark:text-white mb-2">Editing</h3>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Adobe Lightroom, Photoshop, Capture One
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h3 className="font-medium text-primary-900 dark:text-white mb-2">Accessories</h3>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Tripod, filters, drone for aerial shots
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}