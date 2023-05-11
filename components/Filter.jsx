"use client";
import React, { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const filterCategory = [
  "All",
  "Biography",
  "Short",
  "Adventure",
  "Fantasy",
  "Animation",
  "Drama",
  "Horror",
  "Action",
  "Comedy",
  "History",
  "Thriller",
  "Crime",
  "Documentary",
  "Science Fiction",
  "Mystery",
  "Romance",
  "War",
];

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState("All");

  const handleClick = (data) => {
    setSelectedButton(data);
    console.log(data);
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
            onClick={() => handleClick(ele)}
          >
            {ele}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default Filter;
