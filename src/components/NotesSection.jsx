import React from "react";

const NotesSection = ({ combos, setCombos }) => {
  const handleNotesChange = (e) => {
    setCombos({
      ...combos,
      notes: e.target.value,
    });
  };

  return (
    <div className="mt-4">
      <label className="text-sm font-semibold">Therapist Notes</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mt-1"
        placeholder="Add Notes"
        onChange={handleNotesChange}
      ></textarea>
    </div>
  );
};

export default NotesSection;
