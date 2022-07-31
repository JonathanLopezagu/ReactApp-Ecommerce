import React from 'react'
import './formulario.css'

const BuyComplete = ({orderId}) => {
  return (
    <div className='buyComplete'>
        Compra completa el codigo de comprar es : {orderId}
    </div>
  )
}

export default BuyComplete