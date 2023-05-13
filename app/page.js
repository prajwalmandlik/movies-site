import { Suspense } from 'react'
import Filter from '../components/Filter'
import Loading from "./loading";
import Movies from "../components/Home";

export default function Home() {

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Filter />
        <Movies />
      </Suspense>
    </div>
  )
}
