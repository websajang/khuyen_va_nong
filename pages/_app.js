import '../styles/globals.css'
import { ProductsContextProvider } from '../components/ProductsContext'

/** 
<div className='bg-[url(/background.jpg)] text-white'>
      <div className='bg-gradient-to-r from-black/100 via-black/95 to-black/75'>
        <ProductsContextProvider>
          <Component {...pageProps} />
        </ProductsContextProvider>
      </div>
    </div>
    **/

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black text-white'>
      <ProductsContextProvider>
        <Component {...pageProps} />
      </ProductsContextProvider>
    </div>
  )
}

export default MyApp
