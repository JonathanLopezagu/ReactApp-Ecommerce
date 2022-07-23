import React, { useContext, createContext } from 'react'
import { useState } from 'react';
//import { context } from 'react'
//import Cart from '../components/Containers/cart/Cart';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CarritoContextProvider = ({ children }) => {

    let [cart, setCart] = useState([]);

    const addCarrito = (item) => {

        const indexProducto = cart.findIndex(prod => prod.id === item.id)

        if (indexProducto === -1) {
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

    const countTot = () => {
        return cart.reduce((cantidad, prodObjeto) => cantidad += prodObjeto.quantity, 0)
    }

    const eliminarProducto = (id) => {
        setCart(cart.filter(cart => cart.id !== id))
    }

    const vaciarCarrito = () => {
        setCart([]);
    }




    return (

        <CartContext.Provider value={
            {
                cart,
                addCarrito,
                eliminarProducto,
                vaciarCarrito,
                precioTotal,
                countTot
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContextProvider