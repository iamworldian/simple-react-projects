import Style from './App.module.css';
import Reviews from './Reviews/Reviews';
function App() {
  return (
    <div className={Style.container}>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
