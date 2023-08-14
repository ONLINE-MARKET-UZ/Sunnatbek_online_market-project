import React from 'react'
import { Select, Space } from 'antd';
import { Input } from 'antd';

const index = () => {
    return (
        <Space wrap className='border-2 border-[#0D6EFD] rounded-lg overflow-hidden'>
            <Input placeholder="Search" className='p-[10px] rounded-none w-[420px] border-e-[#0D6EFD]' />
            <Select
                defaultValue="All category"
                style={{ width: 145 }}
                bordered={false}
                options={[
                    { value: 'category', label: 'All category' },
                    { value: 'selected', label: '2nd category' },
                ]}
            />
            <button className='py-[10px] px-6 bg-[#0D6EFD] text-white text-base font-medium'>Search</button>
        </Space>
    )
}

export default index