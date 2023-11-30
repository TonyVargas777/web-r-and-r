import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Menu, ListadoPeliculas, Editar, Navbar, Formulario, Footer } from "../components";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <section className='flex flex-col text-center h-screen items-center justify-center w-full'>
        <Routes>   
          <Route path="/" element={<Menu />} />       
          <Route path="/menu" element={<Menu />} />
          <Route path="/formulario" element={<Formulario />} />          
          <Route path="/listadoPeliculas" element={<ListadoPeliculas />} />
          <Route path="/editar/:id" element={<Editar />} />

          <Route path="/*" element={
            <div className="">
              <h1>Error 404</h1>
            </div>
          }/>
        </Routes>
      </section>
      <Footer/>
    </BrowserRouter>
  );
};
