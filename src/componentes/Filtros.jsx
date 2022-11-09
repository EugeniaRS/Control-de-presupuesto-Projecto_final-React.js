import {useState,useEffect} from 'react'

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className='sombra w-11/12 max-w-7xl m-auto filtros mt-96 mb-12 md:max-w-5xl p-20 '>
        <form>
            <div className='campo'>
                <label className='text-5xl font-black  text-slate-500'>Filtrar Gastos</label>
                <select
                 value={filtro}
                 onChange={ e => setFiltro(e.target.value)}
                >
                <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="hobbies">Hobbies-</option>
            <option value="gastos">Gastos varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros