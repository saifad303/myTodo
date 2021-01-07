import React,{ useState, useContext } from 'react';
import { CreateContext } from "./App";

function CountHookTwo(){
    const [counter, setCounter] = useState({count: 0});
    const value = useContext(CreateContext);

    const increase = () =>{
        setCounter((prevCount) =>{
            return { count: prevCount.count + 1 }
        });
    }

    const decrease = () =>{
        setCounter((prevCount) =>{
            return { count: prevCount.count - 1 }
        });
    };
    return (
        <>
            <div>
                <button style={value} onClick={increase}>+</button>
                <p>{counter.count}</p>
                <button style={value} onClick={decrease}>-</button>
            </div>
        </>
    )
}

export default CountHookTwo;