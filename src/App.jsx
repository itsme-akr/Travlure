import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import MyPlaces from "./pages/MyPlaces";
import PlaceDetail from "./pages/PlaceDetail";
import Profile from "./pages/Profile";
import ProfileQuiz from "./pages/ProfileQuiz";

import { SaveProvider } from "./context/SaveContext";

export default function App() {
  return (
    <SaveProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/places" element={<MyPlaces />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<ProfileQuiz />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
        </Routes>
      </Router>
    </SaveProvider>
  );
}