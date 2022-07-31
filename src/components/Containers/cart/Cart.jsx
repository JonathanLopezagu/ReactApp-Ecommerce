import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CarritoContext'
import './Cart.css'

const Cart = () => {

  const { cart, removeProduct, deleteCart, totalPrice } = useCartContext();
  // Consulta si hay algo en el carrito si no hay regresa a inicio
  if (!cart.length) {
    return (
      <>
        <br />
        <h3 className="Nohay">No hay productos en el carrito</h3>
        <Link to='/' ><button  className='btnSeguircomprando'> Seguir comprando </button></Link>

      </>
    );


  }
  else {
    // Si hay algun producto en carrito lo muestra en la pantalla
    return (

      <div className='DivCarrito'>
        
        {cart.map((products) => (
          //mostrar detalle del carrito
          <div className='productosCarrito' key={products.id}>
            <img className='imgCarrito' src={products.imga} alt="imagenProd"></img>
            <span> Cantidad: {products.quantity} </span>
            <span> Producto: {products.name}</span>
            <p>
              <span> Costo: ${products.costo}.00 mxn c/u </span>
              <button className='btnEliminar' onClick={() => removeProduct(products.id)}> Eliminar Producto</button>
            </p>
          </div>

        ))}
        <div className='ContendorComprar'>
          <p className='precioTotal'> Precio total del carrito:  ${totalPrice()}. MXN </p>
          <Link to='/FinalizarCompra' className='LinkComprar' ><button className='btnComprar'> Confirmar compra </button> </Link>
          <button className='btnVaciar' onClick={() => deleteCart()}> Vaciar Carrito</button>
        </div>

      </div>

    )
  }


}


export default Cart