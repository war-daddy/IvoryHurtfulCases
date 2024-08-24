import React, { useState } from 'react';
import '../App.css'; 

const StackPage = () => {
  const [stack, setStack] = useState([]); 
  const [value, setValue] = useState(''); 
  const [top, setTop] = useState(-1); 
  const [stackLength, setStackLength] = useState(0);

  const handlePush = () => {
    if (value) {
      setStack([...stack, value]); 
      setTop(top + 1); 
      setValue(''); 
      setStackLength(stack.length+1);
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1)); 
      setTop(top - 1);
       setStackLength(stack.length-1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Stack Simulator</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Stack:</h3>
        <div className="stack-container">
          {stack.map((item, index) => (
            <div
              key={index}
              className={`stack-item ${index === top ? 'top' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
        {top >= 0 && <div className="top-indicator">Top: {stack[top]}</div>}
        {stackLength > 0 && <div className="stack-length">Stack Length: {stackLength}</div>}
      </div>
    </div>
  );
};

export default StackPage;
