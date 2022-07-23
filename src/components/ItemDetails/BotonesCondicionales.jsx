import React from 'react'
import { Link } from 'react-router-dom'
import './itemDetails.css'

const BotonesCondicionales =()=>  {
  return (
    <div className='botones'>
        <Link to='/cart'> <button className='btnComprar'>Terminar Compra </button> </Link>
        <Link to='/'> <button className='btnVolverComprar'> Seguir comprando </button></Link>
    </div>
  )
}

export default BotonesCondicionales