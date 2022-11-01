import Layout from '../components/Layout'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>KHUYÊN VÀ NONG</title>
        <meta name="theme-color" content="#00000" />
        <link rel='canonical' href='/' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Khuyên và nhẫn cửa hàng trực tuyến. Kiểm tra tất cả các sản phẩm của chúng tôi" />
      </Head>
      <Layout>
        <header className='h-96 mb-5 rounded-xl flex place-content-center justify-center lg:grid lg:grid-cols-4 bg-black'>
          <div className='col-span-1 w-72 h-72 lg:w-96 lg:h-96'>
            <img className='relative right-2' src='/logo.png' loading='eager' alt='logo' title='logo' />
          </div>
          <div className='col-span-2 hidden lg:flex justify-center items-center'>
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

          <div className='col-span-1 hidden lg:flex flex-col justify-end  '>
            <div className='grid grid-flow-col grid-rows-3 grid-cols-5 h-full' >


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

              <div className='row-start-3 col-start-1 col-span-1 row-span-1' >
                <div className='flex justify-center items-center' >
                  <img className='' src='/zalo.png' loading='eager' alt='zalo' title='zalo' />
                </div>
              </div>
              <div className='text-white text-xl font-bold row-start-3 col-start-2 col-span-4 row-span-1'>
                SHIP TOÀN QUỐC MUA <br></br>
                HÀNG INBOX Ạ HOẶC LH :<br></br>
                0977533306 TRONG <span className='text-emerald-500 font bold' >ZALO</span></div>
            </div>
          </div>
        </header>

        <section>
          <div className='h-10 w-full my-10 flex justify-center items-center overflow-hidden border-t-2 border-b-2 border-white'>
            <p className='font-bold text-lg advertisement'>Chúng tôi có lời đề nghị tốt nhất. Nếu bạn mua trên 300.000 VND sẽ được giao hàng miễn phí. Trên 1 triệu đồng bạn sẽ được chiết khấu 10%.</p>
          </div>
        </section>

        <section className='mt-20'>
          <div className='grid grid-flow-col grid-rows-3 grid-cols-5 gap-5 min-h-screen max-h-screen'>
            <div class="row-start-1 col-start-1 col-span-2 row-span-2 overflow-hidden rounded-xl">
              <div className='flex flex-col justify-end object-cover min-w-full min-h-full bg-[url(/categorykhuyenmui.jpeg)] bg-center bg-cover'>
                <button className='uppercase flex justify-center content-center p-2 m-5 max-w-20 bg-white/50 hover:bg-white/70 cursor-pointer text-black font-bold'>
                  KHUYÊN MŨI
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="row-start-1 col-start-3 col-span-3 row-span-2 overflow-hidden rounded-xl">
              <div className='flex flex-col justify-end object-cover min-w-full min-h-full bg-[url(/categorynong.jpeg)] bg-center bg-cover'>
                <button className='uppercase flex justify-center content-center p-2 m-5 max-w-20 bg-white/50 hover:bg-white/70 cursor-pointer text-black font-bold'>
                  nong
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="row-start-3 col-start-1 col-span-3 row-span-3 overflow-hidden rounded-xl">
              <div className='flex flex-col justify-end object-cover min-w-full min-h-full bg-[url(/categorykhuyenmai.jpeg)] bg-center bg-cover'>
                <button className='uppercase flex justify-center content-center p-2 m-5 max-w-20 bg-white/50 hover:bg-white/70 cursor-pointer text-black font-bold '>
                  KHUYÊN MŨI
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="row-start-3 col-start-4 col-span-2 row-span-3 overflow-hidden rounded-xl">
              <div className='flex flex-col justify-end object-cover min-w-full min-h-full bg-[url(/categorykhuyentai.jpeg)] bg-center bg-cover'>
                <button className='uppercase flex justify-center content-center p-2 m-5 max-w-20 bg-white/50 hover:bg-white/70 cursor-pointer text-black font-bold '>
                  KHUYÊN TAI
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <MessengerCustomerChat
          pageId="700726986641002"
          appId="654963272699796"
        />
      </Layout >
    </>
  )
}