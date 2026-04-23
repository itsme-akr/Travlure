import { useSave } from "../context/SaveContext";
import PlaceCard from "../components/PlaceCard";

export default function MyPlaces() {
  const { collections } = useSave();

  return (
    <div className="min-h-screen bg-cream pt-24 px-6">

      <h1 className="text-3xl font-bold mb-8">
        My Collections
      </h1>

      {Object.keys(collections).length === 0 ? (
        <p>No saved places yet.</p>
      ) : (
        Object.entries(collections).map(([name, places]) => (
          <div key={name} className="mb-10">

            <h2 className="text-xl font-semibold mb-4">
              {name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {places.map((place, index) => (
                <PlaceCard key={index} place={place} />
              ))}
            </div>

          </div>
        ))
      )}
    </div>
  );
}