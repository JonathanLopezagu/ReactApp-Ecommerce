import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
const  ItemCount= ({stock, onAdd, inicial})  => {

    const [count, setCount] =useState(inicial);

    const restar = () =>{
      if(count > 0){
        setCount(count- 1)
        //console.log(count)
      }
    }

    const sumar = () =>{
      if(count < stock){
        setCount(count+1)
        //console.log(count)
      }
    }
    

  return (
    <div >
        <span> Comprar : </span>
        <span className='contador'> {count} </span>
        <button className='btnRestar' onClick={restar}> -</button>  
        <button className='btnSumar' onClick={sumar}> + </button>
        <button className='btnAgregar' disabled={count===0} onClick={()=> onAdd(count)}> Agregar al carrito </button>
        
    </div>
  )
}

export default ItemCount