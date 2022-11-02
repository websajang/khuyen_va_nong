import '../styles/globals.css'
import { ProductsContextProvider } from '../components/ProductsContext'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black text-white'>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0MWNZHW72N" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MWNZHW72N', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <ProductsContextProvider>
        <Component {...pageProps} />
      </ProductsContextProvider>
    </div>
  )
}

export default MyApp
