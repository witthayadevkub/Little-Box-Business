import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
// import logo from '../assets/logo-box3.jpg'
const Footer = () => {

  return (
    <div className='flex justify-between h-[200px] text-md py-7'>
      <div className="hidden sm:block text-2xl items-center hover:text-redbox">
        <div className="grid place-content-center">
          <LuBox className="size-[5rem] " />
        </div>
        <h4 className=" p-2 mt-2">LITTLE BOX</h4>
      </div>

      <div className="flex flex-col gap-3">
        <p className='font-semibold'>Navigation</p>
        <div className='flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox'><a href="#home">Home</a></div>
        <div className="flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox"><a href="#aboutus">About</a></div>
        <div className="flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox"><a href="">...</a></div>
      </div>

      <div className="flex flex-col gap-3">
        <p className='font-semibold'>Social Links</p>
        <div className='flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox'><FaSquareFacebook /> <a href="">Facebook</a></div>
        <div className="flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox"><FaInstagramSquare /><a href="">Instagram</a></div>
        <div className="flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox"><BiLogoTiktok /><a href="">Tiktok</a></div>
      </div>

      <div className="flex flex-col gap-3">
        <p className='font-semibold cursor-not-allowed'>Contact Us</p>
        <div className='flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox'><a href="">Address</a></div>
        <div className="flex items-center gap-1 hover:text-redbox hover:border-b-2 border-redbox"><a href="">Email</a></div>
        <div className="flex items-center gap-1  hover:text-redbox hover:border-b-2 border-redbox"><a href="">Phone</a></div>
      </div>
    </div>
  )
}

export default Footer