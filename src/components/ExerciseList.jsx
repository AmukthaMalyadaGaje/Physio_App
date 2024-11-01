import React, { useState } from "react";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ exercises, combos, setCombos }) => {
  // const exercises = ["Knee Bends", "Forward Lunge", "VOXR1"];

  return (
    <div className="mt-4">
      {exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.name}
          name={exercise.name}
          data={exercise}
          combos={combos}
          setCombos={setCombos}
        />
      ))}
    </div>
  );
};

export default ExerciseList;
