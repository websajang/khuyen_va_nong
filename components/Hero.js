import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className=''>
            <div className='grid lg:grid-cols-3 xl:mx-64'>

                <div className=' lg:hidden lg:col-span-1'>
                    <div className='overflow-hidden rounded-2xl flex place-content-center'>
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
                    <h1 className='text-2xl lg:text-5xl font-bold uppercase mb-5'>Nong tai</h1>
                    <p className='text-xl mb-5'>
                        Các sản phẩm nong mới cập nhật hàng ngày trên trang fanpage hoặc bạn có thể tham khảo giá sản phẩm ở đây. <br></br><br></br>
                        Để mua hàng bạn chỉ cần copy ảnh khuyên đã chọn inbox số lượng gửi thông tin qua fanpage Facebook mọi việc còn lại để chúng tôi lo.
                    </p>
                    <div className='w-full lg:w-auto flex justify-center lg:block ' >
                        <Link href={'/shop'} >
                            <a>
                                <button className='p-5 bg-emerald-500 rounded-lg flex flex-row' >Ghé thăm shop
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col justify-center lg:col-span-1'>
                    <div className='overflow-hidden '>
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
    )
}

export default Hero