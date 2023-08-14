import HeaderTop from './HeaderTop'
import Navbar from './navbar'
import './style.scss'

const index = () => {
    return (
        <header className=' border-b bg-white'>
            <div className="container mx-auto px-5 relative">
                <HeaderTop />
                <Navbar />
            </div>
        </header>
    )
}

export default index