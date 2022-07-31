import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
const  ItemCount= ({stock, onAdd, inicial})  => {

    const [count, setCount] =useState(inicial);

    const res = () =>{
      if(count > 0){
        setCount(count- 1)
        
      }
    }

    const sum = () =>{
      if(count < stock){
        setCount(count+1)
       
      }
    }
    

  return (
    <div >
        <span> Comprar : </span>
        <span className='contador'> {count} </span>
        <button className='btnRestar' onClick={res}> -</button>  
        <button className='btnSumar' onClick={sum}> + </button>
        <button className='btnAgregar' disabled={count===0} onClick={()=> onAdd(count)}> Agregar al carrito </button>
        
    </div>
  )
}

export default ItemCount