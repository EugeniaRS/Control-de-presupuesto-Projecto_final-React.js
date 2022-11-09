 import { useState, useEffect } from "react" 
 import Alerta from "./Alerta"
import ImgCerrar from "../img/cerrar.svg"

const Modal = ({setModal,modalAnimar,setModalAnimar, guardarGasto,gastoEditar, setGastoEditar }) => {
   const [alerta,setAlerta]=useState('');
    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState('');
    const[categoria,setCategoria]= useState('');
    const [fecha,setFecha]=useState('')
    const [id, setId]=useState('')

    useEffect( ()=>{
      if(Object.keys(gastoEditar).length > 0){
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha) 

       }
    },[]);

    const ocultarModal=()=>{
        setModalAnimar(false)
        setGastoEditar({})
        setTimeout(() =>{
            setModal(false)
        },500);
    }

    const validarSubmit = (e) =>{
      e.preventDefault();
    
      if([nombre, cantidad, categoria].includes('')){
        setAlerta('Todos los campos son obligatorios');
        setTimeout( () => {
         setAlerta('')
        }, 3000);
        return;
      }
      guardarGasto ({nombre, cantidad, categoria,id,fecha})

        };

  return (
   <div className="modal">
    <div className="boton-cerrar">
        <img src={ImgCerrar} alt="cerrar modal" onClick={ocultarModal} />
    </div>
    <form 
    onSubmit={validarSubmit} 
    className={ `formularioMod ${modalAnimar ? "animar": ''}` }
     >
       <legend className="text-6xl text-center block uppercase text-white mb-16 pb-4 borde border-b-4 border-indigo-500  ">{gastoEditar.nombre ? 'Editar Gadto' : 'Nuevo Gasto'}</legend> 
        
        {alerta && <Alerta tipo="error">{alerta}</Alerta>}

       <div className="grid mb-8">
        <label htmlFor="nombre" className="text-4xl text-left mb-8 font-medium text-indigo-400">Nombre de Gasto</label>
        <input className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base " id="nombre" type="text" placeholder="Añade el nombre del gasto" value={nombre} onChange={ (e)=> setNombre(e.target.value) } />  
       </div>
       <div className="grid mb-8">
        <label htmlFor="cantidad" className="text-4xl text-left mb-8 font-medium text-indigo-400">Cantidad</label>
        <input  className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base" id="cantidad" type="number" placeholder="Añade la cantidad de gasto" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value) ) } />
       </div>
       <div className="grid mb-8">
        <label htmlFor="categoria" className="text-4xl text-left mb-8 font-medium text-indigo-400">Categoria</label>
        <select  className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base mb-8 text-center"  id="categoria" value={categoria} onChange={ (e) => setCategoria(e.target.value) }>
            <option value="">--Todas las Categorias--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="hobbies">Hobbies-</option>
            <option value="gastos">Gastos varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            
        </select>
       
       </div>
       <input 
       type="Submit" 
        value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir gasto'}  
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4  text-center rounded-2xl focus:outline-none focus:shadow-outline   w-full"/>

    </form>
   </div>
  )
}

export default Modal