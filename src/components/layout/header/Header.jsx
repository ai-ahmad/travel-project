import React from 'react';
import NavDefault from '../../component/Navbar/Navbar Default/NavDefualt';
import ShowCase from '../../component/ShowCase/ShowCase';
import Forms from '../../component/Forms/Forms';

const Header = () => {
  return (
    <header
      className='w-full h-[599px] bg-[/img/img-header.png] bg-cover bg-center rounded-2xl p-5 f relative'
      style={{ backgroundImage: `url(/img/img-header.png)`}}
    >
      <NavDefault />
      <ShowCase/>
      <Forms classes={"max-w-[1232px] w-full max-h-[280px] bg-[white] rounded-2xl absolute  top-[80%] px-[32px] left-[50%] translate-x-[-50%] shadow-md "}/>
    </header>
  );
};

export default Header;
