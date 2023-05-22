"use client";
import React, { useContext, useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Context } from "./Clients";

const filterCategory = [
  {
    "id": 0,
    "name" : "All"
  },
  {
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
  
];


const Filter = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const { setMoviesList  } = useContext(Context);

  const handleClick = (data) => {
    setSelectedButton(data);
    if(data === 0 ){
      setMoviesList(null)
    }else{
      setMoviesList([])
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
            key={ele}
            variant={selectedButton === ele ? "solid" : "outline"}
            minW="auto"
            px="2rem"
            onClick={() => handleClick(ele.id)}
          >
            {ele.name}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default Filter;
