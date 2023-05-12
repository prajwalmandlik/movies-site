import { Suspense } from 'react'
import Filter from '../components/Filter'
import SwiperSlider from "./SwiperSlider"
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Filter />
        <SwiperSlider title="New" />
        <SwiperSlider title="Up Coming" />
      </Suspense>
    </div>
  )
}
