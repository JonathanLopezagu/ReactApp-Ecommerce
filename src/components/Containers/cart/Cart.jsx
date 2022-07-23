import React from 'react'
//import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContext } from '../../../Context/CarritoContext'
import './Cart.css'

const Cart = () => {
 
  const {cart, eliminarProducto, agregarCarrito, vaciarCarrito,precioTotal } = useCartContext();
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
  else { 
    return (

      <div className='DivCarrito'>
        <p> Lo que hay en su carrito</p>
        {cart.map((products) => (
          //mostrar detalle del carrito
          <div className='productosCarrito' key={products.id}>
          <span> Cantidad: {products.quantity} </span>
          <span> Producto: {products.name}</span>
          <span> Costo: ${products.costo}.00 mxn c/u </span>
          <button onClick={()=> eliminarProducto(products.id)}> Eliminar Producto</button>
          </div>
          
        ))}
        
        {/*mostrar total precio carrito y eliminar carrito listo*/}
        <p> Precio total del carrito:  ${precioTotal()}. MXN </p>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
      </div>
  
    )
  }
  
 
}


export default Cart