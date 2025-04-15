import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 69;
  let [counter, setCounter] = useState(3);

  function addValue() {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    // counter = counter + 2;
    // console.log("clicked", counter);
  }

  function makeZero() {
    counter = 0;
    setCounter(counter);
  }

  function decreaseValue() {
    // console.log("value decreased");
    if (counter <= 0) {
      setCounter(counter = 0);
    } else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>🧑🏻‍💻 am React</h1>
      <h3>counter value: {counter}</h3>

      <button onClick={addValue}>Add+</button>
      <br />
      <button onClick={makeZero}>make Zero</button>
      <button onClick={decreaseValue}>- Subtract</button>
    </>
  );
}

export default App;
