import React from 'react'
import { useState } from 'react'

const  ItemCount= ({stock, onAdd, inicial,cantidad})  => {

    const [count, setCount] =useState(inicial);

    const restar = () =>{
      if(count > 0){
        setCount(count-1)
      }
    }

    const sumar = () =>{
      if(count < stock){
        setCount(count +1)
      }
    }
    

  return (
    <div>
        <span> Comprar : </span>
        <span> {count} </span>
        <span onClick={restar}> -</span>  
        <span onClick={sumar}> + </span>
        <button disabled={count===0} onClick={()=> onAdd()}> Agregar al carrito </button>
        
    </div>
  )
}

export default ItemCount