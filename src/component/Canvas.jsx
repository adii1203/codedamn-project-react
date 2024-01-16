import React, { useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  return (
    <div>
      <canvas
        ref={(el) => (canvasRef = el)}
        data-testid="myCanvas"
        width="400"
        height="400"
        style={{
          border: "1px solid red",
        }}></canvas>
    </div>
  );
};

export default Canvas;
