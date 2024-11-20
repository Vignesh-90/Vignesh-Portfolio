import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { SiPostman } from "react-icons/si";



export const Bad = () => {
    return (
        <>
            <section className="bg-cyan-100 py-10" id='skill'>
                <div className="mainski md:w-1/2 pb-10 text-center mx-auto">
                    <h1 className="font-bold text-4xl mb-4">Skills</h1>
                    <p className="text-lg text-gray-600">Here are some of my skills...</p>
                </div>

                <div className="md:w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Frontend Section */}
                    <div className="flex flex-col items-center p-4 w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-gray-600 text-xl font-semibold mb-4">Frontend</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <p className="flex items-center text-lg">
                                <TiHtml5 className="text-red-600 mr-2" /> HTML
                            </p>
                            <p className="flex items-center text-lg">
                                <IoLogoCss3 className="text-blue-500 mr-2" /> CSS
                            </p>
                            <p className="flex items-center text-lg">
                                <IoLogoJavascript className="text-yellow-500 mr-2" /> JavaScript
                            </p>
                            <p className="flex items-center text-lg">
                                <FaReact className="text-blue-500 mr-2" /> React JS
                            </p>
                            <p className="flex items-center text-lg">
                                <FaBootstrap className="text-purple-600 mr-2" /> Bootstrap
                            </p>
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div className="flex flex-col items-center p-4 w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-gray-600 text-xl font-semibold mb-4">Backend</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <p className="flex items-center text-lg">
                                <FaNodeJs className="text-green-600 mr-2" /> Node JS
                            </p>
                            <p className="flex items-center text-lg">
                                <SiExpress className="text-gray-800 mr-2" /> Express JS
                            </p>
                            <p className="flex items-center text-lg">
                                <SiMongodb className="text-green-700 mr-2" /> MongoDB
                            </p>
                        </div>
                    </div>

                    {/* Other Skills Section */}
                    <div className="flex flex-col items-center p-4 w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-gray-600 text-xl font-semibold mb-4">Others</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <p className="flex items-center text-lg">
                                <FaGithub className="text-gray-900 mr-2" /> GitHub
                            </p>
                            <p className="flex items-center text-lg">
                                <FaFileExcel className="text-green-500 mr-2" /> MS Excel
                            </p>
                            <p className="flex items-center text-lg">
                                <SiPostman className="text-orange-600 mr-2" /> Postman
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
