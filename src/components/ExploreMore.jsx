import { FiCompass, FiMessageCircle, FiMail } from "react-icons/fi";

export default function ExploreMore() {
  return (
    <div className="bg-white py-12 px-6 border-t">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">

        {/* Explore */}
        <div className="flex flex-col items-center gap-2">
          <FiCompass className="text-magenta text-xl" />
          <h3 className="font-heading text-lg">Discover</h3>
          <p className="text-gray-500 text-sm">
            Find places tailored to your vibe
          </p>
        </div>

        {/* Feedback */}
        <div className="flex flex-col items-center gap-2">
          <FiMessageCircle className="text-magenta text-xl" />
          <h3 className="font-heading text-lg">Feedback</h3>
          <p className="text-gray-500 text-sm">
            Help us improve your experience
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2">
          <FiMail className="text-magenta text-xl" />
          <h3 className="font-heading text-lg">Contact</h3>
          <p className="text-gray-500 text-sm">
            Questions or suggestions?
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © 2026 Travlure • Crafted for personalized discovery
      </div>

    </div>
  );
}