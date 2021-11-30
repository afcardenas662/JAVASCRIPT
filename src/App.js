import logo from './logo.jpg';
import './App.css';
import MiComponente from './componentes/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <p>

          
          Nunca nos rendimos
        </p>

        { alert ("Bienvenidos, ya pueden entrar")}
        
        <div className="componentes">
          
          <MiComponente />



        </div>
      </header>
      

    </div>
  );
}

export default App;
