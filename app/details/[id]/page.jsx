import React, { Suspense } from "react";
import Loading from "../../loading";
import { movieData } from "../../Data"
import MovieDetail from "../../../components/MovieDetail"

const page = ({ params }) => {
  // data={movieData}
  return (
    <>
      <Suspense fallback={<Loading />}>
          <MovieDetail data={movieData}  id={params.id} key={params.id} />
      </Suspense>
    </>
  );
};

export default page;
