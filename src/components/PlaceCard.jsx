import { useSave } from "../context/SaveContext";
import { useNavigate } from "react-router-dom";

export default function PlaceCard({ place }) {
  const { addToCollection, isSavedAnywhere } = useSave();

  const saved = isSavedAnywhere(place);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition duration-300 group-hover:brightness-90">

      {/* Image */}
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Price */}
        <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-xs font-semibold rounded-md shadow">
          {place.price}
        </div>

        {/* Save */}
        <button
          onClick={() => addToCollection("Favorites",place)}
          className="absolute top-3 right-3 text-lg"
        >
          {saved ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">
          {place.name}
        </h3>

        <p className="text-xs text-magenta font-medium mb-2">
          {place.type}
        </p>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {place.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">
            📍 {place.location}
          </span>

          <button
            onClick={() => navigate(`/place/${place.name}`, { state: place })}
            className="text-sm font-medium text-magenta hover:underline"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}