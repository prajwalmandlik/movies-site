"use client";
import React, { useContext, useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Context } from "./Clients";

const filterCategory = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Fantasy",
  "History",
  "Horror",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
];

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const { setFilter , setSearch  } = useContext(Context);

  const handleClick = (data) => {
    setSelectedButton(data);
    setFilter(data);
    setSearch("");
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
