import { useState } from 'react'
import './App.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/section/Section'
import Sectiontwo from './components/section/Sectiontwo'
import Review from './components/Review'
import AboutUs from './components/AboutUs'
//icon
import { HiLocationMarker } from "react-icons/hi";
function App() {


  return (
    <div className="reden-loaded">
          <div className='h-svh w-screen flex flex-col items-center bg-bgbase overflow-x-hidden scroll-smooth'>
      <div id="home" className="max-w-[1000px] w-full ">
        <Header />
      </div>

      <div className="bg-bgboxbase h-auto w-full flex flex-col items-center ">
        <div className='max-w-[1000px] w-full px-6'>
          <Section />
        </div>
      </div>

      <div className=" h-auto w-full flex flex-col items-center my-[4rem]">
        <div className='max-w-[1000px] w-full  px-6'>
          <Sectiontwo />
        </div>
      </div>

      <div id='aboutus' className=" h-auto w-full flex flex-col items-center my-[4rem]">
        <div className='max-w-[1000px] w-full  px-6'>
          <AboutUs />
        </div>
      </div>
{/* 
      <div className=" h-auto w-full flex flex-col items-center my-[4rem]">
        <div className='max-w-[1000px] w-full  px-6'>
          <Review />
        </div>
      </div> */}

      <div className="fixed left-2 bottom-4 ">
        <a href="https://maps.app.goo.gl/PfzWBHdRfwy3EAMSA" target="_blank" >
          <HiLocationMarker className='text-yellow-400 size-10 sm:size-14 animate-bounce'/>
          <p className='text-redbox font-bold'>location</p>
        </a>
      </div>

      <div className="bg-bgboxbase h-auto w-full flex flex-col items-center ">
        <div className='max-w-[1000px] w-full px-6 text-white'>
          <Footer />
        </div>
      </div>

    </div>
    </div>

  )
}

export default App
