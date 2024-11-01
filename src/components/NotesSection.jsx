import React from "react";
import { useComboContext } from "../comboContext";
const NotesSection = () => {
  const { combos, setCombos, notes } = useComboContext();

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
        placeholder={notes}
        onChange={handleNotesChange}
        value={notes}
      ></textarea>
    </div>
  );
};

export default NotesSection;
