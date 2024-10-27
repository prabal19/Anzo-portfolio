import React from 'react'

const Tilttext = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc}  className='mt-40 ml-10'>
        <h1 className='text-[4.5vw] leading-[3vw] uppercase font-[anzo1]'>I am <span className='text-black font-[anzo2]'>DARK MODE</span>™</h1>
        <h1 className='text-[6.5vw] leading-[7vw] font-[anzo1]'>DESIGNER</h1>
        <h1 className='text-[4.5vw] leading-[3vw] uppercase font-[anzo1]'>To Hire</h1>
    </div>
  )
}

export default Tilttext