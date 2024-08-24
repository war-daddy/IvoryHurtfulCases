import React, { useState } from "react";
import TreeNode from "./TreeNode";
import "../App.css";

const TreePage = () => {
  const [tree, setTree] = useState(null);
  const [value, setValue] = useState("");

  const addNode = (root, newNode) => {
    if (!root) return newNode;

    if (newNode.value < root.value) {
      root.left = addNode(root.left, newNode);
    } else {
      root.right = addNode(root.right, newNode);
    }
    return root;
  };

  const handleAddNode = () => {
    if (value) {
      const newNode = { value: parseInt(value), left: null, right: null };
      setTree(addNode(tree, newNode));
      setValue("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Binary Search Tree Simulator</h2>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleAddNode}>Add Node</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Tree Structure:</h3>
        <div className="tree-container">
          {tree ? <TreeNode {...tree} /> : <div>Tree is empty</div>}
        </div>
      </div>
    </div>
  );
};

export default TreePage;
