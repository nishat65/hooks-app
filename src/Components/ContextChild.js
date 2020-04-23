import React, { useState } from "react"
import { globalContext } from '../ContextApi/ContextApi'
import ContextButton from "./ContextButton";
import './App.css'

export default function ContextChild() {

  const [state, setState] = useState({value: 'Context API'})
  function clickHandler(){
    setState({value: 'Changed Header'})
  }

  return (
    <div className="grid-holder">
      <globalContext.Provider value={state}>
        <ContextButton onClick={clickHandler}/>
      </globalContext.Provider>
    </div>
  );
}