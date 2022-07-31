import React from 'react'
import { Link } from 'react-router-dom'
import './stylebtnCon.css'

const BotonesCondicionales =()=>  {
  return (
    <div className='botones'>
        <span><Link to='/cart' className='btnBuy'> Terminar Compra  </Link> </span>
        <span><Link to='/' className='btnVolverComprar'>  Seguir comprando </Link></span>
    </div>
  )
}

export default BotonesCondicionales