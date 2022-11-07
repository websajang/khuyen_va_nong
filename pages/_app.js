import '../styles/globals.css'
import { ProductsContextProvider } from '../components/ProductsContext'
import Script from 'next/script'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
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
      <AnimatePresence>
        <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}>
          <ProductsContextProvider>

            <Component {...pageProps} />
          </ProductsContextProvider>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
