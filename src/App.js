import './App.css';
import About from './Component/About';
import Contato from './Component/Contato';
import Cursos from './Component/Cursos';
import Navegacao from './Component/Navegacao';
import Projetos from './Component/Projetos';
import Rodape from './Component/Rodape';

function App() {
  return (
    <div className="App">
      <Navegacao />
      <About />
      <Cursos />
      <Projetos />
      <Contato/>
      <Rodape
        imagem="images/deivsoares.PNG"
        link="https://www.linkedin.com/in/deivsoares-dev/"
        autor="Deivison Soares" />
    </div>
  );
}

export default App;
