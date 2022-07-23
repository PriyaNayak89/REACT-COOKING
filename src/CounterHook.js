import React, { useState, useContext } from "react";
import { patternContext } from "./App";

export default function CounterHook({initialCount}){
    const [ state, setState ]= useState({initialCount});
    const [ count, setCount] = useState(initialCount);
    const style = useContext(patternContext);
    return (
        <div>
            <button style = {style} onClick={ () =>{ setCount( prevState => prevState + 1)}}>  +  </button>
            <span> {count} </span>
            <button style ={style} onClick={ () => { setCount(prevState => prevState -1)}}> - </button>
        </div>
    )
} 