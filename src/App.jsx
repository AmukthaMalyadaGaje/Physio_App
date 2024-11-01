import React from "react";
import { ComboProvider } from "./comboContext";
import Dropdown from "./components/Dropdown";
const App = () => {
  return (
    <ComboProvider>
      <Dropdown />
    </ComboProvider>
  );
};

export default App;
