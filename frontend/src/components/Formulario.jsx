import React from 'react'

export const Formulario = () => {
  return (
    <div className=''>
      <h1>Contacto:</h1>
      <form className="" action="mailto:@.com">
        <div className=''>
          <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      
        </div>
        </form>

    </div>
  )
}
 