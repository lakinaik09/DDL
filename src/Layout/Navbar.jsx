import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY>100){
                setNavbarVisible(true)
            }else{
                setNavbarVisible(false)  
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <header>
        <nav className={`flex justify-between items-center md:px-10 lg:px-16 text-white fixed transition-all duration-500 ${navbarVisible ?'backdrop-blur-sm bg-white/30':''} w-full`}>
            <div className='py-4'>
                <NavLink to='/' className='text-2xl font-semibold text-white'>Digitaldeta</NavLink>
            </div>
            <div>
                <ul className='flex md:gap-6'>
                    <li className=''>
                        <NavLink to='/' className={({isActive})=>isActive?'relative after:absolute after:content-[""] after:w-full after:scale-x-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4 ':'relative after:absolute after:content-[""] after:w-full after:scale-x-0 hover:after:scale-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4'}>Home</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/featured-courses' className={({isActive})=>isActive?'relative after:absolute after:content-[""] after:w-full after:scale-x-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4 ':'relative after:absolute after:content-[""] after:w-full after:scale-x-0 hover:after:scale-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4'}>Featured Courses</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/free-masterclass' className={({isActive})=>isActive?'relative after:absolute after:content-[""] after:w-full after:scale-x-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4 ':'relative after:absolute after:content-[""] after:w-full after:scale-x-0 hover:after:scale-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4'}>Free Masterclass</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/contact-us' className={({isActive})=>isActive?'relative after:absolute after:content-[""] after:w-full after:scale-x-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4 ':'relative after:absolute after:content-[""] after:w-full after:scale-x-0 hover:after:scale-100 after:duration-300  after:h-[2px] after:bg-slate-200 after:left-0 after:bottom-2 md:text-lg py-4'}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='login-button'>
                <ul className='flex items-center gap-6'>
                    <li>
                       <button className='md:px-4 py-1 border-2 border-transparent bg-slate-100 bg-opacity-30 hover:bg-opacity-15 duration-300 rounded-sm'>Sign In</button>
                    </li>
                    <li>
                    <button className='
                    
                    md:px-4 py-1 border-2 rounded-sm bg-yellow-200 text-black border-yellow-200 hover:bg-transparent duration-300 hover:text-white font-semibold
                    '>Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar