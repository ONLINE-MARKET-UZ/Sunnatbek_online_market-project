import React from 'react'
import watch from '../../../assets/watch.png'
import laptop from '../../../assets/laptop.png'
import camera from '../../../assets/camera.png'
import headphone from '../../../assets/headphone.png'
import smartphone from '../../../assets/smartphone.png'

const index = () => {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col items-center w-[180px] border-x py-5'>
        <div className='w-[140px] h-[140px] grid place-content-center'>
          <img src={watch} alt="Watch image" />
        </div>
        <h5 className='mt-3 mb-2 text-base '>Smart watches</h5>
        <span className='px-3 py-1 bg-[#FFE3E3] rounded-3xl text-[#EB001B] text-sm font-medium'>-25%</span>
      </div>

      <div className='flex flex-col items-center w-[180px] border-x py-5'>
        <div className='w-[140px] h-[140px] grid place-content-center'>
          <img src={laptop} alt="Watch image" />
        </div>
        <h5 className='mt-3 mb-2 text-base '>Smart watches</h5>
        <span className='px-3 py-1 bg-[#FFE3E3] rounded-3xl text-[#EB001B] text-sm font-medium'>-15%</span>
      </div>

      <div className='flex flex-col items-center w-[180px] border-x py-5'>
        <div className='w-[140px] h-[140px] grid place-content-center'>
          <img src={camera} alt="Watch image" />
        </div>
        <h5 className='mt-3 mb-2 text-base '>Smart watches</h5>
        <span className='px-3 py-1 bg-[#FFE3E3] rounded-3xl text-[#EB001B] text-sm font-medium'>-40%</span>
      </div>

      <div className='flex flex-col items-center w-[180px] border-x py-5'>
        <div className='w-[140px] h-[140px] grid place-content-center'>
          <img src={headphone} alt="Watch image" />
        </div>
        <h5 className='mt-3 mb-2 text-base '>Smart watches</h5>
        <span className='px-3 py-1 bg-[#FFE3E3] rounded-3xl text-[#EB001B] text-sm font-medium'>-25%</span>
      </div>

      <div className='flex flex-col items-center w-[180px] border-x py-5'>
        <div className='w-[140px] h-[140px] grid place-content-center'>
          <img src={smartphone} alt="Watch image" />
        </div>
        <h5 className='mt-3 mb-2 text-base '>Smart watches</h5>
        <span className='px-3 py-1 bg-[#FFE3E3] rounded-3xl text-[#EB001B] text-sm font-medium'>-25%</span>
      </div>
    </div>
  )
}

export default index