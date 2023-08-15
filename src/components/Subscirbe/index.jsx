import React from 'react'
import { Input } from 'antd'

const index = () => {
    return (
        <section className='py-10 bg-[#EFF2F4]'>
            <div className="container mx-auto px-5">
                <h2 className='text-center text-xl text-[#1C1C1C] font-semibold'>Subscribe on our newsletter</h2>
                <p className='text-center text-base text-[#606060] mb-5'>Get daily news on upcoming offers from many suppliers all over the world</p>

                <div className='flex gap-2 justify-center'>
                    <Input className='p-[10px] w-[275px]' placeholder="✉️ Email" />
                    <button className='px-4 py-1 bg-[#127FFF] rounded-md text-white text-base font-medium'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default index