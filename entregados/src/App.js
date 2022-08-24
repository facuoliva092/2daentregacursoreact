import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carrito from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Navbar></Navbar>
     <Carrito></Carrito>
     <ItemListContainer mensaje="TU SITIO WEB DE ARTICULOS DE HOCKEY"></ItemListContainer>

      </header>
    </div>
  );
}

export default App;
