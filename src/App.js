import './App.css';
import React, { useState, useEffect } from 'react';
  
function App() {

  var links = [
    {
      name: "Kilogram",
      id: 1,
      className: ""
    },
    {
      name: "Gram",
      id: 2,
      className: ""
    },
    {
      name: "Pounds",
      id: 3,
      className: ""
    },
  ]

  const [ActiveUnit, setActiveUnit] = useState(1);
  const [ActiveUnitText, setActiveUnitText] = useState("Kilograms");
  const [InputValue, setInputValue] = useState(0);
  const [Kilograms, setKilogram] = useState(0);
  const [Grams, setGram] = useState(0);
  const [Pounds, setPounds] = useState(0);

  useEffect(() => {
    if(ActiveUnit === 1) {
      setKilogram(InputValue);
      setGram(InputValue/1000);
      setPounds(InputValue*2.2046226218);
      setActiveUnitText("Kilogram");
    }
    if(ActiveUnit === 2) {
      setKilogram(InputValue/1000);
      setGram(InputValue);
      setPounds(InputValue/453.59237);
      setActiveUnitText("Gram");
    }
    if(ActiveUnit === 3) {
      setKilogram(InputValue/2.2046226218);
      setGram(InputValue*453.59237);
      setPounds(InputValue);
      setActiveUnitText("Pounds");
    }
    if(InputValue === undefined || InputValue === null || InputValue === "") {
      setKilogram(0);
      setGram(0);
      setPounds(0);
    }
    console.log(InputValue);
  }, [InputValue, ActiveUnit])


  return (
    <div className="converter">
        <div className="units">
        {links.map(link => {
          return (
            <>
              <button 
                onClick={() => setActiveUnit(link.id)} 
                key={link.id}
                className={
                  link.className +
                  (link.id === ActiveUnit ? " active" : "")
                }>
                  {link.name}
              </button>
              
            </>
          );
        })}
      </div>
      <div className="inputfield">
        <input 
          placeholder="0"
          type="number"
          value={InputValue}
          onChange={e => setInputValue(e.target.value)}
          maxLength="10"
        />
      </div>
      <div className="ActiveUnitText">
        <h2>{ActiveUnitText} is equal to:</h2>
      </div>
      <div className="unit-text">
        <div>
          <p className="textAlignRight">Kilogram: </p>
          <p>{parseFloat(Kilograms).toFixed(2)}</p>
        </div>
        <div>
          <p className="textAlignRight">Grams: </p>
          <p>{parseFloat(Grams).toFixed(2)}</p>
        </div>
        <div>
          <p className="textAlignRight">Pounds: </p>
          <p>{parseFloat(Pounds).toFixed(2)}</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
