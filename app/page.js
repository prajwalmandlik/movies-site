import { Suspense } from 'react'
import Filter from '../components/Filter'
import SwiperSlider from "../components/SwiperSlider"
import Loading from "./loading";
import MoviesGrid from '../components/MoviesGrid'

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Filter />
        {/* {/* <SwiperSlider title="New" /> */}
        <SwiperSlider title="Up Coming" /> 
        <MoviesGrid />
      </Suspense>
    </div>
  )
}
