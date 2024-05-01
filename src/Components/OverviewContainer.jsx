import React from 'react'
import data from '../data/data.json'
import { OverviewCard } from './OverviewCard'

export const OverviewContainer = () => {
  return (
    <>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
            {
                data.overview.map((item) => <OverviewCard key={item.id} {...item}/>)
            }
        </section>
    </>
  )
}
