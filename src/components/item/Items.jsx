import React from 'react'
import { Link } from 'react-router-dom';
import './item.css';


function Items({ productos }) {

    const { id, categoria, img, precio, cantidad} = productos;

    return (
      
        < div className = 'card' >
            
            <div className='img-card'>
                <img className='img-producto' src={productos.img} alt="imagen-card"/>
            </div>
            <div className='title-card'>
                <h4>{productos.name}</h4>
            </div>
            <div className='precio-card'> 
                <h4> ${productos.precio} mxn</h4>
            </div>
            <div className='disp-card'> 
                <h6> Disponible: {productos.cantidad} piezas</h6>
            </div>
            <Link to= {`/details/${productos.id}`}>
            <button className='btn-ver'>Ver mas</button>
            </Link>
        </div >
    )
}

export default Items;