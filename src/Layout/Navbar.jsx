import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center px-10 bg-slate-950 text-white'>
            <div className='py-4'>
                <Link className='text-2xl font-semibold text-white'>Logo</Link>
            </div>
            <div>
                <ul className='flex'>
                    <li className=''>
                        <Link className='bg-blue-800 duration-300 py-4 px-2'>Home</Link>
                    </li>
                    <li className=''>
                        <Link className='hover:bg-blue-800 duration-300 py-4 px-2'>About</Link>
                    </li>
                    <li className=''>
                        <Link className='hover:bg-blue-800 duration-300 py-4 px-2'>About</Link>
                    </li>
                    <li className=''>
                        <Link className='hover:bg-blue-800 duration-300 py-4 px-2'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar