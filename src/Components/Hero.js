import React from 'react'
import Heroimg from '../assests/coding.png'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


export const Hero = () => {

    const config = {
        linkedin: 'https://www.linkedin.com/in/vigneshwaran-m-3468502b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/wikki__offcl/profilecard/?igsh=MWttZzRndGx3NzUxcQ==',
        twitter: 'https://x.com/Wikkiow?t=tmLulA8e2PqAAUZQ6SigRw&s=09'
      }

    return (
        <>
            <div className='main bg-cyan-100'>
                {/* Marquee for Welcome Message */}
                {/* <div className='flex justify-center bg-gray-500 py-2'>
                    <h4 className='text-white text-xl font-semibold animate-marquee'>
                        WELCOME TO MY PORTFOLIO 🙏
                    </h4>
                </div> */}
                <marquee behavior="" direction="">
                    <h5> WELCOME TO MY PORTFOLIO 🙏</h5>
                </marquee>

                {/* Main Section */}
                <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center items-center'>
                    {/* Left Column (Text) */}
                    <div className='md:w-1/3 flex flex-col text-center md:text-left mb-8 md:mb-0'>
                        <h1 className='text-2xl font-bold'>
                            Hi, <br /> I'm <span className='text-orange-300'>VIGNESHWARAN</span> M
                        </h1>
                        <div className='text-lg mt-2'>
                            <p className='wikki text-xl'>
                                I'm a MERN Stack Developer <span className='text-blue-700'>(Fresher)</span>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className='flex justify-center md:justify-start py-5'>
                            <a href={config.linkedin} className='pr-3 hover:text-blue-400'>
                                <IoLogoLinkedin size={20} />
                            </a>
                            <a href={config.instagram} className='pr-3 hover:text-pink-400'>
                                <FaSquareInstagram size={20} />
                            </a>
                            <a href={config.twitter} className='hover:text-white'>
                                <FaXTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Image) */}
                    <div className='md:w-1/3'>
                        <img className='w-full md:w-full rounded-lg shadow-lg' src={Heroimg} alt="Vigneshwaran" />
                    </div>
                </section>
            </div>


        </>
    )
}
