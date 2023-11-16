import React from 'react';
import { MapPin } from 'tabler-icons-react';
import { Mailbox } from 'tabler-icons-react';
import { PhoneCall } from 'tabler-icons-react';
import { BrandYoutube } from 'tabler-icons-react';
import { BrandTwitter } from 'tabler-icons-react';
import { BrandLinkedin } from 'tabler-icons-react';
// import { Login } from 'tabler-icons-react';
              

const Footer = () => {

 const youtube ="#" ;
 const linkedin ="#";
 const twitter = "#";

  return (
    <>
<div className='padreFooter'>

<div className='logoFooter'>
  <img src='https://res.cloudinary.com/dvoh9w1ro/image/upload/v1699034797/Logo_Oficial_-_Logo_Rojo_-_Fondo_Blanco_mn7lvf.jpg'/>
</div>

<div className='infoContacto'>
   <p>
    <span className='iconTexto'><PhoneCall size={20} strokeWidth={1} color={'white'} /></span> Teléfono:
    <span className='informacionContacto'> (+34) 934.155.100 </span>
  </p>
 
  <p><span className='iconTexto'><Mailbox size={20} strokeWidth={1} color={'white'}/></span> Email:
  <span className='informacionContacto'> rodarbarcelona@rodaryrodar.com </span></p>
  <p> <span className='iconTexto'><MapPin size={20} strokeWidth={1} color={'white'} /></span> Dirección:
    <span className='informacionContacto'> Carrer de L'Església, 4-6 <br></br>Barcelona 08024  </span>
  </p>
</div>


<div>
<div className='socialMedia'>
  <a href={youtube} target="_blank" rel="noopener noreferrer">
  <BrandYoutube size={40} strokeWidth={2} color={'white'}/>
  </a>

  <a href={linkedin} target="_blank" rel="noopener noreferrer">
    <BrandLinkedin size={40} strokeWidth={2} color={'white'}/>
   </a>

  <a href={twitter} target="_blank" rel="noopener noreferrer">
  <BrandTwitter size={40} strokeWidth={2} color={'white'}/>
  </a>
</div>
<div className='enlacesInternos'>

  <div className='enlacesFooter'>
<a href='#'>Inicio</a>
<a href='#'>Nosotros</a>
<a href='#'>Premios</a>
<a href='#'>Contacto</a>
  </div>

  <div className='enlacesFooter'>
  <a href='#'>Peliculas</a>
  <a href='#'>Series</a>
  <a href='#'>Documentales</a>
  <a href='#'>Diseño Web</a>
    </div>

</div>

</div>
</div>
    
<div className='footerFinal'>
<a href='#'>Policies</a>
<a href='#'>Cookies</a>
<a href='#'>Derechos de autor</a>
{/* <a href='#'><Login size={28} strokeWidth={2} color={'white'}/></a> */}
</div>   
    </>
  )
}

export default Footer