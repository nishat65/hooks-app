import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { globalContext } from '../ContextApi/ContextApi'

const ContextButton = ({onClick}) => {
    const header = useContext(globalContext)
    return (
        <Card>
            <h1 className="context-header">{header.value}</h1>
        <div>
            <button onClick={onClick} className="display-button">Click Me</button>
        </div>
        </Card>
    );
}

export default ContextButton;