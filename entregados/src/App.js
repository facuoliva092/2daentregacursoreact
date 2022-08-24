import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carrito from './components/Navbar/CartWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Navbar></Navbar>
     <Carrito></Carrito>
      </header>
    </div>
  );
}

export default App;
