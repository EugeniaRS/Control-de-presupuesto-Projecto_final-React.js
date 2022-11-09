import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  gastos,
  presupuesto,
  setGastos,
  setPresupuesto,
  setValidaMuestraPresupuesto
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
    //calculo porcentaje
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const resetApp =() =>{
   const respuesta= confirm('¿Deseas reiniciar Presupuesto y Gastos?');
   if(respuesta){
    setGastos([]);
    setPresupuesto(0)
    setValidaMuestraPresupuesto(false)
   }
   
  }
  return (
    <div
      className="-mt-20 justify-between items-center translate-y-20  w-1/2 max-w-7xl m-auto  
    shadow-xl
bg-white flex 
p-11
rounded-2xl
justify-items-start
 
"
    >
      <div className="w-full">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#8b5cf6",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100 ? "#DC2626" : "#8b5cf6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto ">
        <button
          type="button"
          onClick={resetApp}
          className=" left-8 bg-pink-600 hover:bg-pink-200 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-400 rounded"
        >
          Resetear App
        </button>
        <p>
          <span>Presupesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""} `}>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
