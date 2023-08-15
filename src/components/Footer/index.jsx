import './style.scss'
import logo from '../../assets/logo-colored.svg'
import facebook from '../../assets/facebook.svg'
import tweeter from '../../assets/tweeter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import appStore from '../../assets/appStore.svg'
import googlePlay from '../../assets/googlePlay.svg'

const index = () => {
  return (
    <footer>
      <div className='container mx-auto px-5'>
        <div className='pt-10 pb-[60px] flex justify-between'>
          <ul className='max-w-[275px] flex flex-col gap-[15px]'>
            <li>
              <a href="/">
                <img src={logo} alt='logo' />
              </a>
            </li>
            <li>
              <p>Best information about the company gies here but now lorem ipsum is</p>
            </li>
            <li className='flex gap-[10px]'>
              <img src={facebook} className='cursor-pointer' alt="Facebook icon" />
              <img src={tweeter} className='cursor-pointer' alt="Tweeter icon" />
              <img src={linkedin} className='cursor-pointer' alt="Linkedin icon" />
              <img src={instagram} className='cursor-pointer' alt="Instagram icon" />
              <img src={youtube} className='cursor-pointer' alt="Youtube icon" />
            </li>
          </ul>

          <ul className='w-[90px] flex flex-col gap-2'>
            <li className='mb-[6px] text-base text-[#1C1C1C] font-medium'>About</li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>About Us</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Find store</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Categories</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Blogs</a>
            </li>
          </ul>

          <ul className='w-[80] flex flex-col gap-2'>
            <li className='mb-[6px] text-base text-[#1C1C1C] font-medium'>Partnership</li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>About Us</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Find store</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Categories</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Blogs</a>
            </li>
          </ul>

          <ul className='w-[110px] flex flex-col gap-2'>
            <li className='mb-[6px] text-base text-[#1C1C1C] font-medium'>Information</li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Help Center</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Money Refund</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Shipping</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Contact us</a>
            </li>
          </ul>

          <ul className='w-[80px] flex flex-col gap-2'>
            <li className='mb-[6px] text-base text-[#1C1C1C] font-medium'>For users</li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Login</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Register</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>Settings</a>
            </li>
            <li>
              <a href="" className='text-base text-[#8B96A5]'>My Orders</a>
            </li>
          </ul>

          <ul className='flex flex-col gap-2'>
            <li className='mb-[6px] text-base text-[#1C1C1C] font-medium'>Get app</li>
            <li className='cursor-pointer'>
              <img src={appStore} alt="AppStore" />
            </li>
            <li className='cursor-pointer'>
              <img src={googlePlay} alt="GooglePlay" />
            </li>
          </ul>
        </div>

        <div className='py-6'>

        </div>
      </div>
    </footer>
  )
}

export default index