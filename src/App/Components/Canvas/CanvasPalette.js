import React, { useEffect, useRef, useState } from "react";

const CanvasPalette = () => {
  let [xAxis, setXAxis] = useState(300);
  let [yAxis, setYAxis] = useState(400);
  let [enableDraw, setEnableDraw] = useState(false);
  let [strokeColor, setStrokeColor] = useState("#FFA500");
  let [strokeWidth, setStrokeWidth] = useState("10");
  let canvasRef = useRef();
  let ctx;

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round ";
    if (enableDraw) {
      ctx.lineTo(xAxis, yAxis);
      ctx.stroke();
    }
  }, [canvasRef, strokeWidth, strokeColor, enableDraw, xAxis, yAxis]);

  function onEnableDoodle() {
    setEnableDraw(!enableDraw);
    ctx.beginPath();
  }

  function onDisableDoodle() {
    setEnableDraw(false);
  }

  function onDrawDoodle(e) {
    setXAxis(e.clientX);
    setYAxis(e.clientY);
  }

  function onRangeSlide(e) {
    e.persist();
    setStrokeWidth(e.target.value);
  }

  function onChangeStrokeColor(e) {
    e.persist();
    setStrokeColor(e.target.value);
  }

  function onClearCanvas() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  return (
    <div className="margin-auto">
      <div className="flex-center">
        <div className="margin-auto">
          <input
            type="color"
            id="head"
            name="head"
            title="Color"
            value={strokeColor}
            onChange={onChangeStrokeColor}
          />
        </div>
        <div className="slidecontainer">
          <input
            className="slider"
            title="Stroke Width"
            id="range"
            type="range"
            min="1"
            max="100"
            value={strokeWidth}
            onChange={onRangeSlide}
          />
        </div>
        <div className="margin-auto">
          <button className="clear-button" onClick={onClearCanvas}>
            Clear
          </button>
        </div>
      </div>
      <canvas
        onMouseMove={onDrawDoodle}
        onMouseDown={onEnableDoodle}
        onMouseUp={onDisableDoodle}
        id="canvas"
        ref={canvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
      />
    </div>
  );
};

export default CanvasPalette;
