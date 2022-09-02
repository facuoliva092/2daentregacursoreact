import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({sticks}) => {
  return (
    <div  className='cards' >
         {
          sticks.map((producto)=>(
               <div key={producto.id}> 
                  <Item producto={producto}/>
                  </div>
            ))}
    </div>
  );
};
