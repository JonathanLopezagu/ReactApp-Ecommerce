import React from 'react'
import { useState } from 'react';
import { context } from 'react'

export const CartContext = React.createContext();

export const CarritoContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarCarrito = (item) => {
        
       let itemID = item.id;
       if(existeEnCarrito(itemID)){
        let items= cart.find((i)=> i.item.id === itemID)
        
        console.log(items)
        alert("producto ya esta en el carrito");
       }
       else{ 
        console.log("Se agrego producto al carrito")
        cart.push(item);
       }
    
    }

    const quitarCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }
    const vaciarCarrito = () => {
        setCart([]);
    }
    const existeEnCarrito = (id) => {
        console.log(id)
        for(let i= 0; i<cart.length; i++){ 
            if(cart[i].item.id === id){
                return true
            }
            else {
                return false
            }
        }
        
    }


    return (

        <CartContext.Provider value={[cart, agregarCarrito, quitarCarrito, vaciarCarrito, existeEnCarrito]}>
            {children}
        </CartContext.Provider>
    )
}

export default CarritoContext