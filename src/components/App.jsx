import React, { useState } from "react";

let a = 0;

function App() {
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState([]);

  function setInput(event) {
    const textEvent = event.target.value;
    setInputText(textEvent);
    // console.log(inputText);
    // log shows the previous value of state here, i.e. for the first
    // time of log, it will show empty value for inputText even though it is
    // updated here and the next time when setInputText() updates the value of
    // inputText, then the previously updated value of inputText is shown, not the
    // currently updated value by setInputText
  }
  // console.log(inputText);  it shows the updated value of "inputText" state
  // thus the state's value is updated outside of the func. where the setInputText() is called

  function setButton() {
    setButtonState((previous) => {
      return [...previous, inputText];
    }); // here the return takes the previous array value(since ...previous gives value of array or object not array or object)
    // and so the previous value was null and then gives a new value to the array that comes form input text box
    // so now there is 1 item or value in array and no null values, second time it gives second item in array so it becomes two
    // values in array and there are no null values
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setInput} type="text" value={inputText} />
        <button onClick={setButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {buttonState.map((buttonText) => {
            a++;
            return <li key={a}> {buttonText} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
