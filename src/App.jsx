// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StackPage from './components/StackPage';
import QueuePage from './components/QueuePage';
import LinkedListPage from './components/LinkedListPage';
import TreePage from './components/TreePage';
import GraphPage from './components/GraphPage';
import SelectionsortPage from './components/SelectionsortPage';
import ArrayPage from './components/ArrayPage';
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayPage />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/linked-list" element={<LinkedListPage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/selectionsort" element={<SelectionsortPage />} />
      </Routes> 
    </Router>
  );
}

export default App;
