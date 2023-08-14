import React from 'react'
import { Select, Space } from 'antd'
import flagGermany from '../../assets/flag_germany.png'

const Navbar = () => {
    return (
        <nav className='py-4 flex items-center justify-between'>
            <ul className='flex items-center gap-6'>
                <li>
                    <a href="" className='flex items-center gap-[6px]'>
                        <i className='bx bx-menu text-3xl'></i>
                        <p className='text-base text-[#1C1C1C] font-medium leading-[22px]'>All category</p>
                    </a>
                </li>
                <li>
                    <a href="" className='text-base text-[#1C1C1C] font-medium leading-[22px]'>Hot offers</a>
                </li>
                <li>
                    <a href="" className='text-base text-[#1C1C1C] font-medium leading-[22px]'>Gift boxes</a>
                </li>
                <li>
                    <a href="" className='text-base text-[#1C1C1C] font-medium leading-[22px]'>Projects</a>
                </li>
                <li>
                    <a href="" className='text-base text-[#1C1C1C] font-medium leading-[22px]'>Menu item</a>
                </li>
                <li>

                </li>
            </ul>

            <ul>
                <Space>
                    <li>
                        <Select
                            defaultValue={`English, USD`}
                            style={{ width: 120 }}
                            bordered={false}
                            options={[
                                { value: 'usd', label: 'English, USD' },
                                { value: 'rub', label: 'Russia, Rub' },
                                { value: 'uzs', label: 'Uzbek, UZS' }
                            ]}
                        />
                    </li>
                    <li>
                        <Select
                            defaultValue={`Ship to 🇩🇪`}
                            style={{ width: 120 }}
                            bordered={false}
                            options={[
                                { value: 'usd', label: 'English, USD' },
                                { value: 'rub', label: 'Russia, Rub' },
                                { value: 'uzs', label: 'Uzbek, UZS' }
                            ]}
                        />
                    </li>
                </Space>
            </ul>
        </nav>
    )
}

export default Navbar