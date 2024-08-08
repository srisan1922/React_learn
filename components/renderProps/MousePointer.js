import React, { useState } from "react";

function MousePointer({ render }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handleMouseTracker = (e) => {
    setPointer({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      style={{ backgroundColor: "blueviolet", color: "black" }}
      onMouseMove={handleMouseTracker}
    >
      {render(pointer)}
    </div>
  );
}

export default MousePointer;
