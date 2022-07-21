import React from 'react'
import { useState } from 'react';
import { context } from 'react'

export const CartContext = React.createContext();

export const CarritoContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarCarrito = (item, id) => {
       
        if (existeEnCarrito(item.id)) {
            let index = cart.findIndex((el) => el.id === item.id);
            cart[index].quantity++
          } else {
            setCart([...cart, item]);
          }

        console.log(cart);
    }

    const quitarCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const vaciarCarrito = () => {
        setCart([]);
    }
    
    const existeEnCarrito = (id) => {
        //console.log(id)
        return cart.find((item) => item.id === id) ? true : false;
    }
    


    return (

        <CartContext.Provider value={[cart, agregarCarrito, quitarCarrito, vaciarCarrito,/* existeEnCarrito*/]}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContext