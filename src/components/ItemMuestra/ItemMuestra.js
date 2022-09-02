import React from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemMuestra = ({sticks}) => {
  return (
    <div >
         {
          sticks.map((producto)=>(
               <div key={producto.id}> 
                  <ItemDetail producto={producto}/>
                  </div>
            ))}
    </div>
  );
};