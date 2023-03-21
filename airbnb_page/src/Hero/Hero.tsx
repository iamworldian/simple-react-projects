import Style from './Hero.module.css';

export default function Hero() {
  return (
    <div className={Style.hero}>
      <div className={Style.content}>
        <h1> Online Experiences </h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos{' '}
        </p>
      </div>
    </div>
  );
}
