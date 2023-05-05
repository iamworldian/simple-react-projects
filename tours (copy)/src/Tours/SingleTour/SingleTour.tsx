import { useState } from 'react';

import Style from './SingleTours.module.css';
export default function SingleTour({ id, image, info, name, price }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <article className={Style.container}>
        <img className={Style.image} src={image} alt="" />
        <footer className={Style.footer}>
          <h4 className={Style.name}>{name}</h4>
          <h4 className={Style.price}> $ {price}</h4>
        </footer>
        <p className={Style.info}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className={Style.readMore} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <div className={Style.btnContainer}>
          <button className={`${Style.btn} ${Style.notInterestedBtn}`}>
            {' '}
            Not interested{' '}
          </button>
          <button className={`${Style.btn} ${Style.accomplished}`}> Added List </button>
        </div>
      </article>
    </>
  );
}
