import MessengerCustomerChat from 'react-messenger-customer-chat';
import Header from "./Header";

const Layout = ({ children }) => {
    return (

        <div className="">
            <div className="p-5">
                <Header />
                {children}
            </div>
            <MessengerCustomerChat
                pageId="700726986641002"
                appId="654963272699796"
                className='mb-24'
            />
        </div>
    )
}

export default Layout