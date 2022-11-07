import Layout from '../components/Layout'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Head from 'next/head'
import Header from '../components/Header'
import Discounts from '../components/Discounts'
import Hero from '../components/Hero'

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
        <Hero />
      </Layout >
    </>
  )
}