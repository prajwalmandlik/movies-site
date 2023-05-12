import React, { Suspense } from "react";
import Loading from "../../loading";
import { movieData } from "../../Data"
import MovieDatail from "../../../components/MovieDatail"

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
          <MovieDatail data={movieData} />
      </Suspense>
    </>
  );
};

export default page;
