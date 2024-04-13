import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(10);

  // let Counter = 5;
  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => { 
    setCounter(counter - 1);
  }

  if(counter == -1){
    setCounter(counter + 1)
  }
  if(counter == 21){
    setCounter(counter - 1)
  }

  return (
    <>
      <div className="container">
        <h1>React App</h1>
        <h4>Counter Value : {counter}</h4>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
