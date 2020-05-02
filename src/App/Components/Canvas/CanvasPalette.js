import React, { useEffect, useRef, useState } from "react";

const CanvasPalette = () => {
  let [xAxis, setXAxis] = useState(300);
  let [yAxis, setYAxis] = useState(400);
  let [chooseStrokeStyle, setChooseStrokeStyle] = useState(null);
  let canvasRef = useRef();
  let ctx;

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.moveTo(300, 300);
    ctx.lineTo(xAxis, yAxis);
    ctx.stroke();
  }, [canvasRef, xAxis, yAxis]);

  function onDrawDoodleEnable() {}

  function onDrawDoodle(e) {
    setXAxis(e.clientX);
    setYAxis(e.clientY);
  }

  return (
    <div className="margin-auto">
      <canvas
        onMouseMove={onDrawDoodle}
        onMouseDown={onDrawDoodleEnable}
        id="canvas"
        ref={canvasRef}
        height="500px"
        width="700px"
      />
    </div>
  );
};

export default CanvasPalette;
