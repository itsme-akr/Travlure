import { useState } from "react";
import PlaceCard from "./PlaceCard";
import RecommendationSection from "./RecommendationSection";

export default function ResultsSection({ filters }) {
  const [showAll, setShowAll] = useState(false);
  const allPlaces = [
    {
      name: "The Ivy Rooftop",
      type: "Cocktail Bar",
      price: "$$$",
      location: "New York",
      description: "Trendy rooftop with skyline views.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
    },
    {
      name: "Cafe Lumière",
      type: "Food & Drink",
      price: "$$",
      location: "San Francisco",
      description: "Cozy café perfect for evening chill.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
    },
    {
      name: "Velvet Lounge",
      type: "Party",
      price: "$$$$",
      location: "Los Angeles",
      description: "Luxury nightlife experience.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    },
    {
      name: "City Museum",
      type: "Cultural",
      price: "$",
      location: "Chicago",
      description: "Explore art and history.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
    },
    {
      name: "Sunset Harbor",
      type: "Scenic Spot",
      price: "$$",
      location: "Miami",
      description: "Relaxing waterfront views with vibrant sunsets.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
    },
    {
      name: "The Book Nook",
      type: "Cafe & Books",
      price: "$$$",
      location: "Seattle",
      description: "Quiet reading café with artisanal coffee.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    }
  ];

  const query = filters?.query?.toLowerCase() || "";
  const categories = filters?.categories || [];
  const price = filters?.price || [];
  const city = filters?.city?.toLowerCase() || "";

  // 🔥 Check if user applied anything
  const noFilters =
    !query &&
    categories.length === 0 &&
    price.length === 0 &&
    !city;

  const filtered = allPlaces.filter((place) => {

    // If nothing selected → show all
    if (noFilters) return true;

    return (
      (!query || place.name.toLowerCase().includes(query)) &&
      (categories.length === 0 || categories.includes(place.type)) &&
      (price.length === 0 || price.includes(place.price)) &&
      (!city || place.location.toLowerCase().includes(city))
    );
  });

  // 🔥 Limit to 6 initially
  const visiblePlaces = showAll ? filtered : filtered.slice(0, 6);

  return (
  <>
    {/* 🔥 Recommendations FIRST */}
    <RecommendationSection filters={filters} places={allPlaces} />

    {/* 🔽 Existing Results */}
    <div className="bg-cream -mt-10 pt-16 pb-16 px-6">

      <h2 className="text-3xl font-heading text-center mb-8">
        {noFilters ? "Discover Our Favorites" : "Search Results"}
      </h2>

      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p>No exact matches found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visiblePlaces.map((place, index) => (
              <PlaceCard key={index} place={place} />
            ))}
          </div>

          {filtered.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-magenta"
              >
                {showAll ? "Show Less ▲" : "View More ▼"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  </>
);
}