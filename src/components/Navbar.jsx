// import React from 'react';
// import { useState } from 'react';
// import Logo  from './Logo'
// import Button from './Button';
// import { FaEllipsisV } from 'react-icons/fa';

// const Navbar = () => {
//     let Links = [
//      {name:"Intro",link:"/"},
//      {name:"Experience",link:"/"},
//      {name:"Portfoliio",link:"/"},
//      {name:"Contact",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className=' w-full fixed top-0 left-0'>
//      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
//       <div className='cursor-pointer flex items-center'>
//          <Logo />
//        Fatima
//       </div>

//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       < FaEllipsisV/>
//       </div>
//       <ul className={`md:flex md:items-center md:bp-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
//         {   
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//                 <a href={link.link} className='text-gray-800 hover:text-red-400 duration-500'>{link.name}</a>
//             </li>
//         ))
//       }
//       <Button>
//         Resume
//       </Button>
//       </ul>
//      </div>
//     </div>
//   )
//   };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-blue"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            F<span className="text-cyan-600">ati</span>ma
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <FaBars />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;