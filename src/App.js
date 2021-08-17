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
    {
      name: "Martin's",
      id: 4,
      className: ""
    },
    {
      name: "Stones",
      id: 5,
      className: ""
    },
    {
      name: "Metric tons",
      id: 6,      
      className: ""
    },
  ]

  const [ActiveUnit, setActiveUnit] = useState(1);
  const [ActiveUnitText, setActiveUnitText] = useState("Kilograms");
  const [Decimals, setDecimals] = useState(4);
  const [InputValue, setInputValue] = useState(0);
  const [Kilograms, setKilogram] = useState(0);
  const [Grams, setGram] = useState(0);
  const [Pounds, setPounds] = useState(0);
  const [Martin, setMartin] = useState(0);
  const [Stones, setStones] = useState(0);
  const [Tons, setTons] = useState(0);

  useEffect(() => {
    if(ActiveUnit === 1) {
      setKilogram(InputValue);
      setGram(InputValue*1000);
      setPounds(InputValue*2.2046226218);
      setMartin(InputValue/56);
      setStones(InputValue*0.15747);
      setTons(InputValue/1000);
      setActiveUnitText("Kilogram");
    }
    if(ActiveUnit === 2) {
      setKilogram(InputValue/1000);
      setGram(InputValue);
      setPounds(InputValue/453.59237);
      setMartin(InputValue/56000);
      setStones(InputValue*0.00015747)
      setTons(InputValue/1000/1000);
      setActiveUnitText("Gram");
    }
    if(ActiveUnit === 3) {
      setKilogram(InputValue/2.2046226218);
      setGram(InputValue*453.59237);
      setPounds(InputValue);
      setMartin(InputValue/2.2046226218/56);
      setStones(InputValue/14);
      setTons(InputValue/2.2046226218/1000);
      setActiveUnitText("Pounds");
    }
    if(ActiveUnit === 4) {
      setKilogram(InputValue*56);
      setGram(InputValue*56000);
      setPounds(InputValue*2.2046226218*56);
      setMartin(InputValue);
      setStones(InputValue*56*0.15747);
      setTons(InputValue*56/1000);
      setActiveUnitText("Martin");
    }
    if(ActiveUnit === 5) {
      setKilogram(InputValue/0.15747);
      setGram(InputValue/0.00015747);
      setPounds(InputValue*14);
      setMartin(InputValue/56/0.15747);
      setStones(InputValue)
      setTons(InputValue/0.15747/1000);
      setActiveUnitText("Stone");
    }
    if(ActiveUnit === 6) {
      setKilogram(InputValue*1000);
      setGram(InputValue*1000*1000);
      setPounds(InputValue*2.2046226218*1000);
      setMartin(InputValue/56*1000);
      setStones(InputValue*0.15747*1000);
      setTons(InputValue);
      setActiveUnitText("Metric Tons");
    }
    if(InputValue === undefined || InputValue === null || InputValue === "") {
      setKilogram(0);
      setGram(0);
      setPounds(0);
      setMartin(0);
      setStones(0);
      setTons(0);
    }
    console.log(InputValue);
  }, [InputValue, ActiveUnit])


  return (
    <div className="container">
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
      <div className="converter">
        <div className="inputfield" id="inputField">
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
      </div>
      <div className="decimal-slider">
        <p>Select how many decimals you want</p>
        <input id="slider" type="range" min="1" max="10" value={Decimals} onChange={e => setDecimals(e.target.value)} />
        <label for="slider">
          {Decimals}
        </label>
      </div>
      <div className="unit-text">
        <div>
          <p className="textAlignRight">Kilogram: </p>
          <p className="unit-p">{parseFloat(Kilograms).toFixed(Decimals)}</p>
        </div>
        <div>
          <p className="textAlignRight">Grams: </p>
          <p className="unit-p">{parseFloat(Grams).toFixed(Decimals)}</p>
        </div>
        <div>
          <p className="textAlignRight">Pounds: </p>
          <p className="unit-p">{parseFloat(Pounds).toFixed(Decimals)}</p>
        </div>
        <div>
          <p className="textAlignRight">Martin's: </p>
          <p className="unit-p">{parseFloat(Martin).toFixed(Decimals)}</p>
        </div>
        <div>
          <p className="textAlignRight">Stones: </p>
          <p className="unit-p">{parseFloat(Stones).toFixed(Decimals)}</p>
        </div>
        <div>
          <p className="textAlignRight">Metric Tons: </p>
          <p className="unit-p">{parseFloat(Tons).toFixed(Decimals)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
