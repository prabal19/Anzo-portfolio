import React from 'react'

const Page7 = () => {
  return (
    <div className='h-screen relative p-5 bg-white'>
    <div className='h-full w-full overflow-hidden bg-black rounded-[40px]'>
        <img className='h-full w-full object-cover' src="src/assets/background.webp"></img>
        <h1 className='absolute font-[anzo5] text-[20vw] top-0 left-[120px] mb-5'>GOT <span id='alt-text' className='font-[anzo5]'>AN</span></h1>
        <h1 className='absolute font-[anzo5] text-[20vw] top-[30%] left-[120px] mt-5'>IDEA</h1>
        <h3 id='alt-text' className='absolute text-2xl font-[anzo3] top-[420px] right-[470px]'>WORLD SERVICE</h3> 
        <h3 id='alt-text' className='absolute font-[anzo3] text-[20px] top-[550px] left-[120px]'>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h3> 
        <h3 className='absolute font-[anzo2] text-[22px] top-[450px] left-[740px]'> I can come to wherever you are</h3> 
        <h3 id='alt-text' className='absolute text-2xl font-[anzo3] text-[22px] top-[480px] right-[485px]'>+31 68 4564137</h3>
        <h3 className='absolute font-[anzo4] text-[20px] top-[580px] left-[120px]'> BUT OFFERING THE TRANSFORMATION!</h3> 
        <h4 className='absolute font-[anzo4] bottom-[60px] right-[80px]'>© 2024 Anzo.Studio™</h4>

    </div>
</div>
  )
}

export default Page7