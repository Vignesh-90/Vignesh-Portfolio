import React from 'react'
import myres from '../assests/Resume/My.png'

export const Resume = () => {
  const config = {
    link: 'https://drive.google.com/file/d/17UfeN2MyzuvOo3yTyFVriy39RS56n9z6/view?usp=drivesdk'
  };

  return (
    <>

      <section className="flex flex-col md:flex-row justify-center items-center px-5 bg-blue-300 py-12" id='resume'>
        {/* Image Section */}
        <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
          <img
            src={myres}
            alt="Resume"
            className="border w-[200px] h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-white mb-6 border-b-4 border-cyan-500 inline-block pb-2">
              My Resume
            </h2>
            <p className="text-white text-lg mb-6">
              You can view and download my resume by clicking the button below.
            </p>
            <a
              href={config.link}
              className="bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-cyan-400 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>



    </>
  )
}
