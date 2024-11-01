import React from "react";

const ProgrammeForm = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="text-sm font-semibold">Programme Name</label>
        <input
          type="text"
          placeholder="Knee Rehab Programme"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm font-semibold">Exercise Combo</label>
        <select className="w-full p-2 border border-gray-300 rounded mt-1">
          <option>Select Combo</option>
          {/* Additional options */}
        </select>
      </div>
      {/* Tag buttons and Clear All button */}
      <div className="flex gap-2 mb-4">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
          Lower limb strengthening 1
        </span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
          Static standing balance
        </span>
        <button className="ml-auto text-red-500">Clear All</button>
      </div>
    </div>
  );
};

export default ProgrammeForm;
