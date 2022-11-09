import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import ImgPlus from "./img/icono_plus_e.svg";
import Modal from "./componentes/Modal";
import Filtros from "./componentes/Filtros";
import ListadoGastos from "./componentes/ListadoGastos";
import { generarId } from "./codigojs";

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [validaMuestraPresupuesto, setValidaMuestraPresupuesto] =
    useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnimar, setModalAnimar] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setModalAnimar(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setValidaMuestraPresupuesto(true);
    }
  }, []);

  const showNuevogasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setModalAnimar(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //update=
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      //Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setModalAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validaMuestraPresupuesto={validaMuestraPresupuesto}
        setValidaMuestraPresupuesto={setValidaMuestraPresupuesto}
      />

      {validaMuestraPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="fixed bottom-20 right-20">
            <img
              className="w-20 hover:cursor-pointer"
              src={ImgPlus}
              alt="Agregar gasto"
              onClick={showNuevogasto} //hnadleNuvoGasto
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          modalAnimar={modalAnimar}
          setModalAnimar={setModalAnimar}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
