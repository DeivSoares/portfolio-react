import './App.css';
import About from './Component/About';
import Cursos from './Component/Cursos';
import Navegacao from './Component/Navegacao';

function App() {
  return (
    <div className="App">
      <Navegacao/>
      <About/>
      <Cursos/>
    </div>
  );
}

export default App;
