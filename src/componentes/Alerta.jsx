import React from 'react'

const Alerta = ({children , tipo}) => {
  return (
    <div  className={`alerta ${tipo}`}>
  {children}
 
</div>
  )
}

export default Alerta

/* className="bg-red-100 border border-red-400 text-red-700
     px-4 py-3 rounded relative mt-6 text-center" */