import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    const board = canvasRef.current;
    ctx.current = board.getContext("2d");
    ctx.current.strokeStyle = "green";
    ctx.current.lineWidth = 2;
    ctx.current.lineCap = "round";
  }, []);

  return (
    <div>
      <canvas
        ref={(el) => (canvasRef.current = el)}
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
