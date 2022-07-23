import React from 'react'
import CardImage from '../img/cardWidget2.png'
import './cardEstilos.css'
import { CartContext } from '../../Context/CarritoContext'
//import { useContext } from 'react'
//import Cart from '../Containers/cart/Cart'

const  CardWidget = () => {
  //const {cantidadTotal} = CartContext()

  return (
    <div>
        <img className='imgCard' src={CardImage} alt="CardWidget" />
    </div>
    
  )
}

export default CardWidget