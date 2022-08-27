import './Navbar.css';
import carrito from './assets/carrito.png';

function CartWidget () {
    return (
        <>
        <div className='carrito'>
        <img src={carrito} alt="cartwidget" />
        </div>
        </>
    )
}

export default CartWidget;