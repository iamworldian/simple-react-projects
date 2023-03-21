import Style from './App.module.css';
import Tours from './Tours/Tours';

function App() {
  return (
    <div className={Style.container}>
      <Tours></Tours>
    </div>
  );
}

export default App;
