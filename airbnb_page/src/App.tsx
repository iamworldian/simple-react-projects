import Style from './App.module.css';
import Experiences from './Experiences/Experiences';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className={Style.container}>
      <Nav></Nav>
      <Hero></Hero>
      <Experiences></Experiences>
    </div>
  );
}

export default App;
