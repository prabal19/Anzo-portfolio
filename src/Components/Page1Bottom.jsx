import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

    useGSAP(function(){
        gsap.to('#banner img',{
            rotate:360,
            duration:3,
            ease: 'linear',
            repeat:-1
        })
    })


  return (
    <div className='absolute bottom-0 w-full justify-between left-0 pl-[80px] pr-[50px] py-[50px] flex items-end'>
        <div>
            <h2 className='text-2xl font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className='text-xl font-[anzo3] text-gray-400'>BESPOKE FREELANCE</h3>
        </div>
        <div id='banner'>
           
            <img className='h-20 'src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png'></img>
            <img className='h-20 mt-5'src='https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png'></img>

        </div>
    </div>
  )
}

export default Page1Bottom