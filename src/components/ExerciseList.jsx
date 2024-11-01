import React from "react";
import ExerciseItem from "./ExerciseItem";
import { useComboContext } from "../comboContext";

const ExerciseList = () => {
  const { fetchedExercises = [], setFetchedExercises } = useComboContext(); // Default to an empty array

  return (
    <div className="mt-4">
      {Array.isArray(fetchedExercises) &&
        fetchedExercises.map((exercise) => (
          <ExerciseItem
            key={exercise._id}
            name={exercise.name}
            data={exercise}
          />
        ))}
    </div>
  );
};

export default ExerciseList;
