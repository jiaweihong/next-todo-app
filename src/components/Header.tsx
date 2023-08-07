import React from 'react'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const {currentUser, logout} = useAuth()
  return (
    <div className='flex justify-between w-ful p-6 text-4xl border-b-2'>
        <h1>
            Todo List
        </h1>

        {currentUser && 
          <p>Welcome back, {currentUser.email}</p>
        }

        {currentUser && <i className="fa fa-sign-out hover:cursor-pointer hover:translate-x-2 duration-300" aria-hidden="true" onClick={() => {logout()}}></i>}
    </div>
  )
}
