import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen relative p-5 bg-white'>
        <div className='h-full w-full overflow-hidden bg-black rounded-[40px]'>
            <video autoPlay muted loop className='h-full w-full object-cover' src="src/assets/video 3.mp4"></video>
            <h1 id='alt-text' className='absolute font-[anzo5] text-[20vw] top-0 left-[100px] mb-5'>WHAT</h1>
            <h1 className='absolute font-[anzo5] text-[20vw] top-[30%] left-[120px] mt-5'>I DO</h1>
            <h3 className='absolute font-[anzo4] text-[20px] top-[600px] left-[120px]'>I DESIGN AND DEVELOP</h3>
            <h3 id='alt-text' className='absolute font-[anzo3] text-[20px] top-[625px] left-[120px]'>MODERN, IMPACTFUL AND LUXURIOUS</h3> 
            <h3 className='absolute font-[anzo4] text-[20px] top-[650px] left-[120px]'> websites that seamlessly bridge your goals with needs of your clients.</h3> 

        </div>
    </div>
  )
}

export default Page4