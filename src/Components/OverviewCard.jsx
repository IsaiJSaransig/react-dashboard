import React from 'react'
import upRow from '../assets/images/icon-up.svg'
import downRow from '../assets/images/icon-down.svg'

const networkColor = {
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram-gradient',
  YouTube: 'YouTube',
}
export const OverviewCard = ({ id, network, username, audience, audienceType, today, image, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] rounded-[10px] mb-4 mx-auto overflow-hidden text-center'>
      <div className={`bg-${networkColor[network]}  h-1.5 mb-8`}></div>
      <div className='flex items-center place-content-center mb-[28px] gap-2'>
        <img src={image} />
        <p className=' text-x text-Dark-Grayish-Blue font-bold'>{username}</p>
      </div>
      <p className='text-5xl text-Dark-Blue font-bold mb-2 '>{audience}</p>
      <p className='text-Desaturated-Blue tracking-[5px]'>{audienceType.toUpperCase()}</p>
      <div className='flex items-center justify-center mt-2'>
        <img src={`${isUp ? upRow : downRow}`} className='mr-2 w-3 '/>
        <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-s font-bold`}>{today} Today</p>
      </div>
    </article>
  )
}
