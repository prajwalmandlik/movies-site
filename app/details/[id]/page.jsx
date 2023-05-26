import React, { Suspense } from "react";
import Loading from "../../loading";
import MovieDetail from "../../../components/MovieDetail"

const page = ({ params }) => {
  
  return (
    <>
      <Suspense fallback={<Loading />}>
          <MovieDetail  id={params.id} key={params.id} />
      </Suspense>
    </>
  );
};

export default page;
