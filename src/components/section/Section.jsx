import React,{useState} from 'react'
import send1 from '../../assets/send-box.jpg'
import send2 from '../../assets/big-box.jpg'

const Section = () => {
    const [Change, setChange] = useState(false)
    return (
        <div>
            <div className='grid place-content-center  sm:grid-cols-[1fr_1fr] py-10  relative  '>
                <div className="text-white text-center md:text-start">
                    <h4 className='text-[4rem] md:text-[2.5rem] text-redbox mb-2'>LIITLE BOX</h4>
                    <div className="text-lg leading-6 mb-2 hidden md:block font-bold">
                        <p>little-box, our service big-box </p>
                        <p>Big Service in Small Packages, <br />Amplifying Your Shipments,<br />Delivering More Than Expected</p>
                    </div>
                    <button className=' bg-redbox text-white py-1 px-3 mt-2 rounded-md'>service</button>
                </div>
                <div onClick={()=>setChange(!Change)} className="flex justify-end cursor-pointer">
                    <img src={Change ? send1 : send2} alt=""
                        className=' hidden sm:block object-center w-[220px] h-[240px] object-cover border shadow-lg rounded-2xl md:absolute right-0
                         md:w-[280px] md:h-[280px] duration-100 ease-in hover:scale-110 hover:shadow-xl hover:shadow-redbox' />
                </div>
            </div>

        </div>
    )
}

export default Section