import { useState } from 'react';

import quotesPng from './assets/quotes.png';
import QuotesData from './quotes';
import Style from './Quotes.module.css';

export default function Quotes() {
  const [quote, setQuote] = useState('Click To Generate Random Quotes');
  const [author, setAuthor] = useState('Author');

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * (QuotesData.length + 1));

    setQuote(QuotesData[randomNumber].quote);
    setAuthor(QuotesData[randomNumber].author);
  };
  return (
    <div className={Style.quotes}>
      <div className={Style.ani}></div>
      <h1>{quote}</h1>
      <h3> - {author}</h3>
      <button type="button" onClick={handleClick}>
        {' '}
        Generate
      </button>
      <img src={quotesPng} alt="" />
    </div>
  );
}
