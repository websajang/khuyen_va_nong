import Footer from "./Footer"

const Layout = ({ children }) => {
    return (

        <div className="">
            <div className="p-5">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout