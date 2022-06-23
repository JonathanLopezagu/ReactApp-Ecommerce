import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../img/LogoJMSISTEMS.png'
import './NavBar.css'

const NavBar = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className='imgLogo' src={Logo} alt="logoTienda" />
                <a className="navbar-brand" href=".">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href=".">Consolas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=".">Videojuegos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=".">Accesorios</a>
                        </li>
                    </ul>
                </div>
                <CardWidget />
            </div>
        </nav>


    )
}

export default NavBar