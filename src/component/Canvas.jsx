import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  useEffect(() => {
    const board = canvasRef.current;
    ctx.current = board.getContext("2d");
    ctx.current.lineWidth = 2;
    ctx.current.strokeStyle = "green";
    ctx.current.lineCap = "round";
  }, []);

  const handelMouseDown = (e) => {
    const { offsetX, offsetY } = e;
    ctx.current.beginPath();
    ctx.current.moveTo(offsetX, offsetY);
    canvasRef.current.addEventListener("mousemove", handelDraw);
    canvasRef.current.addEventListener("mouseup", stopDrawing);
  };

  const handelDraw = (e) => {
    const { offsetX, offsetY } = e;

    ctx.current.lineTo(offsetX, offsetY);
    ctx.current.stroke();
  };

  const stopDrawing = () => {
    canvasRef.current.removeEventListener("mousemove", handelDraw);
    canvasRef.current.removeEventListener("mouseup", stopDrawing);
  };

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}>
      <canvas
        onMouseDown={handelMouseDown}
        ref={(el) => (canvasRef.current = el)}
        width={400}
        height={400}
        style={{ border: "1px solid black" }}>
        some text
      </canvas>
    </div>
  );
};

export default Canvas;
