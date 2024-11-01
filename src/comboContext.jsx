import React, { createContext, useContext, useState } from "react";

const ComboContext = createContext();

export const useComboContext = () => {
  return useContext(ComboContext);
};

export const ComboProvider = ({ children }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCombos, setSelectedCombos] = useState("");
  const [notes, setNotes] = useState("");
  const [savedCombos, setSavedCombos] = useState([]);
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [frequency, setFrequency] = useState(10);
  const [combos, setCombos] = useState({
    exercises: {},
    days: [],
    frequency: "",
    notes: "",
    name: "",
  });

  return (
    <ComboContext.Provider
      value={{
        selectedCombos,
        setSelectedCombos,
        savedCombos,
        setSavedCombos,
        frequency,
        setFrequency,
        selectedExercises,
        setSelectedExercises,
        selectedCategory,
        setSelectedCategory,
        fetchedExercises,
        setFetchedExercises,
        combos,
        selectedDays,
        setSelectedDays,
        setCombos,
        notes,
        setNotes,
      }}
    >
      {children}
    </ComboContext.Provider>
  );
};
