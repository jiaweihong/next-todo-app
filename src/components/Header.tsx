import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between w-ful p-6 text-4xl'>
        <h1 className=''>
            ToDo List
        </h1>

        <i className="fa fa-user cursor-pointer" aria-hidden="true"></i>
    </div>
  )
}
