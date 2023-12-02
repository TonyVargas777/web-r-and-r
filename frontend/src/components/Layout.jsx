import React from "react";
import { createGlobalStyle } from "styled-components";
import {Footer, Formulario, Navbar, Editar, Menu, ListadoPeliculas, CardPelicula} from "../components";

const GlobalStyle = createGlobalStyle`
  background-color: var(--primary-color);
  secondary-color: var(--secondary-color);
  font-family:
    var(--font-family-primary),
    var(--font-family-secondary),
    var(--font-family-tertiary),
    var(--font-family-quaternary),
    var(--font-family-quinary);
`
;
const handleAddFilm = (newFilm) => {
  // Lógica para agregar la nueva película
  console.log("Nueva película añadida:", newFilm);
};
const Layout = ({ children }) => {
  return (
    <>
      {<GlobalStyle />}
      {/* <Navbar/> */}  
      {/* <Crear/> */} 
      {/* <Menu onAddFilm={handleAddFilm}/> */}
      {/* <Formulario/> */}
      {/* {<Editar/>} */} 
      {/* {<Menu/>} */} 
      {/* {<ListadoPeliculas/>} */} 
      {/* </CardPelicula/> */}
      {/* <Lista/> */}
      {/* {children} */}
      {/* <Footer /> */}     
    </>
  );
};

export default Layout;