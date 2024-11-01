import React from "react";
import { ComboProvider } from "./comboContext";
import Dropdown from "./components/DropDown";
const App = () => {
  return (
    <ComboProvider>
      <Dropdown />
    </ComboProvider>
  );
};

export default App;
