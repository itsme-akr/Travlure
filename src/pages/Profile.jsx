import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const profile =
    JSON.parse(localStorage.getItem("userProfile")) || null;

  return (
    <div className="min-h-screen bg-cream pt-24 px-6">

      <h1 className="text-3xl font-bold mb-8">
        Your Profile
      </h1>

      {!profile ? (
        <div>
          <p className="mb-4">
            You haven’t completed your profile yet.
          </p>

          <button
            onClick={() => navigate("/quiz")}
            className="bg-olive px-4 py-2 rounded-lg text-white"
          >
            Take Quiz
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-3">Preferences</h2>
            <p><strong>Vibe:</strong> {profile.vibe}</p>
            <p><strong>Budget:</strong> {profile.budget?.join(", ")}</p>
            <p><strong>Interests:</strong> {profile.interests.join(", ")}</p>
            <p><strong>Social:</strong> {profile.social}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-3">Actions</h2>

            <button
              onClick={() => navigate("/quiz")}
              className="mb-3 block w-full bg-magenta text-white py-2 rounded-lg"
            >
              Update Preferences
            </button>

            <button
              onClick={() => localStorage.removeItem("userProfile")}
              className="block w-full bg-gray-200 py-2 rounded-lg"
            >
              Reset Profile
            </button>
          </div>

        </div>
      )}
    </div>
  );
}