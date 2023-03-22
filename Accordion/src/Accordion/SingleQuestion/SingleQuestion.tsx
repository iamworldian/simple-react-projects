import { useState } from 'react';

import Style from './SingleQuestion.module.css';

export default function SingleQuestion({ title, info }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={Style.question}>
        <p>{title}</p>
        {show ? (
          <button
            onClick={() => setShow(!show)}
            className={`${Style.btn} ${Style.minus}`}
          >
            <i className={`bx bxs-minus-circle`}></i>
          </button>
        ) : (
          <button onClick={() => setShow(!show)} className={`${Style.btn} ${Style.plus}`}>
            <i className={`bx bxs-plus-circle`}></i>
          </button>
        )}
      </div>
      {show ? <p className={Style.ans}>{info}</p> : <p></p>}
    </>
  );
}
