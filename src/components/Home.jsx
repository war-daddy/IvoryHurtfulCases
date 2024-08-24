// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Data Structure & Algorithm Simulator</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button className="primary-btn" onClick={() => navigate("/array")}>Array</button>
        <button className="primary-btn" onClick={() => navigate("/stack")}>Stack</button>
        <button className="primary-btn" onClick={() => navigate("/queue")}>Queue</button>
        <button className="primary-btn" onClick={() => navigate("/linked-list")}>Linked List</button>
        <button className="primary-btn" onClick={() => navigate("/tree")}>Tree</button>
        <button className="primary-btn" onClick={() => navigate("/graph")} disabled={true}>Graph</button>
        <button className="primary-btn" onClick={() => navigate("/selectionsort")}>Selection sort</button>
      </div>
    </div>
  );
};

export default Home;
