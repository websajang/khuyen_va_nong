import Layout from '../components/Layout'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Head from 'next/head'
import Image from 'next/image'

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
            <p className='font-bold text-lg'>Chúng tôi có lời đề nghị tốt nhất. Nếu bạn mua trên 300.000 VND sẽ được giao hàng miễn phí. Trên 1 triệu đồng bạn sẽ được chiết khấu 10%.</p>
          </div>
        </section>



        {/** GO TO THE SHOP **/}

        <section className=''>
          <div className='grid lg:grid-cols-3'>

            <div className=' lg:hidden lg:col-span-1'>
              <div className='relative overflow-hidden rounded-2xl'>
                <Image
                  src="/tunnelshow.jpeg"
                  objectFit="cover"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className='mt-5 lg:mt-10 lg:col-span-2 lg:p-20'>
              <h1 className='text-2xl lg:text-5xl font-bold uppercase mb-5'>Tất cả các sản phẩm của chúng tôi</h1>
              <p className='text-xl mb-5'>
                Xem tất cả các sản phẩm trong cửa hàng, chọn ngành hàng hoặc tìm kiếm bằng công cụ tìm kiếm,
                khi biết mình thích thì liên hệ qua zalo, messenger hoặc facebook để mua nhé.</p>
              <div className='w-full lg:w-auto flex justify-center lg:block ' >
                <button className='p-5 bg-emerald-500 rounded-lg flex flex-row' >Go to the shop
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden lg:block lg:col-span-1'>
              <div className='relative overflow-hidden rounded-2xl'>
                <Image
                  src="/tunnelshow.jpeg"
                  objectFit="cover"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

        </section>

        <section className='mt-10 lg:mt-20'>
          <div className='grid lg:grid-cols-3'>
            <div className='lg:col-span-1'>
              <div className='relative overflow-hidden rounded-2xl'>
                <Image
                  src="/earringshow.jpg"
                  objectFit="cover"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className='mt-5 lg:mt-0 lg:col-span-2 lg:p-20'>
              <h1 className='text-2xl lg:text-5xl font-bold uppercase mb-5'>Tất cả các sản phẩm của chúng tôi</h1>
              <p className='text-xl mb-5'>
                Xem tất cả các sản phẩm trong cửa hàng, chọn ngành hàng hoặc tìm kiếm bằng công cụ tìm kiếm,
                khi biết mình thích thì liên hệ qua zalo, messenger hoặc facebook để mua nhé.</p>
              <div className='w-full lg:w-auto flex justify-center lg:block '>
                <button className='p-5 bg-emerald-500 rounded-lg flex flex-row' >Go to the shop
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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