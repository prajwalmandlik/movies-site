"use client";
import React, { useContext } from "react";
import displayMovie from "../Data/displayMovie.json";
import { Context } from "./Clients";
import SwiperSlider from "./SwiperSlider";
import MoviesGrid from "./MoviesGrid";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const { nowPlaying, popular, topRated, upcoming } = displayMovie;
  const { moviesList } = useContext(Context);

  let flag = true;
  if (moviesList !== null) {
    flag = false;
  } else {
    flag = true;
  }

  console.log(flag)
  return (
    <>
      <Box minH={"70vh"}>
        {flag ? (
          <>
            <SwiperSlider title="Now Playing" key={1} data={nowPlaying} />
            <SwiperSlider title="Popular" key={2} data={popular} />
            <SwiperSlider title="Top Rated" key={3} data={topRated} />
            <SwiperSlider title="Upcoming" key={4} data={upcoming} />
          </>
        ) : (
          <MoviesGrid />
        )}
      </Box>
    </>
  );
};

export default Home;
