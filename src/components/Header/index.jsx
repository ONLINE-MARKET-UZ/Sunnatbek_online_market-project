import HeaderTop from './HeaderTop'
import Navbar from './navbar'
import './style.scss'

const index = () => {
    return (
        <header>
            <div className="container mx-auto px-5">
                <HeaderTop />
                <Navbar />
            </div>
        </header>
    )
}

export default index