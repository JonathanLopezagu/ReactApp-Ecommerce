import React from 'react'
import { useState } from 'react';
import {context} from 'react'

export const CartContext =React.createContext();

export const CarritoContext = ({children}) => {

    const [cart, setCart] = useState([]);
 
    const agregarCarrito =(item)=>{
    }

    const quitarCarrito = (id)=>{ 
    }
    const vaciarCarrito = ()=>{
    }
    const existeEnCarrito =()=>{ 
    }


    return(

            <CartContext.Provider value={[cart, agregarCarrito, quitarCarrito, vaciarCarrito,existeEnCarrito]}>
                {children}
            </CartContext.Provider>
    )
}

export default CarritoContext