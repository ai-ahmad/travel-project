import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return ReactDOM.createPortal ((
     <div className='relative'>
        <img src="/pages-img/404 (2).gif" alt="" className='w-full h-screen object-cover' />
        <Link to="/" className='absolute top-[90%] left-[5%] z-50 p-3 border-2 border-solid border-[#cfc1c1] rounded-md font-semibold'>HOME PAGES</Link>
    </div>
  ),document.body)
}

export default Page404