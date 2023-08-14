import React from 'react'
import { Carousel } from 'antd'
import Bannder from '../../assets/banner.png'

const IntroCarousel = () => {

    return (
        <div>
            <Carousel className='w-[665px]' autoplay>
                <div className='relative'>
                    <img src={Bannder} alt="Banner" />
                    <div className='absolute top-14 left-11'>
                        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
                        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>Electronic items</h2>
                        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>Learn more</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Bannder} alt="Banner" />
                    <div className='absolute top-14 left-11'>
                        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
                        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>Electronic items</h2>
                        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>Learn more</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Bannder} alt="Banner" />
                    <div className='absolute top-14 left-11'>
                        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
                        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>Electronic items</h2>
                        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>Learn more</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Bannder} alt="Banner" />
                    <div className='absolute top-14 left-11'>
                        <h3 className='text-[28px] text-[#1C1C1C] '>Latest trending</h3>
                        <h2 className='text-[32px] text-[#1C1C1C] font-bold mb-4'>Electronic items</h2>
                        <button className='px-4 py-2 text-base text-[#1C1C1C] font-medium bg-white shadow rounded-md'>Learn more</button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default IntroCarousel