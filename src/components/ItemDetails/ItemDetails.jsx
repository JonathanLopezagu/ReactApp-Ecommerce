import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetails.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CarritoContext'
import BotonesCondicionales from './BotonesCondicionales'


const ItemDetails = ({ item }) => {

  const [cart, agregarCarrito] = useContext(CartContext);
  const [cantidad, setCantidad] = useState();
  
  console.log(cart);
  
  
  const funcionContador = (cantidad) => {
    console.log("el valor del contador", cantidad)
    setCantidad(cantidad)
    const producto = { item: item, quantity: cantidad, costo: item.precio, id: item.id , imga: item.imga};
    agregarCarrito(producto);

  }

  return (
    <div className='itemDetails'>
      <div className='details-img'>
        <img className='img-detalles' src={item.imga} alt="img-Details" />
      </div>
      <div className='info-details'>
        <h1>{item.name}</h1>
        <p> Descripcion </p>
          <p>
            {item.descripcion}
          </p>
        <p>
          Disponibles :  {item.cantidad} piezas.
        </p>
        <p>
          precio :  $ {item.precio}.00 mxn 
        </p>
        {cantidad ? <BotonesCondicionales/>  : <ItemCount stock={item.cantidad} inicial={0} onAdd={funcionContador}></ItemCount>}
      </div>
    </div>
  )
}

export default ItemDetails