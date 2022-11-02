import Footer from "./Footer"

import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = ({ children }) => {
    return (

        <div className="">
            <div className="p-5">
                {children}
            </div>
            <MessengerCustomerChat
                pageId="700726986641002"
                appId="654963272699796"
                className='mb-24'
            />
            <Footer />
        </div>
    )
}

export default Layout