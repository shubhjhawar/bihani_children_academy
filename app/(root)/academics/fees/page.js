import React from 'react'

import { AcademicsTable } from '@/components'
import { fees } from '@/constants'

const Fees = () => {
  return (
    <div className="h-auto flex flex-col">
    <h1 className='flex justify-center item-center text-4xl text-white mt-5 font-sans tracking-wide'>Fees Breakup</h1>
    <div className='flex justify-center item-center mt-5'>
      <AcademicsTable heading="Fees" content={fees}/>  
    </div>
  </div>
  )
}

export default Fees