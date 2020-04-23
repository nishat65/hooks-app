import React from 'react';

const Grid = ({ onClick, rowIndex, colIndex, color, onDisplayName }) => {

    const conditionalColorRender = (colorIndex) => {
        return { backgroundColor: colorIndex }
    }

    const colorChange = () => {
        for (let row = 0; row < color[colIndex][rowIndex].length; row++) {
            return conditionalColorRender(color[colIndex][rowIndex][row])
        }
    }

    return (
        <div
            style={colorChange()}
            onClick={(e) => onClick(e, rowIndex, colIndex)}
            className="grid ">
        </div>
    );
}

export default Grid;