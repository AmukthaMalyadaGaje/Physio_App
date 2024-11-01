import React, { createContext, useContext, useState } from "react";

const ComboContext = createContext();

export const useComboContext = () => {
  return useContext(ComboContext);
};

export const ComboProvider = ({ children }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
      }}
    >
      {children}
    </ComboContext.Provider>
  );
};
