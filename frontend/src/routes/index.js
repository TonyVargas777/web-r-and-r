/* import React from "react"; */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Formulario } from "../components/Formulario";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <section className="" id="">
        <Routes>
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
