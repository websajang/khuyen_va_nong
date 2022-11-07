import Image from "next/image"

const Header = () => {
    return (
        <header className='lg:h-96 mb-5 rounded-xl grid justify-items-center lg:grid-cols-4 bg-black'>

            {/** LOGO **/}

            <div className='lg:col-span-1 w-72 h-72 lg:w-96 lg:h-96'>
                <img className='relative right-2' src='/logo.png' loading='eager' alt='logo' title='logo' />
            </div>


            {/** HEADER PICTURES **/}
            <div className='lg:col-span-2 xl:flex justify-center items-center'>
                <div className='h-5/6 w-5/6 hidden xl:grid grid-flow-col grid-rows-2 grid-cols-4 gap-2' >
                    <div class="row-start-1 col-start-3 col-span-2 row-span-2 overflow-hidden rounded-xl delay25">
                        <div className='overflow-hidden rounded-2xl'>
                            <Image
                                src="/slider2.jpg"
                                objectFit="cover"
                                alt="Picture of the author"
                                width={400}
                                height={450}
                            />
                        </div>
                    </div>
                    <div class="row-start-1 col-start-1 col-span-2 row-span-1 overflow-hidden rounded-xl delay50">
                        <div className='overflow-hidden rounded-2xl'>
                            <Image
                                src="/slider1.jpg"
                                objectFit="cover"
                                alt="Picture of the author"
                                width={400}
                                height={225}
                            />
                        </div>
                    </div>
                    <div class="row-start-2 col-start-1 col-span-2 row-span-1 overflow-hidden rounded-xl delay75">
                        <div className='overflow-hidden rounded-2xl'>
                            <Image
                                src="/slider3.jpg"
                                objectFit="cover"
                                alt="Picture of the author"
                                width={400}
                                height={225}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/** CONTACTS **/}
            <div className='col-span-1 lg:flex flex-col justify-end  '>
                <div className='grid grid-flow-col grid-rows-3 grid-cols-5 h-full py-5' >


                    <div className='row-start-1 col-start-1 col-span-1 row-span-1' >
                        <div className='flex justify-center items-center' >
                            <img className='' src='/messenger.png' loading='eager' alt='messenger' title='messenger' />
                        </div>
                    </div>

                    <div className='text-white text-md xl:text-xl font-bold row-start-1 col-start-2 col-span-4 row-span-1 cursor-pointer'>
                        <a href='https://www.facebook.com/Ba%CC%81n-khuuy%C3%AAn-tai-khuy%C3%AAn-m%C4%83%CC%81t-nong-tai-phu%CC%A3-ki%C3%AA%CC%A3n-%C6%A1%CC%89-C%C3%A2%CC%89m-Pha%CC%89-Online-700726986641002' >
                            Trò chuyện với chúng tôi bằng <span className='text-emerald-500 font bold' >Messenger</span> <br></br>
                            tại đây trên web</a></div>


                    <div className='row-start-2 col-start-1 col-span-1 row-span-1' >
                        <div className='flex justify-center items-center' >
                            <img className='' src='/facebook.png' loading='eager' alt='facebook' title='facebook' />
                        </div>
                    </div>


                    <div className='text-white text-md xl:text-xl font-bold row-start-2 col-start-2 col-span-4 row-span-1 cursor-pointer'>
                        <a href='https://www.facebook.com/Ba%CC%81n-khuuy%C3%AAn-tai-khuy%C3%AAn-m%C4%83%CC%81t-nong-tai-phu%CC%A3-ki%C3%AA%CC%A3n-%C6%A1%CC%89-C%C3%A2%CC%89m-Pha%CC%89-Online-700726986641002' >
                            Bấm vào đây để <span className='text-emerald-500 font bold' > Facebook</span>  <br></br>
                            ghé thăm trang <br></br>
                            của tôi</a></div>

                    <div className='mt-5 lg:mt-0 row-start-3 col-start-1 col-span-1 row-span-1' >
                        <div className='flex justify-center items-center' >
                            <img className='' src='/zalo.png' loading='eager' alt='zalo' title='zalo' />
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-0 text-white text-md xl:text-xl font-bold row-start-3 col-start-2 col-span-4 row-span-1'>
                        Ship toàn quốc mua <br></br>
                        hàng inbox ạ hoặc lh :<br></br>
                        0977533306 trong <span className='text-emerald-500 font bold' >Zalo</span></div>
                </div>
            </div>
        </header>
    )
}

export default Header