import React, { Suspense } from "react";
import Loading from "../../loading";
import { movieData } from "../../Data"
import MovieDetail from "../../../components/MovieDetail"

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
          <MovieDetail data={movieData} />
      </Suspense>
    </>
  );
};

export default page;
