import React from 'react'
import Img from 'next/image'

const Projects = () => {
  return (
    <div className='w-full flex flex-col gap-9 p-5 lg:p-20 bg-[#f2f4f7]'>
        <div className='text-3xl font-bold'>
            Projects we are proud of
        </div>
        <div className='text-sm font-medium'>
        Our software development company is truly proud of the wonderful clients we have <br className='hidden lg:block' />worked with. We enjoy a long-term partnership
        </div>
        <div className='w-full lg:w-1/2'>
            <ul className='flex gap-5 overflow-x-auto'>
                <li className='border-b-2 border-[#ffba00] font-bold'>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
            </ul>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-10'>
            <div className='w-full lg:w-1/2 gap-8 flex flex-col'>
                <div className='text-3xl font-bold'>
                    Project 1
                </div>
                <div className='text-sm font-medium'>
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels
                </div>
                <div className='w-full'>
                    <ul className='w-full flex flex-wrap gap-2'>
                        <li>Business analysis</li>
                        <span className='text-[#ffba00]'>/</span>
                        <li>iOS</li>
                        <span className='text-[#ffba00]'>/</span>
                        <li>Android</li>
                        <span className='text-[#ffba00]'>/</span>
                        <li>QA</li>
                        <span className='text-[#ffba00]'>/</span>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <ul className='flex flex-wrap gap-5'>
                        <li className='flex items-center gap-2'>
                            <span>
                                <Img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721649587/interns/Icon_Color_1_dcim6j.png" width="15" height="5" alt="India"/>
                            </span>
                            <span className='text-sm'>India</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span><Img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721649606/interns/Icon_Color_2_njnwo4.png" width="15" height="5" alt="Real Estate"/></span>
                            <span className='text-sm'>Real Estate</span>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex justify-between lg:justify-normal gap-10'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-2xl font-bold'>400%</span>
                        <span className='text-sm font-medium text-slate-400'>User Growth</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-2xl font-bold'>+200,000</span>
                        <span className='text-sm font-medium text-slate-400'>Active Users</span>
                    </div>
                </div>
                <div className='flex justify-between lg:justify-normal gap-5'>
                    <span>
                        <Img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721650105/interns/ios_z7xi4g.png" width="130" height="50" alt="iOS"/>
                    </span>
                    <span>
                        <Img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721650104/interns/Frame_10782_orpg4s.png" width="120" height="50" alt="Android"/>
                    </span>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-end'>
                <Img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721649863/interns/image_15_pdnlt4.png" width="446" height="500" alt="Project Image"/>
            </div>
        </div>
    </div>
  )
}

export default Projects
