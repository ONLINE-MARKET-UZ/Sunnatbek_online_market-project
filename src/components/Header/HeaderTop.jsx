import React from 'react'
import logo from '../../assets/logo-colored.svg'
import Search from '../Ui/Search'
import userImg from '../../assets/user.svg'
import messageImg from '../../assets/message.svg'
import likeImg from '../../assets/like.svg'
import cartImg from '../../assets/cart.svg'

const HeaderTop = () => {
  return (
    <div className='flex justify-between items-center py-6'>
      <ul className='w-full flex justify-between'>
        <li>
          <a href="/">
            <img src={logo} alt="Header logo" />
          </a>
        </li>

        <li>
          <Search />
        </li>

        <li className='flex items-center gap-5'>
          <div className='flex flex-col items-center gap-[7px]'>
            <img src={userImg} alt="User icon" />
            <p className='text-xs text-[#8B96A5] '>Profile</p>
          </div>

          <div className='flex flex-col items-center gap-[5px]'>
            <img src={messageImg} alt="Message icon" />
            <p className='text-xs text-[#8B96A5] '>Message</p>
          </div>

          <div className='flex flex-col items-center gap-[7.35px]'>
            <img src={likeImg} alt="Like icon" />
            <p className='text-xs text-[#8B96A5] '>Orders</p>
          </div>

          <div className='flex flex-col items-center gap-[5px]'>
            <img src={cartImg} alt="Cart icon" />
            <p className='text-xs text-[#8B96A5] '>My cart</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTop