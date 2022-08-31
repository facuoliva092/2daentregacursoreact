import './Navbar.css';

function Navbar (){
    return(
    <><div className='alerta-contenedor'>
        
        <h1>HOCKEY SHOP</h1>
        {/* <p className='alerta-parrafo'>Tienda de hockey</p> */}
        <nav>
        <button>ARTICULOS</button>
        <button>PROMOCIONES</button>
        <button>PERSONALIZADOS</button>
        <button>CONTACTO</button>
        </nav>       
    </div>
    <br/>
    </>
    )
}


export default Navbar;