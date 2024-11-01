import React, { useState, useRef, useEffect } from "react";
import ExerciseList from "./ExerciseList";
import NotesSection from "./NotesSection";
import FrequencySettings from "./FrequencySettings";
import ComboNameModal from "./ComboNameModel";

const bodyPartCategories = [
  {
    category: "Lower Body",
    exercises: ["Squats", "Lunges", "Deadlifts", "Leg Press", "Calf Raises"],
  },
  {
    category: "Upper Body",
    exercises: [
      "Push-Ups",
      "Pull-Ups",
      "Dumbbell Shoulder Press",
      "Bent Over Rows",
      "Tricep Dips",
    ],
  },
  {
    category: "Core",
    exercises: [
      "Plank",
      "Russian Twists",
      "Bicycle Crunches",
      "Dead Bugs",
      "Bridges",
    ],
  },
  {
    category: "Cardio",
    exercises: ["Running", "Cycling", "Jump Rope", "HIIT", "Rowing"],
  },
  {
    category: "Flexibility",
    exercises: [
      "Hamstring Stretch",
      "Quadriceps Stretch",
      "Shoulder Stretch",
      "Hip Flexor Stretch",
      "Cat-Cow Stretch",
    ],
  },
];

const Dropdown = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [combos, setCombos] = useState({
    exercises: {},
    days: [],
    frequency: "",
    notes: "",
    name: "",
  });
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectExercise = (exercise, category) => {
    setSelectedExercises((prev) => [...prev, exercise]);
    setSelectedCategory(category);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setHoveredCategory(null); // Reset hovered category
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const handleComboSave = async (name) => {
    const updatedCombos = { ...combos, name };
    setCombos(updatedCombos);

    try {
      console.log("Combo:", combos);
      const response = await fetch("http://localhost:5000/api/combos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ combos: updatedCombos }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Successfully saved", data);
    } catch (e) {
      console.error("Error:", e);
    }
  };
  const handleSaveAsComboClick = () => {
    setShowModal(true);
  };

  // Function to fetch exercises from backend based on selected category and exercises
  const fetchExercises = async () => {
    try {
      console.log("Selcted Category:", selectedCategory);
      console.log(" Exercises:", selectedExercises);
      const response = await fetch("http://localhost:5000/api/exercises", {
        method: "POST", // Using POST to send data
        headers: {
          "Content-Type": "application/json", // Setting content type to JSON
        },
        body: JSON.stringify({
          category: selectedCategory,
          exercises: selectedExercises,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchedExercises(data);
      console.log("Fetched exercises:", data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setHoveredCategory(null); // Close dropdown after selection
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <>
      <div className="flex flex-col w-full h-auto">
        <div className="flex h-auto w-full">
          <div className="w-1/2 p-8">
            <h2 className="text-xl font-bold mb-4">Select Exercises</h2>
            <div className="relative group" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-600 text-white hover:bg-green-700 focus:outline-none"
              >
                Body Parts
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                  {bodyPartCategories.map((category, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setSelectedCategory(category.category)}
                      >
                        {category.category}
                      </div>

                      {hoveredCategory === category && (
                        <div className="absolute left-full top-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                          {category.exercises.map((exercise, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                handleSelectExercise(
                                  exercise,
                                  category.category
                                )
                              }
                            >
                              {exercise}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-1/2 p-8 flex flex-col">
            <p className="text-xl font-bold w-full mb-4">Selected Exercises</p>
            <div className="flex flex-wrap gap-2">
              {selectedExercises.length > 0 ? (
                selectedExercises.map((exercise, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full"
                  >
                    {exercise}
                  </span>
                ))
              ) : (
                <span className="text-gray-600">No exercises selected</span>
              )}
            </div>
          </div>
        </div>

        <div className="m-4">
          <button
            onClick={fetchExercises}
            className="m-6 p-3 text-1xl font-semibold bg-blue-300 rounded-lg shadow hover:bg-blue-400 focus:outline-none"
          >
            Fetch Exercises
          </button>
        </div>
        <ExerciseList
          exercises={fetchedExercises}
          setFetchedExercises={setFetchedExercises}
          combos={combos}
          setCombos={setCombos}
        />
        <FrequencySettings combos={combos} setCombos={setCombos} />
        <NotesSection combos={combos} setCombos={setCombos} />

        <div className="mt-4 flex gap-4">
          <button
            onClick={handleSaveAsComboClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save as Combo
          </button>
        </div>
      </div>

      {showModal && (
        <ComboNameModal
          onClose={() => setShowModal(false)}
          onSave={handleComboSave}
        />
      )}
    </>
  );
};

export default Dropdown;
