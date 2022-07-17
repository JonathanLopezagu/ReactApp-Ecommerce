import React from 'react'
import { useState } from 'react';
import {context} from 'react'

export const CartContext =React.createContext();

export const CarritoContext = ({children}) => {

    const [cart, setCart] = useState([]);
 
    const agregarCarrito =(item)=>{
        cart.push(item);
    }

    const quitarCarrito = (id)=>{ 
        setCart(cart.filter((item) => item.id !== id));
    }
    const vaciarCarrito = ()=>{
        setCart([]);
    }
    const existeEnCarrito =(id)=>{ 
        return cart.find((item) => item.id === id) ? true : false;
    }


    return(

            <CartContext.Provider value={[cart, agregarCarrito, quitarCarrito, vaciarCarrito,existeEnCarrito]}>
                {children}
            </CartContext.Provider>
    )
}

export default CarritoContext