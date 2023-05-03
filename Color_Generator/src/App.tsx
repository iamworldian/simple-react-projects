import Style from './App.module.css';
import ColorGenerator from './ColorGenerator';
function App() {
  return (
    <div className={Style.container}>
      <ColorGenerator></ColorGenerator>
    </div>
  );
}

export default App;
