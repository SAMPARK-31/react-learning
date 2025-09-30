import { useState } from "react";
import Chai from "./chai";


function App() {

  let [counter,setcounter]=useState(15)
  // let counter = 15
  const addvalue = () =>{
 
    
    counter+=1;
    setcounter(counter)

    
  }
  const removevalue = () =>{
    setcounter(counter-1)
  }
 

  return (
    <>
    <h1>chai aur react</h1>
    <h1>counter value:{counter}</h1>

    <button
    onClick={addvalue}>Add value{counter}</button>
    <br />
    <button
    onClick={removevalue}>remove value{counter}</button>
    <p>footer:{counter}</p>
  

    </>
  )
}

export default App;
