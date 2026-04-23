import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import ResultsSection from "../components/ResultsSection";
import ExploreMore from "../components/ExploreMore";

export default function Discover() {
  const [filters, setFilters] = useState(null);
  const [profile, setProfile] = useState(null);

  const resultsRef = useRef(null); // ✅ IMPORTANT
  const navigate = useNavigate();

  // 🔥 Load profile + auto trigger results
  useEffect(() => {
  const stored = localStorage.getItem("userProfile");

  if (!stored) {
    // 🔥 FIRST TIME USER → REDIRECT
    if (window.location.pathname !== "/quiz") {
    setTimeout(() => navigate("/quiz"), 500);
    }
    return;
  }

  const parsed = JSON.parse(stored);
  setProfile(parsed);

  // 🔥 AUTO TRIGGER RESULTS
  setFilters({
    query: "",
    city: "",
    categories: [],
    price: Array.isArray(parsed?.budget) ? parsed.budget : [],
  });

}, []);

  // 🔥 Smooth scroll AFTER filters update
  useEffect(() => {
    if (filters && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [filters]);

  return (
    <div>
      <Hero onSearch={setFilters} />

      {/* RESULTS */}
      {filters && (
        <div ref={resultsRef}>
          <ResultsSection filters={filters} />
        </div>
      )}

      {/* BOTTOM SECTION */}
      <ExploreMore />
    </div>
  );
}