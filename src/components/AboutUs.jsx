import React from 'react'
import userImg from "../assets/user-image.png"
const AboutUs = () => {
  return (
    <div>
      <h3>About Us</h3>
      <div className="flex gap-3 rounded shadow mt-5">

        <div className="flex w-full bg-white h-full gap-10 relative">
          <figure><img className='size-80 w-full' src={userImg} alt="Movie" /></figure>
          <div className="">
            <h2 className="">Name John wick</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquid nesciunt dicta! Fugit, eum.</p>
            <div className="">
              <button className="btn absolute bottom-5 right-5">Watch</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs