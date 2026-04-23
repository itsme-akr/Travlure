import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

export default function Hero({ onSearch }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center pt-20">

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        <h1 className="text-white text-4xl md:text-6xl font-heading mb-4">
          Your Personal Concierge
        </h1>

        <p className="text-gray-200 text-lg font-body md:text-xl max-w-2xl mb-6">
          Discover restaurants, bars, and local gems tailored to your vibe.
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-olive px-6 py-3 rounded-xl text-white font-semibold hover:bg-gold transition sgadow-md mb-10"
        >
          Take Quiz to Start
        </button>

        <SearchBox onSearch={onSearch} />

      </div>
    </div>
  );
}