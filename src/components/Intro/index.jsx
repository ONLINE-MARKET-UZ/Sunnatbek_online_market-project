import React from 'react'
import IntroCarousel from './IntroCarousel'
import './intro.scss'
import avatar from '../../assets/avatar.jpg'

const index = () => {
    return (
        <section className='py-5'>
            <div className='container mx-auto px-5'>
                <div className="intro_wrapper flex items-center justify-between p-4 border rounded-md gap-3">
                    <ul>
                        <li className=''>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Automobiles
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Clothes and wear
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Computer and tech
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Tools, equipments
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Sports and outdoor
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Animal and pets
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                Machinery tools
                            </p>
                        </li>
                        <li>
                            <p className='text-base text-[#505050] hover:font-medium cursor-pointer focus:bg-[#E5F1FF] focus:text-[#1C1C1C]'>
                                More category
                            </p>
                        </li>
                    </ul>

                    <IntroCarousel />

                    <ul>
                        <div className='card px-[10px] pt-[17px] pb-3 bg-[#E3F0FF] rounded-md'>
                            <div className='flex items-center gap-2 mb-4 '>
                                <img src={avatar} alt="avatar" />
                                <h5 className='text-base text-[#1C1C1C]'>Hi, user <br /> let’s get stated</h5>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <button className='w-[180px] h-[30px] bg-[#0D6EFD] rounded-md text-white'>Join now</button>
                                <button className='w-[180px] h-[30px] bg-white text-[#0D6EFD] rounded-md border border-[#DEE2E7]'>Join now</button>
                            </div>
                        </div>

                        <div className='px-4 pt-4 pb-[22px] bg-[#F38332] rounded-md my-[13.5px]'>
                            <p className='text-base text-white '>Get US $10 off with a new supplier</p>
                        </div>

                        <div className='px-4 pt-4 pb-[22px] bg-[#55BDC3] rounded-md'>
                            <p className='text-base text-white '>Send quotes with supplier preferences</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default index