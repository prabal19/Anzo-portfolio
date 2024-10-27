import React, { useEffect } from 'react'


const Page5 = () => {

return (

    <div>
    <div id='section2' className='text-black bg-white p-20 text-center'>
        <div className='rotateText mt-20'>
            <h1 className='text-black text-[41vw] font-[anzo5] leading-[32vw]'>HELPING</h1>
        </div>
        <div className='rotateText'>
            <h1 id='alt-text' className='text-[41vw] font-[anzo5] leading-[32vw]'>MY</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[41vw] font-[anzo5] leading-[32vw]'>CLIENTS</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[41vw] font-[anzo5] leading-[32vw]'>TO ACHIEVE</h1>
        </div>
        <div className='rotateText'>
            <h1 id='alt-text' className='text-black text-[41vw] font-[anzo5] leading-[32vw]'>THEIR</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-black text-[41vw] font-[anzo5] leading-[32vw]'>DREAMS!</h1>
        </div>
    </div>
    <div className='h-screen relative p-10 bg-white'>
       <div className='h-full w-full overflow-hidden bg-black rounded-[40px]'>
        <video autoPlay muted loop className='h-full w-full object-cover' src="src/assets/video2.mp4"></video>
        <h1 className='absolute font-[anzo5] text-[30vw] -bottom-10 left-20'>ABOUT</h1>
        </div>
    </div>
    
    </div>
    

  )
}

export default Page5