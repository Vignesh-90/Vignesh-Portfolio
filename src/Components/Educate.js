import React from 'react'



export const Educate = () => {
    return (
        <>
            <section className="bg-cyan-100 py-10" id='educate'>
                <div className="max-w-screen-lg mx-auto px-4">
                    {/* <!-- Heading Section --> */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-semibold text-black">Education</h1>
                        <p className="text-lg text-gray-600 mt-2">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                    </div>

                    {/* <!-- Surya Group of Institutions --> */}
                    <div className="mb-10 animate__animated animate__fadeIn animate__delay-1s">
                        <h2 className="text-[22px] font-bold text-orange-400">Surya Group Of Institutions, Villupuram, Tamil Nadu</h2>
                        <p className="text-[18px] mt-2 text-gray-600">Bachelor of Engineering - BE, Computer Science and Engineering</p>
                        <p className="text-[15px] text-gray-600">Oct 2020 - May 2024</p>
                        <p className="text-[13px] text-gray-600">Grade: 8.00 CGPA</p>
                        <p className="mt-4 text-gray-700 ppptag">I completed a Bachelor's degree in Computer Science and Engineering at Surya Group of Institutions, Villupuram, Tamil Nadu, where I am learning and working on exciting projects with a team of talented developers.</p>
                    </div>

                    {/* <!-- Sri Lakshmi Vidhyalaya Matric Higher Secondary School --> */}
                    <div className="mb-10 animate__animated animate__fadeIn animate__delay-2s">
                        <h2 className="text-[22px] font-bold text-white">Sri Lakshmi Vidhyalaya Matric Higher Secondary School, Arakandanallur, Villupuram, Tamil Nadu</h2>
                        <p className="text-[18px] mt-2 text-gray-600">HSC(XII), Computer Science and Mathematics</p>
                        <p className="text-[15px] text-gray-600">June 2019 - Apr 2020</p>
                        <p className="text-[13px] text-gray-600">Grade: 58%</p>
                        <p className="mt-4 text-gray-700 ppptag">I completed my class 12th high school education at Sri Lakshmi Vidhyalaya Matric Higher Secondary School, Arakandanallur, Villupuram, Tamil Nadu, where I studied Computer Science and Mathematics.</p>
                    </div>

                    {/* <!-- Balamandir Matric Higher Secondary School --> */}
                    <div className="animate__animated animate__fadeIn animate__delay-3s">
                        <h2 className="text-[22px] font-bold text-green-400">Balamandir Matric Higher Secondary School, Arakandanallur, Villupuram, Tamil Nadu</h2>
                        <p className="text-[18px] mt-2 text-gray-600">SSLC(X)</p>
                        <p className="text-[15px] text-gray-600">Jun 2017 - Apr 2018</p>
                        <p className="text-[13px] text-gray-600">Grade: 69%</p>
                        <p className="mt-4 text-gray-700 ppptag">I completed my class 10th education at Balamandir Matric Higher Secondary School, Arakandanallur, Villupuram, Tamil Nadu.</p>
                    </div>
                </div>
            </section>


        </>
    )
}

