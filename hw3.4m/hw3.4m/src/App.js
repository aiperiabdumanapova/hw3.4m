import React, {useState} from "react";
import './App.css'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="container">

     <div className="calculator">

      <form action="">

        <div>
          <input type="text" value={value}/>
        </div>

        <div>
          <button type="button" value="Clear" onClick={e => setValue('')}>Clear</button>
          <button type="button" value="Delete" onClick={e => setValue (value.slice(0, -1))}>Delete</button>
          <button type="button" value="+" onClick={e => setValue(value + e.target.value)}>+</button>
          <button type="button" value="-" onClick={e => setValue(value + e.target.value)}>-</button>
        </div>

        <div>
          <button  type="button" value="7" onClick={e => setValue(value + e.target.value)}>7</button>
          <button  type="button" value="8" onClick={e => setValue(value + e.target.value)}>8</button>
          <button  type="button" value="9" onClick={e => setValue(value + e.target.value)}>9</button>
          <button  type="button" value="*" onClick={e => setValue(value + e.target.value)}>*</button>
        </div>

        <div>
          <button  type="button" value="4" onClick={e => setValue(value + e.target.value)}>4</button>
          <button  type="button" value="5" onClick={e => setValue(value + e.target.value)}>5</button>
          <button  type="button" value="6" onClick={e => setValue(value + e.target.value)}>6</button>
          <button  type="button" value="/" onClick={e => setValue(value + e.target.value)}>/</button>
        </div>

        <div>
          <button  type="button" value="1" onClick={e => setValue(value + e.target.value)}>1</button>
          <button  type="button" value="2" onClick={e => setValue(value + e.target.value)}>2</button>
          <button  type="button" value="3" onClick={e => setValue(value + e.target.value)}>3</button>
          <button  type="button" value="^" onClick={e => setValue(value + e.target.value)}>^</button>
        </div>

        <div>
          <button  type="button" value="0" onClick={e => setValue(value + e.target.value)}>0</button>
          <button  type="button" value="=" onClick={e => setValue(eval(value))}>=</button>
          <button  type="button" value="√" onClick={e => setValue(value + e.target.value)}>√</button> 
        </div>

      </form>
     </div>
    </div>
  );
}

export default App;
