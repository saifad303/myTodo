import './App.css';
import CounterHook from "./CounterHook";
import React, {useState, createContext} from "react";

export const CreateContext = createContext();

function App() {
  const [theme, setTheme] = useState('red');

  const changeColor = () =>{
    setTheme((prevTheme) =>{
      return prevTheme === 'red' ? 'green' : 'red'
    });
  }


  return (
    <>
      <CreateContext.Provider value={{ backgroundColor: theme }}>
        <div className="App">
          <CounterHook title={"my counter app"}/>
          <button onClick={changeColor}>Change color</button>
        </div>
      </CreateContext.Provider>
    </>
  );
}

export default App;
