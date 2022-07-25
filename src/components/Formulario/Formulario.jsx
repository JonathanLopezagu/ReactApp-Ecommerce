import React from 'react'

const Formulario= () => {
  return (
    <div>
        <p>Registre los siguientes datos para su compra</p>
        <form>
            <input type="text" name="nombre" id="" placeholder='Ingrese  su nombre' />
            <input type='email' name='correo' id='' placeholder='correo@example.com'/>
            <input type='email' name='correo' id='' placeholder='Vuelve a ingresar tu correo@example.com'/>
            <button>Comprar</button>
        </form>

    </div>
  )
}

export default Formulario