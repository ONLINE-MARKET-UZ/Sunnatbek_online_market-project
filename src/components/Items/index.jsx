import React, { useEffect, useState } from 'react'
import productAPI from '../Service/Products'

const index = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productAPI.getProducts().then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <section className='mb-10'>
            <div className="container mx-auto px-5">
                <h2 className='text-2xl text-[#1C1C1C] font-semibold mb-6 tracking-[-0.2px]'>Recommended items</h2>

                <div className='grid grid-cols-5 gap-5 justify-between place-content-center'>
                    {
                        products.map((product, index) => {
                            return (
                                <div className='p-[10px] border rounded-sm' key={index}>
                                    <div className='w-[200px] h-[200px] mb-3'>
                                        <img src={product.image} className='object-contain h-[190px] w-full' alt="Product image" />
                                    </div>

                                    <div className='px-2'>
                                        <h5 className='text-base text-[#1C1C1C] font-medium mb-1'>{product.price}$</h5>
                                        <p className='text-base text-[#8B96A5]'>{product.description.length > 35 ? product.description.slice(0, 35) + "..." : product.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default index