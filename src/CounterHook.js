import React, {useState} from "react";

function CounterHook({title}){
    const [counter, setCounter] = useState(0);

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
                <button onClick={increase}>+</button>
                <h3>{counter}</h3>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}

export default CounterHook;