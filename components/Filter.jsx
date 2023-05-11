"use client";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const filterCatgory = [
  "All",
  "Biography",
  "Film Noir",
  "Game Show",
  "Musical",
  "Sport",
  "Short",
  "Adult",
  "Adventure",
  "Fantasy",
  "Animation",
  "Drama",
  "Horror",
  "Action",
  "Comedy",
  "History",
  "Western",
  "Thriller",
  "Crime",
  "Documentary",
  "Science Fiction",
  "Mystery",
  "Music",
  "Romance",
  "Family",
  "War",
  "News",
  "Reality",
  "Talk Show",
];

const Filter = () => {
  return (
    <>
      <HStack overflow={"auto"} wrap={"nowrap"}>
        {filterCatgory.map((ele) => (
          <>
            <Button variant={"outline"} w={"auto"}>
              {ele}
            </Button>{" "}
          </>
        ))}
      </HStack>
    </>
  );
};

export default Filter;
