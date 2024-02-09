import React from 'react'
import photouser from '../assets/big-box.jpg'

const Review = () => {
    return (
        <div>
            <h3>What our customers say</h3>
            <div className="my-10 bg-white w-[200px]">
                <div className='flex '>
                    <img src={photouser} alt="" className="size-16 object-cover rounded-full" />
                    <p>user1</p>
                </div>
                <div>
                    sdlkjfsfjs
                </div>
            </div>
        </div>
    )
}

export default Review