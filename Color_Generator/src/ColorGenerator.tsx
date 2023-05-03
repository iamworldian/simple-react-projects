import { useState } from 'react';
import Values from 'values.js';

import Style from './ColorGenerator.module.css';
import SingleColor from './SingleColor';

export default function ColorGenerator() {
  const [color, setColor] = useState('');
  //const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setColor(e.target.value);
    const colors = new Values(color).all(10);
   // console.log(colors[10].hex);
    setList(colors as []);
  };
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <h1 style={{ color: `${color}` }}>Color Generator</h1>
        <form>
          <input
            type="color"
            id="head"
            name="head"
            onChange={(e) => handleChange(e)}
          ></input>
          <hr />
          <label htmlFor="head">Choose a color</label>
        </form>
      </div>
      <hr />
      <div className={Style.colors}>
        {list.map((color, index) => {
          //console.log(color);
          return <SingleColor key={index} {...color} index={index} hex={color.hex} />;
        })}
      </div>
    </div>
  );
}
