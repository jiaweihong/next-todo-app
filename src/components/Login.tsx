import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 h-full'>
        <p className='text-4xl font-bold'>LOGIN</p>
        <input type="text" placeholder='Email' className='outline-none text-black p-2 text-lg font-normal w-96'/>
        <input type="text" placeholder='Password' className='outline-none text-black p-2 text-lg font-normal w-96'/>
        <button className='w-96 border-solid border-2 p-4 uppercase hover:bg-sky-700'> Submit </button>
    </div>
  )
}
