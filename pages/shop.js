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
            <h1 className='text-7xl text-center font-bold uppercase'>Cửa hàng</h1>



            <section className='my-10'>
                <input value={search} onChange={e => setSearch(e.target.value)} type='text' placeholder='Search for products' className='bg-gray-100 w-full py-2 px-4 rounded-xl text-black' />

                <div>
                    {categoriesNames.map(categoryName => (

                        <div key={categoryName}>
                            {products.find(p => p.category === categoryName) && (
                                <div>
                                    <h2 className='text-2xl py-5 capitalize font-bold'>{categoryName}</h2>
                                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
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

