import React from 'react'

export const ItemDetail = ({producto}) => {
  
  
    return (
    <div>
      <h2>{producto.marca}</h2>     
    <img src={producto.imagen} alt=""/>
     <p>{producto.composicion + ', '+ producto.composicion}</p>
    <p>${producto.precio}</p>
     <br/>
     
     </div>

    
  )
}
