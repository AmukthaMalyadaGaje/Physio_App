import React from "react";
import ProgrammeForm from "./components/ProgrammeForm";
import ExerciseList from "./components/ExerciseList";
import FrequencySettings from "./components/FrequencySettings";
import NotesSection from "./components/NotesSection";
import Dropdown from "./components/DropDown";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center">
        <Dropdown />
      </div>
      {/* <h1 className="text-2xl font-bold mb-4">Exercise Programme</h1> */}
      {/* <ProgrammeForm /> */}
    </div>
  );
}

export default App;
