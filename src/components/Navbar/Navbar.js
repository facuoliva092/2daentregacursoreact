import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar (){
    return(
    <><div className='alerta-contenedor'>
        
        <h1>HOCKEY SHOP</h1>
     
        <nav>
        <button>ARTICULOS</button>
        <button>PROMOCIONES</button>
        <button>PERSONALIZADOS</button>
        <button>CONTACTO</button>
        </nav> 
        <CartWidget></CartWidget>      
    </div>
    <br/>
    </>
    )
}


export default Navbar;