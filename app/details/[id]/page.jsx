import React, { Suspense } from "react";
import Loading from "../../loading";
import  movieData  from "../../../Data/MoviesData.json"
import MovieDetail from "../../../components/MovieDetail"

const page = ({ params }) => {
  // data={movieData}
  const data = movieData.find((item) => item.id == params.id);
  // console.log(data);
  return (
    <>
      <Suspense fallback={<Loading />}>
          <MovieDetail data={data}  id={params.id} key={params.id} />
      </Suspense>
    </>
  );
};

export default page;
