import React from 'react';
import './Calculator.css';

const MyCulc = () => (
  <>
    <div className="container">
      <InputData />
      <div className="buttons">
        <div className="left-side">
          <button type="button" className="ac">AC</button>
          <button type="button" className="plusOrMinus">+/-</button>
          <button type="button" className="modelus">%</button>
          <button type="button" className="seven">7</button>
          <button type="button" className="eight">8</button>
          <button type="button" className="nine">9</button>
          <button type="button" className="four">4</button>
          <button type="button" className="five">5</button>
          <button type="button" className="six">6</button>
          <button type="button" className="1">1</button>
          <button type="button" className="two">2</button>
          <button type="button" className="three">3</button>
          <button type="button" className="zero">0</button>
          <button type="button" className="dot">.</button>
        </div>
        <div className="right-side">
          <button type="button" className="plus">/</button>
          <button type="button" className="plus">X</button>
          <button type="button" className="plus">-</button>
          <button type="button" className="plus">+</button>
          <button type="button" className="plus">=</button>
        </div>
      </div>
    </div>
  </>
);

const InputData = () => (
  <>
    <div className="input-data">
      <input type="text" name="input-data" value="0" />
    </div>
  </>
);
export default MyCulc;
