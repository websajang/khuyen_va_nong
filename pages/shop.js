import Product from '../components/Product'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { findAllProducts } from './api/products'
import { initMongoose } from "../lib/mongoose"

const Shop = ({ products }) => {
    const [search, setSearch] = useState('');
    const categoriesNames = [...new Set(products?.map(p => p.category))];

    if (search) {
        products = products.filter(p => p.name.toLowerCase().includes(search))
    }

    return (
        <Layout>

            <header className='lg:h-96 mb-5 rounded-xl grid justify-items-center lg:grid-cols-4 bg-black'>

                {/** LOGO **/}

                <div className='lg:col-span-1 w-72 h-72 lg:w-96 lg:h-96'>
                    <img className='relative right-2' src='/logo.png' loading='eager' alt='logo' title='logo' />
                </div>


                {/** HEADER PICTURES **/}
                <div className='lg:col-span-2 flex justify-center items-center'>
                    <div className='h-5/6 w-5/6 grid grid-flow-col grid-rows-2 grid-cols-4 gap-2' >
                        <div class="row-start-1 col-start-3 col-span-2 row-span-2 overflow-hidden rounded-xl delay25">
                            <img className='object-cover min-w-full min-h-full' src=' /slider2.jpg' loading='eager' alt='khuyên' title='khuyên' />
                        </div>
                        <div class="row-start-1 col-start-1 col-span-2 row-span-1 overflow-hidden rounded-xl delay50">
                            <img className='object-cover min-w-full min-h-full' src=' /slider1.jpg' loading='eager' alt='nong' title='nong' />
                        </div>
                        <div class="row-start-2 col-start-1 col-span-2 row-span-1 overflow-hidden rounded-xl delay75">
                            <img className='object-cover min-w-full min-h-full' src=' /slider3.jpg' loading='eager' alt='khuyên-MŨI' title='khuyên-MŨI' />
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

                        <div className='text-white text-xl font-bold row-start-1 col-start-2 col-span-4 row-span-1 uppercase cursor-pointer'>
                            <a href='https://www.facebook.com/Ba%CC%81n-khuuy%C3%AAn-tai-khuy%C3%AAn-m%C4%83%CC%81t-nong-tai-phu%CC%A3-ki%C3%AA%CC%A3n-%C6%A1%CC%89-C%C3%A2%CC%89m-Pha%CC%89-Online-700726986641002' >
                                Trò chuyện với chúng tôi bằng <span className='text-emerald-500 font bold' >messenger</span> <br></br>
                                tại đây trên web</a></div>


                        <div className='row-start-2 col-start-1 col-span-1 row-span-1' >
                            <div className='flex justify-center items-center' >
                                <img className='' src='/facebook.png' loading='eager' alt='facebook' title='facebook' />
                            </div>
                        </div>


                        <div className='text-white text-xl font-bold row-start-2 col-start-2 col-span-4 row-span-1 uppercase cursor-pointer'>
                            <a href='https://www.facebook.com/Ba%CC%81n-khuuy%C3%AAn-tai-khuy%C3%AAn-m%C4%83%CC%81t-nong-tai-phu%CC%A3-ki%C3%AA%CC%A3n-%C6%A1%CC%89-C%C3%A2%CC%89m-Pha%CC%89-Online-700726986641002' >
                                Bấm vào đây để <span className='text-emerald-500 font bold' > facebook</span>  <br></br>
                                ghé thăm trang <br></br>
                                của tôi</a></div>

                        <div className='mt-5 lg:mt-0 row-start-3 col-start-1 col-span-1 row-span-1' >
                            <div className='flex justify-center items-center' >
                                <img className='' src='/zalo.png' loading='eager' alt='zalo' title='zalo' />
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-0 text-white text-xl font-bold row-start-3 col-start-2 col-span-4 row-span-1'>
                            SHIP TOÀN QUỐC MUA <br></br>
                            HÀNG INBOX Ạ HOẶC LH :<br></br>
                            0977533306 TRONG <span className='text-emerald-500 font bold' >ZALO</span></div>
                    </div>
                </div>
            </header>

            {/** DISCOUNTS **/}
            <section className='hidden lg:block'>
                <div className='h-10 w-full my-10 flex justify-center items-center overflow-hidden border-t-2 border-b-2 border-white'>
                    <p className='font-bold text-lg advertisement'>Chúng tôi có lời đề nghị tốt nhất. Nếu bạn mua trên 300.000 VND sẽ được giao hàng miễn phí. Trên 1 triệu đồng bạn sẽ được chiết khấu 10%.</p>
                </div>
            </section>


            <h1 className='text-7xl text-center font-bold uppercase'>Cửa hàng</h1>



            <section className='my-10'>
                <input value={search} onChange={e => setSearch(e.target.value)} type='text' placeholder='Search for products' className='bg-gray-100 w-full py-2 px-4 rounded-xl text-black' />

                <div>
                    {categoriesNames.map(categoryName => (

                        <div key={categoryName}>
                            {products.find(p => p.category === categoryName) && (
                                <div>
                                    <h2 className='text-2xl py-5 capitalize font-bold'>{categoryName}</h2>
                                    <div className='grid grid-cols-2 lg:grid-cols-6'>
                                        {products.filter(p => p.category === categoryName).map(productInfo => (
                                            <div key={productInfo.name} className=''>
                                                <Product  {...productInfo} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                    <div className='py-4'>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Shop

export async function getServerSideProps() {
    await initMongoose();
    const products = await findAllProducts();
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
    };
}

