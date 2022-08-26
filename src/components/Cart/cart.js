import {useState} from "react";

const Cart = ({stock, initial, pay})=>{
    const [cart, setCart] = useState(initial);
    
    const add = ()=>{
       if(cart<stock){
       setCart (cart + 1)
       }
    }
    
    const remove = ()=>{
       if(cart>0){
       setCart (cart - 1)
      }
    }


    
       return(
          <div>
            <p>Productos {cart}</p>
            <button onClick={add}>Agregar</button>
            <button onClick={remove}>Restar</button>
            <button onClick={()=>(pay(cart))}>Proceder con el pago</button>

          </div>
       )
    }

    export default Cart;