import React, {useState} from "react";

function CounterHook({title}){
    return (
        <>
            <div>
                <h1>{title}</h1>
                <button>+</button>
                <h3>0</h3>
                <button>-</button>
            </div>
        </>
    )
}

export default CounterHook;