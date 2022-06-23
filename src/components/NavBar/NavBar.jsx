import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../img/LogoJMSISTEMS.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='barraNav'>
            <img className='imgLogo' src={Logo} alt="logoTienda" />

            <ul className='listaEnlaces'>
                <li className='nav-item'> Home </li>
                <li className='nav-item'> Consolas </li>
                <li className='nav-item'> VideoJuegos </li>
                <li className='nav-item'> Accesorios </li>
                <li className='nav-item'> Monitores </li>
            </ul>

            <CardWidget />
        </div>
    )
}

export default NavBar