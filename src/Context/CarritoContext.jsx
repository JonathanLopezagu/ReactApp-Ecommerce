import React from 'react'
import { useState } from 'react';
import { context } from 'react'

export const CartContext = React.createContext();

export const CarritoContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarCarrito = (item) => {
      
        const indexProducto = cart.findIndex(prod => prod.id === item.id)

            if(indexProducto===-1){
                setCart([
                    ...cart,
                    item
                ])
            }
            else{
                const cantidadExistente = cart[indexProducto].quantity
                    cart[indexProducto].quantity= cantidadExistente + item.quantity
                    setCart([...cart])
            }
    }

    const precioTotal = () =>{ 
        return cart.reduce((acumulado,prodObjeto)=>  acumulado = acumulado + (prodObjeto.costo * prodObjeto.quantity), 0)
    }

    const cantidadTotal = () =>{
        return cart.reduce((contador,prodObject)=> contador += prodObject.quantity, 0)
    }

    const eliminarProducto = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id));
    }

    const vaciarCarrito = () =>{
        setCart([]);
    }
    
  


    return (

        <CartContext.Provider value={[cart, agregarCarrito, eliminarProducto, vaciarCarrito,precioTotal, cantidadTotal]}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContext