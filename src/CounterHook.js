import React, {useState, useContext} from "react";
import { CreateContext } from "./App";

function CounterHook({title}){
    const [counter, setCounter] = useState(0);
    const value = useContext(CreateContext);

    const increase = () =>{
        setCounter(counter + 1);
    }

    const decrease = () =>{
        setCounter(counter - 1);
    }
    return (
        <>
            <div>
                <h1>{title}</h1>
                <button style={value} onClick={increase}>+</button>
                <h3>{counter}</h3>
                <button style={value} onClick={decrease}>-</button>
            </div>
        </>
    )
}

export default CounterHook;