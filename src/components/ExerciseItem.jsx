import React, { useState } from "react";

const ExerciseItem = ({ name, data, setCombos, exercises }) => {
  // Initialize `ex` state with `data`
  const [ex, setEx] = useState(data);

  // `handleChange` function to update specific fields in the `ex` state
  const handleChange = (e, key) => {
    const value = e.target.value;
    const updatedEx = {
      ...ex,
      [key]: value,
    };
    setEx(updatedEx);

    // Update `combos` state with the modified exercise data
    setCombos((prevCombos) => ({
      ...prevCombos,
      exercises: {
        ...prevCombos.exercises,
        [name]: JSON.stringify(updatedEx),
      },
    }));
  };

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-2">
      <div className="flex justify-between">
        <span className="font-semibold">{name}</span>
        <button className="text-blue-500">Duplicate</button>
      </div>

      {/* Exercise settings for Sets, Reps, Hold Time, and Weight */}
      <div className="flex justify-evenly mt-2">
        <div className="flex justify-between px-3">
          <p className="p-4">Sets</p>
          <input
            type="number"
            value={ex.sets}
            onChange={(e) => handleChange(e, "sets")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between px-3">
          <p className="p-4">Reps</p>
          <input
            type="number"
            value={ex.reps}
            onChange={(e) => handleChange(e, "reps")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between px-3">
          <p className="p-4">Hold Time</p>
          <input
            type="number"
            value={ex.holdTime}
            onChange={(e) => handleChange(e, "holdTime")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between px-3">
          <p className="p-4">Weight</p>
          <input
            type="number"
            value={ex.weights}
            onChange={(e) => handleChange(e, "weights")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
