// ComboNameModal.js
import React, { useState } from "react";

const ComboNameModal = ({ onClose, onSave }) => {
  const [comboName, setComboName] = useState("");

  const handleSave = () => {
    onSave(comboName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md w-1/3">
        <h2 className="text-lg font-semibold mb-4">Enter Combo Name</h2>
        <input
          type="text"
          value={comboName}
          onChange={(e) => setComboName(e.target.value)}
          placeholder="Combo Name"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboNameModal;
