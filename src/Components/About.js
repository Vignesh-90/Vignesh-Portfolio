import React from 'react'
import img from '../assests/my pic.png'

export const About = () => {
  return (
    <section className='flex flex-col md:flex-row about px-5' id='about'>
      <div className='md:w-1/2'>
        <img src={img} alt="#" className='border ' />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h2 className='text-3xl text-white border-b-4 mb-4 w-[160px]'>About Me!</h2>
          <p className=' text-white ptag'>Hi Iam VIGNESHWARAN M as a B.E , Computer Science and Engineering graduate. I hope
            to find a web development and software development job. To pursue a challenging,growth while expanding my knowledge base.
            I am a positive attitude, smart hardworking, dedication and more confidence are my gretest strength.
          </p>
        </div>
      </div>
    </section>
  )
}
