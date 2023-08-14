import React from 'react'
import './style.scss'
import { Select } from 'antd'

const index = () => {
    return (
        <section className='my-10'>
            <div className="container mx-auto px-5">
                <div className='banner flex justify-between px-[30px] py-[40px]'>
                    <div className='max-w-[390px] ml-5 focus:outline-blue-500'>
                        <h2 className='text-[32px] text-white font-semibold mb-4 mt-[10px]'>An easy way to send requests to all suppliers</h2>
                        <p className='text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                    </div>
                    <div className='px-5 py-6 bg-white rounded-md'>
                        <h4 className='text-xl text-[#1C1C1C font-semibold] mb-[18px]'>Send quote to suppliers</h4>
                        <input type="text" className='p-[10px] border rounded-md w-[440px] placeholder:text-[#1C1C1C] focus:outline-blue-500' placeholder='What item you need?' />
                        <textarea rows={2} cols={54} className='border block p-[12px] rounded-md placeholder:text-base text-[#8B96A5] my-5 focus:outline-blue-500' placeholder='Type more details'>
                        </textarea>
                        <div className='flex items-center gap-2 mb-5'>
                            <input type="text" className='p-[10px] rounded-md border placeholder:text-[#1C1C1C] w-[205px] focus:outline-blue-600' placeholder='Quantity' />
                            <Select
                                className='p-[6px] border rounded-md'
                                defaultValue="Pcs"
                                style={{ width: 110 }}
                                bordered={false}
                                options={[
                                    { value: 'category', label: 'Pcs' },
                                    { value: 'selected', label: '2nd category' },
                                ]}
                            />
                        </div>
                        <button className='px-4 h-10 bg-[#127FFF] rounded-md text-white text-base font-medium'>Send inquiry</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index