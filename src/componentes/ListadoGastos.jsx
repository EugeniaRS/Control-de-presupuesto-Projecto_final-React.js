import React from "react";
import Gasto from "./Gasto";
const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="mt-40  w-11/12 max-w-7xl m-auto text-center">
      {filtro ? (
        <>
          <h2 className="font-black text-slate-500 text-3xl">
            {gastosFiltrados.length ? "Gastos" : "No hay gastos en esta categoria"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-slate-500 text-3xl">
            {gastosFiltrados.length ? "Gastos" : ''}
          </h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
