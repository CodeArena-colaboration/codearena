// src/components/QuestionCard.js
// src/components/QuestionCard.tsx
'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

const options = ['Beginner', 'Intermediate', 'Advanced'] as const;

type OptionType = typeof options[number];

const QuestionCard: React.FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      // Handle the continue action, e.g., saving the selection or navigating to the next question
      console.log("Selected option:", selectedOption);
      router.push("/my_profile");
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 w-80 text-center text-white shadow-lg">
      <h2 className="text-lg mb-6">How do you categorize yourself?</h2>
      <div className="flex flex-col gap-4 mb-6">
        {options.map((option) => (
          <div
            key={option}
            className={`py-2 px-4 rounded-md cursor-pointer font-bold text-white ${
              selectedOption === option
                ? 'bg-[rgba(118,210,218,1)] scale-105'
                : 'bg-gray-700 hover:bg-gray-600'
            } transition-all duration-200`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        className="bg-gradient-to-r from-[rgba(118,210,218,1)] to-teal-800 text-white py-2 px-6 rounded-full font-semibold transition duration-300 hover:from-teal-800 hover:to-[rgba(118,210,218,1)]"
        onClick={handleContinue}
        disabled={!selectedOption}  // Disable button if no option is selected
      >
        Continue &gt;
      </button>
    </div>
  );
};

export default QuestionCard;
