import React from 'react'
import { useState } from 'react'
import{Link} from "react-router-dom"


function CheckoutForm({onConfirm}) {

  const[name, setName] = useState("")
  const[phone, setPhome] = useState("")
  const[email, setEmail] = useState("")

  const handleConfirm = (event) =>{
    event.preventDefault();
    const userData = {
      name,
      phone,
      email
    }
    onConfirm(userData)
  }

  return (
    <div className='flex justify-center mt-16 max-h-screen h-60 mb-96'>
        <form onSubmit={handleConfirm} className=' w-1/2'>
          <div className='flex flex-col   mb-5'>
          <label htmlFor='Nombre' >Nombre</label>
          <input value={name} onChange={({target})=>setName(target.value)} id='Nombre' className=' border-b-4 border-b-green-400 '/>
          </div>
          <div className='flex flex-col   mb-5'>
            <label htmlFor='Email'>Email</label>
            <input value={email} onChange={({target})=>setEmail(target.value)} id='Email' className=' border-b-4 border-b-green-400 '/>
          </div>
          <div className='flex flex-col   mb-5'>
            <label htmlFor='Telefono'>Telefono</label>
          <input value={phone} onChange={({target})=>setPhome(target.value)} type='tel'  id='Telefono' className=' border-b-4 border-b-green-400 '/>
          </div>
          <div className='flex justify-center'>
          <input type='submit' value={"Enviar"} className=' bg-green-600 font-semibold text-white mt-5 w-8/12 center cursor-pointer'/>
          </div>
          <div className=' flex justify-center '>
             <Link to="/" className=' bg-green-600 font-semibold text-white mt-5 w-8/12 text-center'>Inicio</Link>
          </div>
           
          
        </form>
    </div>
  )
}

export default CheckoutForm