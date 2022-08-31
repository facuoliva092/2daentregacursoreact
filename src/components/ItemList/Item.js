import React from 'react'
import './item.css';

export const Item = ({stick}) => {
  return (
 <div>
      <h2>{stick.marca}</h2>     
     <img src={stick.imagen} alt=""/>
     <p>{stick.composicion [0] +', '+ stick.composicion [1] }</p>
     <p>${stick.precio}</p> 
     <br/>
     <button>Ver mas detalles</button>
 </div>
  )
}



