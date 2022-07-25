import React from 'react'
import CardImage from '../img/cardWidget2.png'
import './cardEstilos.css'

const  CardWidget = () => {
  
  return (
    <div>
        <img className='imgCard' src={CardImage} alt="CardWidget" />
    </div>
    
  )
}

export default CardWidget