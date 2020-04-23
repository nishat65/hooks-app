import React from 'react'

const DisplayButton = ({ onDisplay }) => {
    return (
        <button
        className="display-button"
        onClick={onDisplay}
        >
            Click Me
        </button>
    );
}

export default DisplayButton;