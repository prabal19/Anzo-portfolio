import React, { useRef, useState } from 'react'
import Tilttext from '../Components/Tilttext'
import Page1Bottom from '../Components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

    const tiltRef = useRef(null)
    const [Xval, setXval] = useState(0)
    const [Yval, setYval] = useState(0)

    const mouseMoving = (e) =>{
        setXval((e.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/40)
        setYval(-(e.clientY-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/8)
    }

    useGSAP(function(){
        gsap.to(tiltRef.current,{
            transform: `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
            duration: 2,
            ease: 'power4.out'
        })
    },[Xval,Yval])

   

 return (
    <div id='page1' onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='relative h-screen p-4 bg-white'>
        <div id='page1-in' className='relative shadow-xl py-10 px-[30px] shadow-gray-700 h-full w-full rounded-[40px] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_884,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
            <img className='ml-10 h-20'src='https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png'></img>
            <Tilttext abc={tiltRef}/>
            <Page1Bottom/>
        </div>

    </div>
  )
}

export default Page1