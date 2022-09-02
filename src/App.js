import './App.css';
import Navbar from './components/Navbar/Navbar';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
 
 const pago = (pagar)=>{
console.log('funcion pago', pagar)
 }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer/>
        <ItemDetailContainer/>
        <br/>
        <br/>
        
        <Cart stock={10} initial={1} pay={pago}/>
      </header>
    </div>
  );
}

export default App;
