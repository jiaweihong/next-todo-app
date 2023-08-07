import React, { useContext, useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const [error, setError] = useState('')

  const {login, register, currentUser} = useAuth()
  console.log(currentUser)

  async function submitHandler() {
    if (!email || !password) {
      setError('Please input email / password')
      return 
    } 

    if (isLoggingIn) {
      try {
        await login(email, password)
      } catch (error) {
        setError(error.message)
      }
    } else {
      try {
        await register(email, password)
      } catch (error) {
        setError(error.message)
      }
    }
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4 h-full p-52'>
        <p className='text-4xl font-bold uppercase'>{isLoggingIn ? 'login' : 'register'}</p>

        <div className='text-red-500 text-left w-96'>{error}</div>

        <input type="text" value={email} placeholder='Email' className='outline-none text-black p-2 text-lg font-normal w-96' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder='Password' className='outline-none text-black p-2 text-lg font-normal w-96' onChange={(e) => setPassword(e.target.value)}/>

        <button className='w-96 border-solid border-2 p-4 uppercase hover:bg-sky-700' onClick={() => {submitHandler()}}> Submit </button>
        <p className='w-96 text-center hover:cursor-pointer hover:text-sky-700 uppercase' onClick={() => {setIsLoggingIn(!isLoggingIn)}}>{!isLoggingIn ? 'login' : 'register'}</p>
    </div>
  )
}
