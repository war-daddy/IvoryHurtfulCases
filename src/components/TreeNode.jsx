import React from "react";

const TreeNode = ({ value, left, right }) => {
  return (
    <div className="tree-node">
      <div className="node-value">{value}</div>
      <div className="node-children">
        {left ? <TreeNode {...left} /> : <div className="empty-node">null</div>}
        {right ? <TreeNode {...right} /> : <div className="empty-node">null</div>}
      </div>
    </div>
  );
};

export default TreeNode;
