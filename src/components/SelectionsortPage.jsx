import React, { useState, useEffect } from "react";
import "../App.css"; // Ensure you have this for custom styles

const SelectionSortVisualizer = () => {
  const [array, setArray] = useState([7, 2, 9, 1, 5, 6, 3, 4, 10, 8, 0, 9]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const performSort = () => {
      const arr = [...array];
      const newSteps = [];
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] <= arr[minIndex]) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
          newSteps.push({ array: [...arr], index1: i, index2: minIndex });
        }
      }
      setSteps(newSteps);
    };

    performSort();
  }, [array]);

  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setArray(steps[currentStep].array);
        setCurrentStep(currentStep + 1);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Selection Sort Visualization</h2>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value*20}px`,
              backgroundColor:
                steps[currentStep]?.index1 === index || steps[currentStep]?.index2 === index
                  ? "red"
                  : "blue"
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionSortVisualizer;
