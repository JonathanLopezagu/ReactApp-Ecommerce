import React, { useContext, createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CarritoContextProvider = ({ children }) => {

    let [cart, setCart] = useState([]);

    //Funcion para agregar al carrito
    const addCarrito = (item) => {

        const indexProducto = cart.findIndex(prod => prod.id === item.id)
        //Condicion para validar si existe en el carrito
        if (indexProducto === -1) {
            setCart([
                ...cart,
                item
            ])
        } //En caso de que no exista agrega uno mas del mismo producto
        else {
            const cantidadExistente = cart[indexProducto].quantity
            cart[indexProducto].quantity = cantidadExistente + item.quantity
            setCart([...cart])
        }
    }

    //Funcion para obtener el saldo total a pagar
    const precioTotal = () => {
        return cart.reduce((acumulado, prodObjeto) => acumulado = acumulado + (prodObjeto.costo * prodObjeto.quantity), 0)
    }

    //Funcion para obtener contador de productos en el carrito
    const countTot = () => {
        return cart.reduce((cantidad, prodObjeto) => cantidad += prodObjeto.quantity, 0)
    }
    //Funcion para eliminar producto del carrito
    const eliminarProducto = (id) => {
        setCart(cart.filter(cart => cart.id !== id))
    }
    //Funcion para vaciar carrito de compras
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