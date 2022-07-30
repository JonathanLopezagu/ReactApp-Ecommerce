import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CarritoContext'
import './Cart.css'

const Cart = () => {

  const { cart, eliminarProducto, vaciarCarrito, precioTotal } = useCartContext();

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
              <button className='btnEliminar' onClick={() => eliminarProducto(products.id)}> Eliminar Producto</button>
            </p>
          </div>

        ))}
        <div className='ContendorComprar'>
          <p className='precioTotal'> Precio total del carrito:  ${precioTotal()}. MXN </p>
          <Link to='/FinalizarCompra' className='LinkComprar' ><button className='btnComprar'> Confirmar compra </button> </Link>
          <button className='btnVaciar' onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
        </div>

      </div>

    )
  }


}


export default Cart