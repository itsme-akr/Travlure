import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [showFilters, setShowFilters] = useState(false);

  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [stateInput, setStateInput] = useState("");

  const [categories, setCategories] = useState([]);
  const [ambiance, setAmbiance] = useState([]);
  const [price, setPrice] = useState([]);

  const categoryOptions = ["Food & Drink", "Cocktail Bar", "Party", "Cultural"];
  const ambianceOptions = ["Chill", "Vibrant", "Family", "Happy Hour"];
  const priceOptions = ["$", "$$", "$$$", "$$$$"];

  const toggle = (item, state, setState, limit) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      if (state.length < limit) {
        setState([...state, item]);
      }
    }
  };

  const renderChips = (options, state, setState, limit) =>
    options.map((opt) => {
      const isSelected = state.includes(opt);
      const isDisabled = !isSelected && state.length >= limit;

      return (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt, state, setState, limit)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            isSelected
              ? "bg-magenta text-white shadow-sm"
              : isDisabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-50 text-gray-700 hover:bg-magenta/10 hover:text-magenta"
          }`}
        >
          {opt}
        </button>
      );
    });

  // 🔥 Trigger search
  const handleSearch = () => {
    onSearch({
      query,
      city,
      state: stateInput,
      categories,
      ambiance,
      price,
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-6 w-full max-w-4xl">

      {/* 🔍 TOP SEARCH ROW */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">

        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="md:col-span-6 p-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta"
        />

        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="md:col-span-3 p-3 border border-gray-300 rounded-lg"
        />

        <input
          placeholder="State"
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
          className="md:col-span-1 p-3 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleSearch}
          className="md:col-span-2 bg-olive px-6 py-3 rounded-xl text-white font-semibold hover:bg-gold transition shadow-md"
        >
          Find →
        </button>
      </div>

      {/* 🔽 FILTER TOGGLE */}
      <div className="mt-4 text-sm text-magenta text-center">
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters ▲" : "More Filters ▼"}
        </button>
      </div>

      {/* 🎛 FILTER SECTION */}
      {showFilters && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

          {/* Category */}
          <div>
            <p className="text-sm font-semibold mb-3 text-gray-700">
              Category (max 2)
            </p>
            <div className="flex flex-wrap gap-2">
              {renderChips(categoryOptions, categories, setCategories, 2)}
            </div>
          </div>

          {/* Ambiance */}
          <div>
            <p className="text-sm font-semibold mb-3 text-gray-700">
              Ambiance (max 2)
            </p>
            <div className="flex flex-wrap gap-2">
              {renderChips(ambianceOptions, ambiance, setAmbiance, 2)}
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-sm font-semibold mb-3 text-gray-700">
              Price
            </p>
            <div className="flex flex-wrap gap-2">
              {renderChips(priceOptions, price, setPrice, 4)}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}