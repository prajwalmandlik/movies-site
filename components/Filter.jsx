"use client";
import React, { useContext, useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Context } from "./Clients";
import axios from "axios";

const filterCategory = [
  {
    id: 0,
    name: "All",
  },{
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const { setMoviesList, setLoading } = useContext(Context);

  const handleClick = (data ) => {
    setSelectedButton(data.name);
    if (data.id === 0) {
      setMoviesList(null);
    } else {
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
          with_genres:  data.id ,
          with_keywords:  data.name ,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDI5OWVkMzVkYjczZDYxNDA4ZmI2NjQ2ODNhYmFhMiIsInN1YiI6IjY0NTU1YjA2NzEwODNhMDEwMTNjNmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep066w3z1Uob-auK4zteLYbtO-Rv2msX7-QO7Wru0y4",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const { results } = response.data;
          setMoviesList( results );
          setLoading(false);
        })
        .catch(function (error) {
          setMoviesList([]);
          setLoading(false);
        });
      
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
        {filterCategory.map((ele , index) => (
          <Button
            key={ele}
            variant={selectedButton === ele.name ? "solid" : "outline"}
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
