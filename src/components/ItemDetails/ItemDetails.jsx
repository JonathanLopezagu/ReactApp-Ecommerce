import React from 'react'
import './itemDetails.css'

const ItemDetails = ({ item }) => {


  return (
    <div className='itemDetails'>
      <div className='details-img'>
        <img className='img-detalles' src={item.img} alt="img-Details" />
      </div>
      <div className='info-details'>
        <h1>{item.name}</h1>
        <p> Caracteristicas </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam unde doloribus vero. Dolores totam commodi dolorum,
          quod eius voluptatum natus voluptates iure cumque consequuntur
          autem ipsum reiciendis modi quisquam dolor.</p>
        <p>
          Disponibles :  {item.cantidad}
        </p>
        <p>
          precio :  ${item.precio}mxn
        </p>
        <button className='btn-add'>Añadir al carrito </button>
      </div>
    </div>
  )
}

export default ItemDetails