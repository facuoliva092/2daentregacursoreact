import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carrito from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart/cart';
function App() {
 
 const pago = (pagar)=>{
console.log('funcion pago', pagar)
 }
  return (
    <div className="App">
      <header className="App-header">
     <Navbar></Navbar>
    
     <ItemListContainer mensaje="TU SITIO WEB DE ARTICULOS DE HOCKEY"></ItemListContainer>
      <Cart stock={10} initial={1} pay={pago}/>
      <Carrito></Carrito>
      </header>
    </div>
  );
}

export default App;
