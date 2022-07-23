 import Counter from "./Counter";
import CounterHook from "./CounterHook";
import React, { useState } from "react";

export const patternContext = React.createContext();
function App() {

  const [patternColor, setPatternColor] = useState('blue');

 return (
   <patternContext.Provider value = {{ backgroundColor : patternColor}}>
     <p>Counter</p>
     <Counter initialCount = { 0 }></Counter>
     <p>Counter Hook</p>
     <CounterHook initialCount = { 0 }></CounterHook>
     <button onClick={ () => { setPatternColor( prevColor => {
       return prevColor === 'blue' ? 'green' : 'blue';
     })}}> Change Pattern Color</button>
   </patternContext.Provider>
 )
}
export default App;
