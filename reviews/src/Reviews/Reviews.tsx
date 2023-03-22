import { useState } from 'react';

import Data from './assets/data';
import Card from './Card/Card';
import Style from './Reviews.module.css';

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const changeIndex = (val) => {
    const len = Data.length;

    if (index + val < 0 || index + val >= len) return;
    else {
      setIndex((prev) => prev + val);
    }
  };

  return (
    <div>
      <div className={Style.container}>
        <h1> Our Reviews </h1>
        <hr className={Style.hr} />
      </div>
      <Card {...Data[index]} changeIndex={changeIndex}></Card>
    </div>
  );
}
