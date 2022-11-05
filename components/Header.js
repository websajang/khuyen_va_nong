import { useState } from 'react'
import Link from "next/link";

const Header = () => {

    const [active, setActive] = useState(false)

    const toggleClass = () => {
        setActive(!active)
    }


    return (
        <nav className="flex items-center justify-between flex-wrap p-6 bg-opacity-0 border-b-2 border-white ">
            {/*--------------------------- */}
            {/*-------- Boton para desplegar el MENU en moviles-------------- */}
            <div className="block lg:hidden" onClick={toggleClass}>
                <button className="flex items-center px-3 py-2">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            {/*--------------------------- */}
            {/*---------- MENU------------ */}
            <div className={active ? "w-full flex-grow lg:flex lg:items-center lg:text-right lg:w-auto" : "hidden w-full flex-grow lg:flex lg:items-center lg:text-right lg:w-auto"}>
                <div className="text-xl lg:flex-grow">
                    <div className='block mt-4 lg:inline-block hover:bg-emerald-500 rounded-xl p-2 lg:mt-0 lg:w-40 lg:text-center'>
                        <Link
                            href={"/"}
                        >Home</Link>
                    </div>
                    <div className="block mt-4 lg:inline-block lg:mt-0  hover:bg-emerald-500 rounded-xl p-2 lg:w-40 lg:text-center">
                        <Link
                            href={"/shop"}
                        >Shop</Link>
                    </div>
                </div>

            </div>
            {/*--------------------------- */}
        </nav>
    )
}

export default Header