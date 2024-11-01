import React, { useEffect } from "react";
import { useComboContext } from "../comboContext";

const ProgrammeForm = () => {
  const {
    savedCombos,
    setSavedCombos,
    selectedCombos,
    setSelectedCombos,
    setFetchedExercises,
    setSelectedDays,
    setFrequency,
    setNotes,
  } = useComboContext();

  const fetchCombos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/saved_combos", {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch saved combos");

      const data = await response.json();
      setSavedCombos(data);
      console.log("Fetched saved combos:", savedCombos);
    } catch (error) {
      console.error("Error fetching combos:", error);
    }
  };
  const fetchSavedCombo = async () => {
    try {
      console.log("Saved Combo :", selectedCombos);
      const response = await fetch(
        `http://localhost:5000/api/selcted_combo/${selectedCombos}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) throw new Error("Failed to fetch saved combos");

      const data = await response.json();
      setFetchedExercises(data[0].exercises);
      setSelectedDays(data[0].days);
      setFrequency(data[0].dailyFrequency);
      setNotes(data[0].notes);
    } catch (error) {
      console.error("Error fetching combos:", error);
    }
  };

  useEffect(() => {
    fetchCombos();
  }, []);

  const handleComboSelect = (event) => {
    const selectedComboName = event.target.value;
    setSelectedCombos(selectedComboName);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <label className="text-sm font-semibold">Exercise Combo</label>
      <div className="flex flex-row">
        <select
          className="w-1/2 border border-gray-300 rounded"
          onChange={handleComboSelect}
        >
          <option>Select Combo</option>
          {savedCombos?.map((combo, index) => (
            <option key={index} value={combo} className="text-black">
              {combo}
            </option>
          ))}
        </select>
        <button
          onClick={fetchSavedCombo}
          className="m-6 p-3 text-1xl font-semibold bg-blue-300 rounded-lg shadow hover:bg-blue-400 focus:outline-none"
        >
          Fetch Combos
        </button>
      </div>
    </div>
  );
};

export default ProgrammeForm;
