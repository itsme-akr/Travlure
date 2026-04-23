import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ProfileQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    vibe: "",
    budget: [],
    interests: [],
    social: ""
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const toggleInterest = (item) => {
    if (answers.interests.includes(item)) {
      setAnswers({
        ...answers,
        interests: answers.interests.filter((i) => i !== item),
      });
    } else {
      setAnswers({
        ...answers,
        interests: [...answers.interests, item],
      });
    }
  };
  const toggleBudget = (b) => {
  if (answers.budget.includes(b)) {
    setAnswers({
      ...answers,
      budget: answers.budget.filter((i) => i !== b),
    });
  } else {
    setAnswers({
      ...answers,
      budget: [...answers.budget, b],
    });
  }
};

  const navigate = useNavigate();
  const finish = () => {
    localStorage.setItem("userProfile", JSON.stringify(answers));
    // redirect to discover
    navigate("/");
  };

 
  return (
    <div className="min-h-screen bg-cream pt-24 px-6 flex flex-col items-center">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl">

        {/* STEP INDICATOR */}
        <p className="text-sm text-gray-400 mb-4">
          Step {step} of 4
        </p>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">
              What vibe do you prefer?
            </h2>

            {["Chill", "Luxury", "Party", "Cultural"].map((v) => (
              <button
                key={v}
                onClick={() => setAnswers({ ...answers, vibe: v })}
                className={`block w-full mb-2 p-3 rounded-xl border ${
                  answers.vibe === v
                    ? "bg-magenta text-white"
                    : "bg-gray-50"
                }`}
              >
                {v}
              </button>
            ))}
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">
              What's your budget?
            </h2>

            {["$", "$$", "$$$", "$$$$"].map((b) => (
              <button
                key={b}
                onClick={() => toggleBudget(b)}
                className={`block w-full mb-2 p-3 rounded-xl border ${
                  answers.budget.includes(b)
                    ? "bg-magenta text-white"
                    : "bg-gray-50"
                }`}
              >
                {b}
              </button>
            ))}
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4">
              What are your interests?
            </h2>

            {["Food", "Music", "Art", "Nightlife"].map((i) => (
              <button
                key={i}
                onClick={() => toggleInterest(i)}
                className={`block w-full mb-2 p-3 rounded-xl border ${
                  answers.interests.includes(i)
                    ? "bg-magenta text-white"
                    : "bg-gray-50"
                }`}
              >
                {i}
              </button>
            ))}
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Who do you usually go out with?
            </h2>

            {["Solo", "Friends", "Family", "Date"].map((s) => (
              <button
                key={s}
                onClick={() => setAnswers({ ...answers, social: s })}
                className={`block w-full mb-2 p-3 rounded-xl border ${
                  answers.social === s
                    ? "bg-magenta text-white"
                    : "bg-gray-50"
                }`}
              >
                {s}
              </button>
            ))}
          </>
        )}

        {/* NAVIGATION */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={prev} className="text-gray-500">
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              onClick={next}
              className="bg-olive px-4 py-2 rounded-lg text-white"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={finish}
              className="bg-magenta px-4 py-2 rounded-lg text-white"
            >
              Finish
            </button>
          )}
        </div>

      </div>
    </div>
  );
}