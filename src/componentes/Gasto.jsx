import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from "../codigojs"
import ImgFood from "../img/icono_food_e.svg"
import ImgAhorro from "../img/icono_ahorro.svg"
import ImgHome from "../img/icono_casa.svg"
import ImgHobbie from "../img/icono_ocio.svg"
import ImgGastos from "../img/icono_gastos.svg"
import ImgSalud from "../img/icono_salud.svg"
import ImgSus from "../img/icono_suscripciones.svg"


const galeriaImg={
    comida:ImgFood,
    ahorro:ImgAhorro,
    casa:ImgHome,
    hobbies:ImgHobbie,
    gastos :ImgGastos,
    salud:ImgSalud,
    suscripciones :ImgSus
}

const Gasto = ({gasto ,setGastoEditar,eliminarGasto}) => {
    const {categoria, nombre, cantidad,id,fecha}=gasto;
    const leadingActions =() =>(
    <LeadingActions >
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
    )
    const trailingActions= () => (
      <TrailingActions>
        <SwipeAction
         destructive={true}
         onClick={() => eliminarGasto(id) }>
           Eliminar
          </SwipeAction>
      </TrailingActions>

    )

  return (
    <SwipeableList>
      <SwipeableListItem 
       leadingActions={ leadingActions()}
       trailingActions={ trailingActions()}
      >
    <div className="flex justify-between items-center gap-8 mb-8 w-full  sombra ">
      <div className="contenido-gasto ">
        <img 
        src={galeriaImg [categoria]} 
        alt="icono gasto"
         />
        <div className="descripcion-gasto">
         <p className="categoria">{categoria}</p>
         <p className="nombre-gasto">{nombre}</p>
         <p className="fecha-gasto">
            Agregado el :{' '}
            <span>{formatearFecha(fecha)}</span>
         </p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
    </SwipeableListItem>
   </SwipeableList>
  );
};

export default Gasto;
