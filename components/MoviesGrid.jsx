"use client";
import { Center, Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../app/loading";
import { Context } from "./Clients";

const MoviesGrid = () => {
  const { moviesList, category } = useContext(Context);
  const page = useRef(2);
  const [data, setData] = useState(moviesList);
  const [loading, setLoading] = useState(false);

  const fetchMoviesData = async (categoryData) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: page.current,
        sort_by: "popularity.desc",
        with_genres: categoryData.id,
        with_keywords: categoryData.name,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDI5OWVkMzVkYjczZDYxNDA4ZmI2NjQ2ODNhYmFhMiIsInN1YiI6IjY0NTU1YjA2NzEwODNhMDEwMTNjNmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep066w3z1Uob-auK4zteLYbtO-Rv2msX7-QO7Wru0y4",
      },
    };
    try {
      const { data } = await axios.request(options);
      const { results } = data;
      // setPage((prevPage) => prevPage + 1);
      page.current = page.current + 1;
      setLoading(false);
      if (results.length === 0) {
        return [];
      }
      return results;
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong, please try again later");
    }
  };

  const handleScroll = async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      const newMovies = await fetchMoviesData(category);
      // console.log(newMovies);
      setData((prevData) => [...prevData, ...newMovies]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category]);

  return (
    <>
      {data?.length === 0 && (
        <>
          <Center h={"50vh"}>
            <Text>No Movies Found </Text>
          </Center>
        </>
      )}
      <SimpleGrid m={4} columns={[3, 3, 4, 5, 8]} gap={4}>
        {data?.map((item) => (
          <Link href={`/details/${item.id}`} key={item.id}>
            <Img
              css={{
                "&:hover": {
                  transition: "all 0.5s ease",
                  transform: "scale(1.04)",
                },
              }}
              h={["10rem", "15rem"]}
              w={"auto"}
              aspectRatio={"2/3"}
              objectFit={"cover"}
              src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
              borderRadius={6}
              alt={item.title}
              boxShadow={"md"}
              bgColor={"hsl(200, 20%, 95%)"}
              _dark={{
                bgColor: "gray.900",
              }}
              loading={"lazy"}
            />
          </Link>
        ))}
      </SimpleGrid>
      {loading && <Loading />}
    </>
  );
};

export default MoviesGrid;
