import React, { useEffect, useState } from 'react'
import dita1 from "../../assets/dita1.jpg";
import adidas2 from "../../assets/adidas2.jpg";
import grays3 from "../../assets/grays3.jpg";
import { ItemMuestra } from "../ItemMuestra/ItemMuestra";

const arraySticks= [
    {
        id: 1,
        marca: 'Dita',
        composicion:["Carbono", "Fibra de vidrio"],
        imagen: dita1,
        precio: 55000
    },
    
    {
       id: 2,
       marca: 'Adidas',
       composicion:["Carbono", "Kevlar"],
       imagen: adidas2,
       precio: 50000
    },
 
    {
       id: 3,
       marca: 'Grays',
       composicion:["Carbono", "Fibra de vidrio"],
       imagen: grays3,
       precio: 70000}
 ] 

export const ItemDetailContainer = () => {
    const [sticks, setSticks] = useState([]);
                      
    const verSticks = () => {
        return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                resolve(arraySticks)
            }, 2000);
            
        })
    }
 
   
    useEffect(()=>{
 const funcionAsincrona = async() =>{
        try {
            const listado = await verSticks();
            setSticks(listado);
            console.log('listado', listado);
       } catch (error){
        console.log('hubo un error')
       }
    }
    funcionAsincrona();
    }, [])
 
 
  return (
  
      <div>
     
          <ItemMuestra sticks={sticks}/>
          
     
     </div>
 
  )
 }