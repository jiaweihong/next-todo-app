import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  
  function submitHandler() {
    if (!email || !password) {
      setError(true)
      return 
    } else {
      setError(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4 h-full'>
        <p className='text-4xl font-bold'>LOGIN</p>

        {error && <div className='text-red-500 text-left w-96'>Please input a username or password</div>}

        <input type="text" value={email} placeholder='Email' className='outline-none text-black p-2 text-lg font-normal w-96' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder='Password' className='outline-none text-black p-2 text-lg font-normal w-96' onChange={(e) => setPassword(e.target.value)}/>

        <button className='w-96 border-solid border-2 p-4 uppercase hover:bg-sky-700' onClick={() => {submitHandler()}}> Submit </button>
    </div>
  )
}
