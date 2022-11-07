import MessengerCustomerChat from 'react-messenger-customer-chat';
import Navbar from './Navbar';
import Header from '../components/Header'
import Discounts from './Discounts';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (

        <div className="">
            <div className="p-5">
                <Navbar />
                <Header />
                <Discounts />
                {children}
            </div>
            <Footer />
            <MessengerCustomerChat
                pageId="700726986641002"
                appId="654963272699796"
                className='mb-24'
            />
        </div>
    )
}

export default Layout