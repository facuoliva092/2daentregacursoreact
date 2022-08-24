import './Navbar.css';
import carrito from './carrito.png';

function Carrito () {
    return (
        <>
        <div className='carrito'>
        <img src={carrito}/>
        </div>
        </>
    )
}

export default Carrito;