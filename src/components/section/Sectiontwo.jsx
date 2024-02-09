import React, { useState } from 'react'
import img1 from '../../assets/box1.jpg'
// import send from '../../assets/send-box.jpg'
import img3 from '../../assets/box3.jpg'
import img2 from "../../assets/send-box2.jpg"
const Sectiontwo = () => {
    const [Detail, setDetail] = useState(0)


    const textbox = [

        { id: 1, img: img3, title: 'เพ็คพัสดุ - คิดเงิน', details: ['1.น้ำหนัง 1 กิโล = 10 บาท', '2.กล่อง 10 บาท', '3.'] },
        { id: 2, img: img2, title: 'จัดส่ง-และติดตาม', details: ['1.', '2.', '3.'] },
        { id: 3, img: img1, title: 'พัสดุถึงที่หมายภายใน 2 วัน', details: ['1.', '2.', '3.',] },
    ]
    return (
        <div>
            <h3 className="my-7 text-lg">This offers</h3>



            <div className="grid md:grid-cols-3 gap-7 w-full  ">
                {textbox.map((title, i) => (
                    <div key={i} >
                        <div className="shadow grid grid-cols-[auto_70%]   md:grid-cols-1  rounded-md overflow-hidden hover:shadow-lg hover:shadow-redbox">
                            <div className='overflow-hidden'>
                                <img src={title.img} alt="" className='object-cover sm:block size-40 md:h-full md:w-full hover:scale-110 duration-100 ease-in' />
                            </div>

                            <div className='text-bgboxbase p-3'>
                                <p className='font-bold'>{title.title}</p>
                                <div className="md:hidden overflow-auto ">
                                    {title.details.map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </div>
                            </div>



                            <div className='p-3 hidden md:block'>
                                {Detail === title.id
                                    ? <div>
                                        <div className="">
                                            {title.details.map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                        </div>
                                        <button onClick={() => { setDetail(0), setBtn(false) }} className='text-bgboxbase p-2 border rounded-md w-full  hover:bg-bgboxbase hover:text-white font-bold'>Detail</button>
                                    </div>
                                    : <button onClick={() => { setDetail(i + 1) }} className='text-bgboxbase  p-2 border rounded-md  w-full  hover:bg-bgboxbase hover:text-white font-bold'>Detail</button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sectiontwo