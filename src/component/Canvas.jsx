import React from "react";

const Canvas = () => {
  return (
    <div>
      <canvas
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
