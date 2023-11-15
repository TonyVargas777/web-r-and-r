import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.motivo) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

      const response = await fetch(
      "http://localhost:3001/submit-form",  //Aquí habrá que poner la URL del servidor backend
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Formulario enviado con éxito!");
      } else {
      alert("Error enviando el formulario. Por favor envíelo de nuevo.");
    }
  };

  return (
    <div className=" flex flex-col bg-azul-rodar text-white font-bold py-2 px-4 rounded-3xl mt-2 border-white border-double">
      <h1 className="mt-10 bg-rojo-rodar rounded-3xl w-80%">Contacto:</h1>
      <form onSubmit={handleSubmit}>
        <div className="pb-10 pr-10 pl-10 flex flex-col">
          <label className="p-10 underline" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="text-black rounded"
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <label className="p-10 underline" htmlFor="email">
            Email:
          </label>
          <input
            className="text-black rounded"
            type="text"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="p-10 underline" htmlFor="motivo">
            Motivo de contacto:
          </label>
          <textarea
            className="text-black rounded"
            id="motivo"
            placeholder="Motivo de contacto"
            value={formData.motivo}
            onChange={handleChange}
          ></textarea>

          <input className="m-10 bg-rojo-rodar rounded-xl border-2 border-white hover:bg-indigo-500" type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};
export default Formulario;