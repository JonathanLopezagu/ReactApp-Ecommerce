import React from 'react'
import { useState } from 'react';
import { context } from 'react'
import Cart from '../components/Containers/cart/Cart';

export const CartContext = React.createContext();

export const CarritoContext = ({ children }) => {

    let [cart, setCart] = useState([]);

    const addCarrito = (item) => {

        const indexProducto = cart.findIndex(prod => prod.id === item.id)

        if (indexProducto <= 0) {
            setCart([
                ...cart,
                item
            ])
        }
        else {
            const cantidadExistente = cart[indexProducto].quantity
            cart[indexProducto].quantity = cantidadExistente + item.quantity
            setCart([...cart])
        }
    }

    const precioTotal = () => {
        return cart.reduce((acumulado, prodObjeto) => acumulado = acumulado + (prodObjeto.costo * prodObjeto.quantity), 0)
    }

    const cantidadTotal = () => {
        return cart.reduce((cantidad, prodObjeto) => cantidad += prodObjeto.quantity, 0)
    }

    const eliminarProducto = (id) => {
        setCart(cart.filter(carrito => carrito.id !== id))
    }

    const vaciarCarrito = () => {
        setCart([]);
    }




    return (

        <CartContext.Provider value={
            [cart,
                addCarrito,
                eliminarProducto,
                vaciarCarrito,
                precioTotal,
                cantidadTotal]}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContext