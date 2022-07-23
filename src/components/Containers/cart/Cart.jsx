import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CarritoContext'
import './Cart.css'

const Cart = () => {
 
  const [cart, eliminarProducto, agregarCarrito, vaciarCarrito,precioTotal ] = useContext(CartContext);
  console.log(cart)
  
  if(!cart.length){
    return (
      <>
        <br />
        <h3 className="text-center mt-4">No hay productos en el carrito</h3>
        <Link to='/'> <button> Seguir comprando </button></Link>
        
      </>
    );
  }

  return (

    <div className='DivCarrito'>
      <p> Lo que hay en su carrito</p>
      {cart.map((producto) => (
        //mostrar detalle del carrito
        <div className='productosCarrito' key={producto.id}>
        <span> Cantidad: {producto.quantity} </span>
        <span> Producto: {producto.name}</span>
        <span> Costo: ${producto.costo}.00 mxn c/u </span>
        <button onClick={()=> eliminarProducto(producto.id)}> Eliminar Producto</button>
        </div>
        
      ))}
      
      {/*mostrar total precio carrito y eliminar carrito listo*/}
      <p> Precio total del carrito:  ${precioTotal()}. MXN </p>
      <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
    </div>

  )
}


export default Cart