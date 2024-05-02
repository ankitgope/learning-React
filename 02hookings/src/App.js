//importing Hooks
import  { useState } from "react";
import "./App.css";
//we are not importing React , It is working under the hood using BABBlE(_JSX)
function App() {
  let [counter, setCounter] = useState(0);

  //let counter=0
  const addValue = () => {
    //counter= counter+1; this wa used when we are increasing using const counter =0
    //console.log("Value Added",Math.floor(Math.random()*10+1));
    //upto now we if we clicking the Add value button it not incrisingthe counter in display But
    // when we are printing the counter it is increasing the value in console
    //console.log("Value Added Counter = ", counter);
    //the problem is UI updation
    // Now suppose we have counter added in multiple places as below then the hectc situation arrive we have to change using dom like get element by Id then get element by class like this
    // here hooks come to work
    if(counter<20){
    setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
    
  };
  return (
    <div class="App">
      <h1>Learning Hooks</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </div>
  );
}

export default App;
