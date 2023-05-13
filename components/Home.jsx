"use client";
import React, { useContext } from "react";
import { displayMovie } from "../app/Data";
import { Context } from "./Clients";
import SwiperSlider from "./SwiperSlider";
import MoviesGrid from "./MoviesGrid";

const Home = () => {
  const { nowPlaying, popular, topRated, upcoming } = displayMovie;
  const { filter, search } = useContext(Context);

  let flag = true;
  console.log(filter, search);
  if (filter === 0 && search === "") {
    flag = true;
    console.log("flag", flag);
  } else {
    flag = false;
    console.log("flag", flag);
  }
  return (
    <>
      { flag ? (
        <>
          <SwiperSlider title="Now Playing" key={1} data={nowPlaying} />
          <SwiperSlider title="Popular" key={2} data={popular} />
          <SwiperSlider title="Top Rated" key={3} data={topRated} />
          <SwiperSlider title="Upcoming" key={4} data={upcoming} />
        </>
      ) : (
        <MoviesGrid />
      )}
    </>
  );
};

export default Home;
