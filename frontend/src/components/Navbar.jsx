import React from 'react'

const Navbar = () => {

  return (
    <header className="navbarPadre">
      <span className="logoRodayRodar">
        <a href="/home" rel="noopener noreferrer">
          <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1700498465/Logo_Blanco_-_Fondo_Negro_je92ff-removebg-preview_sxvfqn.png'/>
          
       </a>
      </span>
      <nav className="menu">
        <ul>
          <li><a href="/home">INICIO</a></li>
          <li><a href="/about">QUIENES SOMOS</a></li>
          <li><a href="/filmografia">FILMOGRAFIA</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar;