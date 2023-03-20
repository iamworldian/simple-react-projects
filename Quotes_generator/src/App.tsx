import Style from './App.module.css';
import Quotes from './Quote_Generator/Quotes';

function App() {
  return (
    <div className={Style.container}>
      <Quotes></Quotes>
    </div>
  );
}

export default App;
