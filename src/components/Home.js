import React from 'react'
import hema from '../hema1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center block min-h-screen text-center md:flex-row sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 sm:pt-24 md:pt-44 bg-gradient-to-r from-cyan-200 to-yellow-200'>
      <img alt='img' className='pb-10 w-44 lg:w-64' src={hema}/>
      <ul className='w-full max-w-md'>
        <li className='p-3 text-lg font-bold text-orange-600 lg:w-[44rem] lg:text-7xl  animate-pulse '>Hi there, I'm Hema.</li>
        <li className='p-3 text-left lg:ml-10 lg:w-[40rem] text-cyan-600' > I am a Front End React Developer who has Strong proficiency in React, including DOM manipulation and the JavaScript object model and Thorough understanding of React.js and its core principles.</li>
        <li className='p-3 text-xl lg:text-4xl' >
          <button className='w-24 px-3 bg-orange-400 shadow-lg lg:mr-[12rem] lg:w-36 animate-bounce rounded-xl'>
            <Link
              to='#'
              onClick={(e) => {
                window.location.href = 'mailto: hemavasupalli12@gmail.com';
                e.preventDefault();
              }}>Hire Me</Link>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Home
