import React from 'react'
import { Link } from 'react-router-dom'
import './itemDetails.css'

const BotonesCondicionales =()=>  {
  return (
    <div className='botones'>
        <Link to='/cart'> <button>Terminar Compra </button> </Link>
        <span></span>
        <Link to='/'> <button> Seguir comprando </button></Link>
    </div>
  )
}

export default BotonesCondicionales