import Image from 'next/image'

import { Banner } from '@/components'

export default function Home() {
  return (
    <main className="h-screen">
      <Banner />
     <p className=''>Hello world</p> 
    </main>
  )
}
