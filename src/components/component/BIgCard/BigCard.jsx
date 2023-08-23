import React from 'react'

const BigCard = ({img,title,about,button}) => {
  return (
    <div className='card-wrapper max-w-[604px] w-full max-h-[559px] h-full relative'>
        <img src={img} alt="" />
        <div className="text absolute top-[65%] left-[10%] flex flex-col items-center gap-2">
            <h1 className='text-[40px] font-[600] text-[white]'>{title}</h1>
            <p className='text-[16px] font-medium text-[white]'>{about}</p>
            <button>{button}</button>
        </div>
    </div>
  )
}

export default BigCard