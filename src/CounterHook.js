import React, {useState, useContext} from "react";
import CountHookTwo from "./CountHookTwo";
import { CreateContext } from "./App";

function CounterHook({title}){
    const [counter, setCounter] = useState(0);
    const value = useContext(CreateContext);
    const [visibility, setVisibility] = useState(true);

    const increase = () =>{
        setCounter(counter + 1);
    }

    const decrease = () =>{
        setCounter(counter - 1);
    }

    const visibilityHandler = () =>{
        setVisibility(!visibility);
    }

    return (
        <>
            <div>
                <h1>{title}</h1>
                <button style={value} onClick={increase}>+</button>
                <h3>{counter}</h3>
                <button style={value} onClick={decrease}>-</button>
                <br/>
                <button onClick={visibilityHandler}>Counter 2</button>
                <hr/>
                { visibility ? <CountHookTwo /> : null }
            </div>
        </>
    )
}

export default CounterHook;