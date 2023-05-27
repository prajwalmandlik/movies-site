"use client";
import React, { useContext } from "react";
import displayMovie from "../Data/displayMovie.json";
import { Context } from "./Clients";
import SwiperSlider from "./SwiperSlider";
import MoviesGrid from "./MoviesGrid";
import { Box } from "@chakra-ui/react";
import Loading from "../app/loading";
// import data from "./FeatureMoviesData";

const Home = () => {
  const { nowPlaying, popular, topRated, upcoming } = displayMovie;
  const { moviesList, loading } = useContext(Context);
 

  let flag = true;
  if (moviesList !== null) {
    flag = false;
  } else {
    flag = true;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box minH={"70vh"}>
          {flag ? (
            <>
              <SwiperSlider title="Now Playing" key={1}  category={"now_playing"} />
              <SwiperSlider title="Popular" key={2} category={"popular"} />
              <SwiperSlider title="Top Rated" key={3}  category={"top_rated"} />
              <SwiperSlider title="Upcoming" key={4}  category={"upcoming"} />
            </>
          ) : (
            <MoviesGrid />
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
