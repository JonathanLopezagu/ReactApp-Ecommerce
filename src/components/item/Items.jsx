import React from 'react'
import './item.css';


function Items({productos}) {

    const { id,name, img, cantidad,  precio } = productos;

    return (
        <div className='card'>
            <div className='img-card'>
                <img className='img-producto' src={img} alt="imagen-card"/>
            </div>
            <div className='title-card'>
                <h3>{name}</h3>
            </div>
            <div className='precio-card'> 
                <h4> ${precio} mxn</h4>
            </div>
            <button className='btn-ver'>Ver mas</button>
        </div>
    )
}

export default Items;