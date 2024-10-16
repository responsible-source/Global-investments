import React from 'react'
import Img1 from '../../img/googleplay.png'
import Img2 from '../../img/appstore.svg' 

const Payment = () => {
  return (
    <div className=' bg-darkBlack pt-32 pb-20'>
        <div className='wrapper px-5 md:px-10 lg:px-20 '>
            <h3 className='text-Green text-[24px] font-bold font-Encode pb-10'>Invest anywhere, anytime!</h3>
            <p className='text-white text-[18px] font-Encode leading-10'>We are an international investment firm with over 21 years of cumulative experience in the investment advisory industry. Our advisory investment strategy are driven by the extensive expertise and we adopt the highest standards of risk management and both fundamental and technical analysis. We use several diversified strategies and tools all with intent to minimize risk and maximize profits. We are distinguished by the integrity of our offering, our transparency, and our exceptional performance.</p>

            <h4 className='text-Green font-semibold font-Encode pt-5'>Global Tradez would be available on IOS and Andriod soon...</h4>

            <div className='pt-5 md:pt-10 flex md:gap-1'>
            <img src={Img1} alt="download Andriod" className='w-40 md:w-60 h-auto object-contain transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
            <img src={Img2} alt="download Apple" className='w-40 md:w-60 h-auto object-contain transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'/>
            </div>

            
        </div>
    </div>
  )
}

export default Payment