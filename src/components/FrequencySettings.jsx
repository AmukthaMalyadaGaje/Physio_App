import React from "react";
import { Plus, Minus } from "lucide-react";
import { useComboContext } from "../comboContext";

const FrequencySettings = () => {
  const {
    combos,
    setCombos,
    selectedDays = [],
    setSelectedDays,
    frequency,
    setFrequency,
  } = useComboContext();

  const days = [
    { key: "Su", value: "Sunday" },
    { key: "Mo", value: "Monday" },
    { key: "Tu", value: "Tuesday" },
    { key: "We", value: "Wednesday" },
    { key: "Th", value: "Thursday" },
    { key: "Fr", value: "Friday" },
    { key: "Sa", value: "Saturday" },
  ];

  const handleDayClick = (day) => {
    const updatedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    setSelectedDays(updatedDays);
    setCombos({ ...combos, days: updatedDays, frequency });
  };

  const handleSelectAll = () => {
    const allDays = days.map((day) => day.value);
    setSelectedDays(allDays);
    setCombos({ ...combos, days: allDays, frequency });
  };

  const handleFrequencyChange = (increment) => {
    const newFrequency = Math.max(0, frequency + increment);
    setFrequency(newFrequency);
    setCombos({ ...combos, days: selectedDays, frequency: newFrequency });
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center justify-between">
        <div className="text-gray-600 font-medium">Day of Week</div>
        <button
          onClick={handleSelectAll}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
        >
          Select All
        </button>
      </div>

      <div className="flex gap-2">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(day.value)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
              selectedDays.includes(day.value)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {day.key}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-gray-600 font-medium">Daily Frequency</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleFrequencyChange(-1)}
            className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>

          <span className="w-8 text-center text-gray-600">{frequency}</span>

          <button
            onClick={() => handleFrequencyChange(1)}
            className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>

          <span className="text-gray-600 ml-2">sessions/day</span>
        </div>
      </div>
    </div>
  );
};

export default FrequencySettings;
