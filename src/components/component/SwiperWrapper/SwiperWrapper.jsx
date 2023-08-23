import React from 'react'
import SwiperComponent from '../Swiper/Swiper'
import { ButtonCastom } from '../../others/buttons/button'

const SwiperWrapper = () => {
  return (
    <div>
        <div className="flex justify-center gap-[60%] items-center">
        <div className="text flex flex-col gap-3">
          <h2 className='text-[32px] font-[600]'>Reviews</h2>
          <p className='text-[16px] font-[400] text-[#999090]'>What people says about Golobe facilities</p>
        </div>
        <div className="button">
            <ButtonCastom classes={"max-w-[80px] max-h-[40px] p-3 border-2 border-solid border-[#8DD3BB] font-[700] flex items-center justifay-center rounded-[6px]"} text={"See All"}/>
        </div>
      </div>
        <SwiperComponent/>
    </div>
  )
}

export default SwiperWrapper




// SwiperWrapper