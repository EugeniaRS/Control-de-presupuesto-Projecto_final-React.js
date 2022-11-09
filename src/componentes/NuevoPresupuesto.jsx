import { useState } from "react";
import Alerta from "./Alerta";
const NuevoPresupuesto = ({
   presupuesto,
   setPresupuesto,
    setValidaMuestraPresupuesto
  }) => {
  const [alerta, setAlerta] = useState('');
  //handlePresupuesto
  const validarPresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setAlerta('No es un presupuesto valido')
      return
    }

    setAlerta('')
    setValidaMuestraPresupuesto(true)
  
  }

  return (
    <div className="w-full max-w-2xl flex  items-center mx-auto">
      <form
        onSubmit={validarPresupuesto}
        className="bg-white shadow-md rounded-2xl px-8  mb-4 w-11/12 p-16 "
      >
        <div className="grid mb-8">
          <label className="text-center mb-8 text-3xl text-blue-500 font-semibold">
            Definir presupuesto
          </label>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 flex-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 text-center text-sm "
              id="username"
              type="number"
              placeholder="Añade tu presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number (e.target.value))}
            />
          </div>

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mx-auto w-11/12 md:block  "
            type="Submit"
            value="Añadir"
          />

          {alerta && <Alerta tipo="error">{alerta}</Alerta>}
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
