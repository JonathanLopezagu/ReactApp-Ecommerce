import React from 'react'
import { useCartContext } from '../../Context/CarritoContext'
import { useForm } from 'react-hook-form'
import './formulario.css'
const Form = () => {

  const { cart, precioTotal } = useCartContext();
  const { register,handleSubmit,watch, formState:{errors} } = useForm({ 
    defaultValues: {
      name:'',
      email:'',
      phone:'',
      location:'',
      items: cart.map((products)=>{
        const id =products.id
        const price= products.costo
        const quantity = products.quantity
        const productName = products.name
        const tot= precioTotal()
        return {id,price, productName, quantity, tot}
        
      })
    }
  }
    
  );
  const data= (datos)=>{ 
    console.log(datos)
  }
  
  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit(data)}>
        <div>
          <label className='label' >Nombre y Apellido:</label>
          <input className='inForm' placeholder='Lionel Messi' type='text' name='' {...register('name', {
            required: true,
            maxLength: 50,
            minLength:10
          } )} />
          {errors.name?.type === 'required' && <p className='pCondition'> El campo nombre es requerido</p> }
          {errors.name?.type === 'maxLength' && <p className='pCondition'> Introduce un nombre valido</p>}
          {errors.name?.type === 'minLength' && <p className='pCondition'> Introduce un nombre valido</p>}
        </div>
        <div>
          <label className='label'>Correo:</label>
          <input className='inForm' type='email' name='' placeholder='correoexample@email.com' {...register('email', { 
            required: true,
            pattern:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === 'required' && <p className='pConditionEmail'>Ingresa un email</p>}
          {errors.email?.type === 'pattern' && <p className='pCondition'> Formato de email incorrecto</p>}
        </div>        
        <div>
          <label className='label'>Telefono</label>
          <input className='inForm' type='tel' name='' placeholder='5618555555' {...register('phone', { 
            required: true,
          })}/>
          {errors.phone?.type === 'required' && <p className='pCondition'> Ingresa numero de telefono</p> }
        </div>
        <div>
          <label className='label'>Direccion</label>
          <input className='inForm' type='text' name='' placeholder='Naucalpan, Mexico calle ... #10' {...register('location', {
            required:true,
            minLength:15
          })}/>
          {errors.location?.type === 'required' && <p className='pCondition'> Ingresa la direccion de entrega</p>}
          {errors.location?.type === 'minLength' && <p className='pCondition'> Direccion incorrecta</p>}
        </div>
        <div>
          <p className='pFormPrice'> <strong> {watch('name')}  </strong> el costo de tu compra es $ {precioTotal()}.00 MXN</p>
          <input className='inpGenerate' type="submit" value="Generar orden" />
        </div>

      </form>

    </div>
  )
}

export default Form