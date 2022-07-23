import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CarritoContext'
import './Cart.css'

const Cart = () => {
  //pase carrito a mi card
  const [cart, agregarCarrito, quitarCarrito, vaciarCarrito] = useContext(CartContext);
  console.log(cart)
  //console.log(cart.length)
  return (

    <div className='DivCarrito'>
      <p> Lo que hay en su carrito</p>
      {cart.map((producto) => (
        //mostrar detalle del carrito
        <div className='productosCarrito'>
        <span> Cantidad: {producto.quantity} </span>
        <span> Producto: {producto.name}</span>
        <span> Costo: ${producto.costo}.00 mxn c/u </span>
        <span> Precio total $ {producto.costo * producto.quantity}</span>
        </div>
        
      ))}

    </div>

  )
}


export default Cart