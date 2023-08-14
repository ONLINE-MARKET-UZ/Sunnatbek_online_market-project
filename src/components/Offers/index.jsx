import React from 'react'
import Card from '../Ui/Cards'

const index = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className='pl-5 flex items-start justify-between border'>
          <div className='my-5'>
            <h3 className='text-[20px] text-[#1C1C1C]'>Deals and offers</h3>
            <p className='mb-[18px] text-base text-[#8B96A5]'>Hygiene equipments</p>
            <div className='flex gap-[6px]'>
              <div className='flex flex-col items-center gap-1 py-2 px-3 bg-[#606060] rounded text-white'>
                <h4 className='text-base font-bold'>04</h4>
                <p className='text-xs'>Days</p>
              </div>

              <div className='flex flex-col items-center gap-1 py-2 px-3 bg-[#606060] rounded text-white'>
                <h4 className='text-base font-bold'>13</h4>
                <p className='text-xs'>Hour</p>
              </div>

              <div className='flex flex-col items-center gap-1 py-2 px-3 bg-[#606060] rounded text-white'>
                <h4 className='text-base font-bold'>34</h4>
                <p className='text-xs'>Min</p>
              </div>

              <div className='flex flex-col items-center gap-1 py-2 px-3 bg-[#606060] rounded text-white'>
                <h4 className='text-base font-bold'>56</h4>
                <p className='text-xs'>Sec</p>
              </div>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </section>
  )
}

export default index