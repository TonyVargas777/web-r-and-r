import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { intro, about, filmografia } from "../pages";
import { intro, about, filmografia } from "../pages";
import { Crear, Editar } from "../components";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <section className="" id="">
        <Routes>
          <Route path="/" element={<intro />} />
          <Route path="/home" element={<intro />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar/id:" element={<Editar />} /> 
          <Route path="/about" element={<about/>}/>
          <Route path="/filmografia" element={<filmografia />}/>

          <Route path="/*" element={
            <div className="">
              <h1>Error 404</h1>
            </div>
          }/>
        </Routes>
      </section>
      <Sidebar/>
      <Footer/>
    </BrowserRouter>
  );
};