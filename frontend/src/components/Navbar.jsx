import React from 'react'

const Navbar = () => {

  return (
    <header className="navbarPadre">
      <span className="logoRodayRodar">
        <a href="/home" rel="noopener noreferrer">
          <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1699034797/Logo_Oficial_-_Logo_Rojo_-_Fondo_Blanco_mn7lvf.jpg'/>
        </a>
      </span>
      <nav className="menu">
        <ul>
          <li><a href="/home">INICIO</a></li>
          <li><a href="/Quienes Somos">QUIENES SOMOS</a></li>
          <li><a href="Filmografia"> FILMOGRAFIA</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar;