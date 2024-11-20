import React from 'react'
import model from '../assests/proj/model.jpg'
import model2 from '../assests/proj/pic 1.jpg'
import model3 from '../assests/proj/pic 2.jpg'
import model4 from '../assests/proj/pic 5.jpg'

export const Projects = () => {
    return (
        <>
            <section className="flex flex-col w-[100%] py-5 px-5 justify-center bg-blue-300 " id='project'>
                <div className="w-full md:w-1/2 pb-4">
                    <div className="flex flex-col md:flex-row justify-center items-start">
                        <h1 className="text-white text-3xl border-b-4 mb-4 md:mb-0 md:w-[150px] text-center md:text-left">Projects!</h1>
                        <p className=" text-center md:text-left md:ml-4">
                            Here are some of my final year projects. I worked on the frontend, while the backend is built with Python using Deep Learning.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="flex flex-col items-center">
                            <img className="h-[200px] w-full object-cover rounded-lg shadow-lg" src={model} alt="Project 1" />
                            {/* <p className="mt-2 text-center text-sm">Project 1</p> */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="h-[200px] w-full object-cover rounded-lg shadow-lg" src={model2} alt="Project 2" />
                            {/* <p className="mt-2 text-center text-sm">Project 2</p> */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="h-[200px] w-full object-cover rounded-lg shadow-lg" src={model3} alt="Project 3" />
                            {/* <p className="mt-2 text-center text-sm">Project 3</p> */}
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="h-[200px] w-full object-cover rounded-lg shadow-lg" src={model4} alt="Project 4" />
                            {/* <p className="mt-2 text-center text-sm">Project 4</p> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
