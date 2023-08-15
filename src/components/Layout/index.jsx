import './style.scss'
import Intro from '../Intro'
import Offers from '../Offers'
import OrderForm from '../OrderForm'
import Items from '../Items'
import Subscribe from '../Subscirbe'

const index = () => {
    return (
        <main>
            <Intro/>
            <Offers/>
            <OrderForm/>
            <Items/>
            <Subscribe/>
        </main>
    )
}

export default index