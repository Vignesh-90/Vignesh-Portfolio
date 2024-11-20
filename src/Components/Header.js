import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export const Header = () => {
  const [toggle, settoggle] = useState(false)

 
  return (
    <>

      <header className='flex justify-between px-3 bg-primary'>
        <a className='font-bold text-amber-700 worddoc' href="#">Vigneshwaran M</a>
        <nav className='hidden md:block'>
          <ul className='flex text-amber-900 '>
            <li className='hover:text-violet-400'><a href="/">Home</a></li>
            <li className='hover:text-orange-400'><a href="#about">About</a></li>
            <li className='hover:text-yellow-400'><a href="#skill">Skills</a></li>
            <li className='hover:text-green-400'><a href="#project">Projects</a></li>
            <li className='hover:text-green-400'><a href="#educate">Education</a></li>
            <li className='hover:text-pink-400'><a href="#resume">Resume</a></li>
            <li className='hover:text-red-400'><a href="#contact">Contact</a></li>
          </ul>
        </nav>



        {toggle && <nav className='block md:hidden mobile-nav'>
          <ul onClick={ ()=>settoggle(!toggle)} className='flex flex-col  mobile-nav'>
            <li className='hover:text-red-400'><a href="#">Home</a></li>
            <li className='hover:text-pink-400'><a href="#about">About</a></li>
            <li className='hover:text-orange-400'><a href="#skill">Skills</a></li>
            <li className='hover:text-yellow-400'><a href="#project">Projects</a></li>
            <li className='hover:text-yellow-400'><a href="#educate">Education</a></li>
            <li className='hover:text-violet-400'><a href="#resume">Resume</a></li>
            <li className='hover:text-green-400'><a href="#contact">Contact</a></li>
          </ul>
        </nav>}
        <button onClick={() => settoggle(!toggle)} className='block md:hidden'> <Bars3Icon className='text-black h-5' /> </button>

      </header>

   


    </>

  )
}
