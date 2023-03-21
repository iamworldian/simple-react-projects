import logo from './assets/airbnb_logo.png';
import Style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={Style.nav}>
      <img src={logo} alt="airbnb logo" className={Style.image}/>
    </nav>
  );
}
