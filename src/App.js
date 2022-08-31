import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/Navbar/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/cart';



function App() {
 
 const pago = (pagar)=>{
console.log('funcion pago', pagar)
 }
  return (
    <div className="App">
      <header className="App-header">
    <Navbar></Navbar>
    <ItemListContainer/>
    <Cart stock={10} initial={1} pay={pago}/>
    <CartWidget></CartWidget>
      </header>
    </div>
  );
}

export default App;
