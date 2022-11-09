import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  validaMuestraPresupuesto,
  setValidaMuestraPresupuesto,
}) => {
  return (
    <header className="bg-indigo-400 p-12 mx-auto h-80">
      <h1 className="text-center uppercase p-12 m-0  text-6xl text-white font-semibold">
        Planificador de gastos
      </h1>

      {validaMuestraPresupuesto ? (
       
        <ControlPresupuesto
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setValidaMuestraPresupuesto={setValidaMuestraPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValidaMuestraPresupuesto={setValidaMuestraPresupuesto}
        />

      )}
      

    </header>
  );
};

export default Header;
