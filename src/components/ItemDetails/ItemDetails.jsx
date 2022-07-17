import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetails.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const ItemDetails = ({ item }) => {

  const [cart, agregarCarrito,existeEnCarrito,quitarCarrito,vaciarCarrito] = useContext(CartContext);
  const [cantidad,setCantidad] = useState();
  console.log(cart);

  
  const funcionContador = (cantidad)=>{
    console.log("el valor del contador" , cantidad)
    setCantidad(cantidad)
    const producto = { item: item, quantity:cantidad , costo: item.precio , id: item.id};
    agregarCarrito(producto);
    
  }

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
        {cantidad? <Link to='/cart'> <button>Terminar Comprar </button>  </Link> : <ItemCount stock= {item.cantidad} inicial={0} onAdd={funcionContador}></ItemCount>}
      </div>
    </div>
  )
}

export default ItemDetails