import React from 'react'
import CardImage from '../img/cardWidget2.png'
import './cardEstilos.css'
import { CartContext } from '../../Context/CarritoContext'
import { useContext } from 'react'
import Cart from '../Containers/cart/Cart'

const  CardWidget = () => {
  return (
    <div>
        <img className='imgCard' src={CardImage} alt="CardWidget" />
        <span> {Object.values(Cart) } </span>
    </div>
    
  )
}

export default CardWidget