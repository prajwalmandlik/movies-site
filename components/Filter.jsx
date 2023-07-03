"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Context } from "./Clients";
import axios from "axios";
import { toast } from "react-hot-toast";

const filterCategory = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const Filter = () => {
  const { setMoviesList, setLoading, setCategory, category } =
    useContext(Context);

  const fetchMoviesData = async (categoryData, pageNo) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
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
      setLoading(false);
      if (results.length === 0) {
        return [];
      }
      return results;
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }
  };

  const handleClick = async (categoryData) => {
    if (categoryData.id === 0) {
      setMoviesList(null);
    } else {
      const movies = await fetchMoviesData(categoryData, 1);
      setCategory(categoryData);
      setMoviesList(movies);
    }
  };

  return (
    <Box
      overflowX="scroll"
      mx={4}
      sx={{
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          height: "6px",
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          backgroundColor: "gray.300",
        },
        "&:hover::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.400",
        },
      }}
    >
      <HStack wrap="nowrap" spacing={2} p={2}>
        {filterCategory.map((ele) => (
          <Button
            key={ele.id}
            variant={category.name === ele.name ? "solid" : "outline"}
            minW="auto"
            px="2rem"
            onClick={() => handleClick(ele)}
          >
            {ele.name}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default Filter;
