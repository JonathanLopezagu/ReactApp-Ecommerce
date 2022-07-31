import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetails.css'
import { useCartContext } from '../../Context/CarritoContext'
import BotonesCondicionales from './BotonesCondicionales'


const ItemDetails = ({ item }) => {

  const { addCarrito } = useCartContext();
  const [quantity, setCQuantity] = useState();

  const onAdd = (count) => {
    setCQuantity(count)
    const product = { item: item, quantity: count, costo: item.precio, id: item.id, imga: item.imga, name: item.name };
    addCarrito({ quantity: count, ...product });

  }

  return (
    <div className='itemDetails'>
      <div className='details-img'>
        <img className='img-details' src={item.imga} alt="img-Details" />
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
        {quantity ? <BotonesCondicionales /> : <ItemCount stock={item.cantidad} inicial={0} onAdd={onAdd}></ItemCount>}
      </div>
    </div>
  )
}

export default ItemDetails