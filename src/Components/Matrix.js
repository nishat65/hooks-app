import React, { useState, useEffect, useContext } from "react"
import Grid from "./Grid"
import StarGrid from './StarGrid'
import DisplayButton from './DisplayButton'
import "../styles.css"
import { globalContext } from "../ContextApi/ContextApi"

function make2dArray(col, row) {
  let twoDArray = []
  for (let i = 0; i < col; i++) {
    let currentRowArray = []
    for (let j = 0; j < row; j++) {
      currentRowArray.push([])
    }
    twoDArray.push(currentRowArray)
  }
  return twoDArray
}

export default function Matrix() {
  let [grid, setGrid] = useState([])
  let [color, setColor] = useState([])
  let [starGrid, setStarGrid] = useState([])
  const msg = useContext(globalContext)
  useEffect(() => {
    let node = [], nodeColor = []
    for (let col = 0; col < 10; col++) {
      let currentRow = []
      let currentRowColor = []
      for (let row = 0; row < 10; row++) {
        currentRow.push([])
        currentRowColor.push(['#eee'])
      }
      node.push(currentRow)
      nodeColor.push(currentRowColor)
    }

    setGrid(node)
    setColor(nodeColor)
  }, [])

  useEffect(() => {
    let twoDArray = make2dArray(4, 4)
    setStarGrid(twoDArray)
  }, [])

  const onClick = (e, colIndex, rowIndex) => {
    if (colIndex === rowIndex) {
      let colour = 'red'
      let colorArray = [...color]
      colorArray[rowIndex][colIndex] = [colour]
      setColor(colorArray)
      return 
    }
    let colour = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    let colorArray = [...color]
    colorArray[rowIndex][colIndex] = [colour]
    setColor(colorArray)
  }

  const onDisplay = (e) => {
    let roundColIndex = Math.round(Math.random() * 10) + 1
    let roundRowIndex = Math.round(Math.random() * 10) + 1
    let twoDArray = make2dArray(roundColIndex, roundRowIndex)
    setStarGrid(twoDArray)
  }

  return (
    <div className="grid-holder">
      {
        starGrid.map((startCol, colIndex) => {
          return (
            <div key={colIndex}>{
              startCol.map((rowCol, rowIndex) => {
                return (
                  <StarGrid key={rowIndex} />
                )
              })
            }</div>
          )
        })
      }
      {
        grid.map((col, colIndex) => {
          return (
            <div key={colIndex}>
              {col.map((row, rowIndex) => {
                return (
                  <Grid
                    colIndex={colIndex}
                    rowIndex={rowIndex}
                    color={color}
                    onClick={onClick}
                    key={rowIndex} />
                )
              })}
            </div>
          )
        })
      }
      <DisplayButton
        onDisplay={(e) => onDisplay(e)}
      />
    </div>
  );
}