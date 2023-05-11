import Image from 'next/image'
import { Suspense } from 'react'
import Filter from '../components/Filter'
import SwiperSlider from "./SwiperSlider"

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Filter />
        <SwiperSlider title="New" />
        <SwiperSlider title="Up Coming" />
      </Suspense>
    </div>
  )
}
