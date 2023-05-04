import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';
import Quote from './quote';

const MyCulc = () => {
  const [state, updateState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const calc = (e) => {
    const newState = calculate(state, e.target.textContent);
    updateState(newState);
  };
  return (
    <main>
      <div className="container">
        <div className="input-data">
          <InputData data={state} />
        </div>
        <div className="buttons">
          <div className="left-side">
            <button type="button" className="ac" onClick={calc}>AC</button>
            <button type="button" onClick={calc} className="plusOrMinus">+/-</button>
            <button type="button" onClick={calc} className="modelus">%</button>
            <button type="button" onClick={calc} className="seven">7</button>
            <button type="button" onClick={calc} className="eight">8</button>
            <button type="button" onClick={calc} className="nine">9</button>
            <button type="button" onClick={calc} className="four">4</button>
            <button type="button" onClick={calc} className="five">5</button>
            <button type="button" onClick={calc} className="six">6</button>
            <button type="button" onClick={calc} className="1">1</button>
            <button type="button" onClick={calc} className="two">2</button>
            <button type="button" onClick={calc} className="three">3</button>
            <button type="button" onClick={calc} className="zero">0</button>
            <button type="button" onClick={calc} className="dot">.</button>
          </div>
          <div className="right-side">
            <button type="button" onClick={calc} className="devid">/</button>
            <button type="button" onClick={calc} className="times">X</button>
            <button type="button" onClick={calc} className="minus">-</button>
            <button type="button" onClick={calc} className="plus">+</button>
            <button type="button" onClick={calc} className="equal">=</button>
          </div>
        </div>
      </div>
      <Quote />
    </main>
  );

  function InputData(props) {
    const state = props;
    return (
      <div className="input-data">
        <input type="text" name="input-data" value={state.data.next || state.data.total || 0} readOnly disabled />
      </div>
    );
  }
};
export default MyCulc;
