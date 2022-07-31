import React, { useContext, createContext } from 'react'
import { useState } from 'react';
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CarritoContextProvider = ({ children }) => {

    let [cart, setCart] = useState([]);

    //Funcion para agregar al carrito
    const addCarrito = (item) => {

        const indexProduct = cart.findIndex(prod => prod.id === item.id)
        //Condicion para validar si existe en el carrito
        if (indexProduct === -1) {
            setCart([
                ...cart,
                item
            ])
        } //En caso de que no exista agrega uno mas del mismo producto
        else {
            const inCart = cart[indexProduct].quantity
            cart[indexProduct].quantity = inCart + item.quantity
            setCart([...cart])
        }
    }

    //Funcion para obtener el saldo total a pagar
    const totalPrice = () => {
        return cart.reduce((acum, prodObjeto) => acum = acum + (prodObjeto.costo * prodObjeto.quantity), 0)
    }

    //Funcion para obtener contador de productos en el carrito
    const countTot = () => {
        return cart.reduce((quantity, prodObjeto) => quantity += prodObjeto.quantity, 0)
    }
    //Funcion para eliminar producto del carrito
    const removeProduct = (id) => {
        setCart(cart.filter(cart => cart.id !== id))
    }
    //Funcion para vaciar carrito de compras
    const deleteCart = () => {
        setCart([]);
    }




    return (

        <CartContext.Provider value={
            {
                cart,
                addCarrito,
                removeProduct,
                deleteCart,
                totalPrice,
                countTot
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContextProvider