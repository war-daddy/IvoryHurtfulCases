import React, { useState } from "react";
import "../App.css"; // Assuming this is where your CSS is defined

const QueuePage = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");

  const handleEnq = () => {
    if (value) {
      setQueue([...queue, value]);
      setValue("");
    }
  };

  const handleDeq = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1)); // Remove the first element
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Queue Simulator</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleEnq}>Enqueue</button>
        <button onClick={handleDeq}>Dequeue</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Queue:</h3>
        <div className="queue-container">
          {queue.map((item, index) => (
            <span
              key={index}
              className={`queue-item ${
                index === 0 ? "head" : index === queue.length - 1 ? "tail" : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        {queue.length > 0 && (
          <div className="queue-indicators">
            <div>Head: {queue[0]}</div>
            <div>Tail: {queue[queue.length - 1]}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueuePage;
