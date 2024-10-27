import React from 'react'

const Page3 = () => {
  return (
    <div className='bg-white relative h-screen flex justify-center items-center'>
        <img className='absolute z-20' src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_871,h_501,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png'></img>
        <video  loop muted autoPlay className='h-[62vh] w-[42vw] object-cover relative z-10' src="src/assets/video.mp4"></video>
        <div className='h-0.5 w-3/5 absolute top-[45%] z-0 bg-black'></div>
        <div className='h-0.5 w-4/5 absolute top-[60%] z-0 bg-black'></div>
        <div className='h-0.5 w-full absolute top-[75%] z-0 bg-black'></div>
    </div>
  )
}

export default Page3