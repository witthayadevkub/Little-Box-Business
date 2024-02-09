import React, { useState } from 'react'

//icons 
import { LuMenu } from "react-icons/lu";
import  logo  from "../assets/logo-box3.jpg"

const Header = () => {
    const [OpenMenu, setOpenMenu] = useState(false)
    console.log(OpenMenu)
    return (
        <div className='flex justify-between w-full h-[50px] px-6 items-center my-3 bg-bgbase '>
            <div className="flex items-center overflow-hidden">
                <img src={logo} alt="" className='w-[50px] h-[50px] scale-140 object-bottom'/>
                <h4 className='pl-3 font-bold text-sm text-bgboxbase'>LITTLE BOX</h4>
            </div>
            <nav className="">
                <div className='hidden md:block  '>
                    <div className='flex gap-4 font-bold'>
                        <a href='#home' className="hover:bg-bgboxbase  hover:text-white p-1 rounded-md">Home</a>
                        <a href="#aboutus" className="hover:bg-bgboxbase  hover:text-white p-1 rounded-md">About Us</a>
                        <p className="cursor-not-allowed hover:bg-bgboxbase  hover:text-white p-1 rounded-md">Login</p>
                    </div>
                </div>

                <div className='block md:hidden  relative '>
                    <div className='cursor-pointer border p-2 rounded-md hover:bg-hoverbase hover:text-white'>
                        <LuMenu onClick={() => setOpenMenu(!OpenMenu)} className='text-xl ' />
                    </div>
                    

                    {OpenMenu && <div className='absolute top-[55px] right-0 w-[200px] h-auto shadow rounded-lg text-white bg-redbox z-10  '>
                        <div className='grid-cols-1'>
                            
                            <div className="p-2 hover:bg-red-200 hover:text-redbox"><a href='#home'>Home</a></div>
                            <div className="p-2 hover:bg-red-200 hover:text-redbox"><a href='#aboutus'>About Us</a></div>
                            
                            <p className=" p-2 hover:bg-red-200 hover:text-redbox">Login</p>
                        </div>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Header