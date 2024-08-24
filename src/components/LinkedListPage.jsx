import React, { useState } from "react";
import "../App.css"; // Import CSS for styling

const LinkedListPage = () => {
  const [list, setList] = useState([]); 
  const [value, setValue] = useState(""); 
  const handleAddNode = () => {
    if (value) {
      setList([...list, value]);
      setValue("");
    }
  };

  
  const handleRemoveNode = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Linked List Simulator</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleAddNode}>Add Node</button>
        <button onClick={handleRemoveNode}>Remove Node</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Linked List:</h3>
        <div className="linked-list-container">
          {list.map((item, index) => (
            <div key={index} className="linked-list-node">
              <span>{item}</span>
              {index < list.length - 1 && <span className="arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedListPage;

