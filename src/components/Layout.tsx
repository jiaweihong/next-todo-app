import React from 'react'
import Header from './Header';


export default function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col min-h-screen bg-sky-950 text-white'>
        <Header/>
        <main className='flex-1'>
            {children}
        </main>
    </div>
  )
}
