"use client";
import { Box, Img, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { Movies } from "../app/Data";
import { Context } from "./Clients";

const MoviesGrid = () => {
  const { filter, search } = useContext(Context);
  let data = [];
  if (search !== "") {
    data = search
    // data = Movies.filter(movie => new RegExp(search, 'i').test(movie.title));
  }else {
    data = Movies.filter((item, index) => item.genre_ids.includes(filter));
  }

  return (
    <>
      
        <SimpleGrid m={4} columns={[3, 3, 4, 5, 8]} gap={4}>
          {data.map((item) => (
            <Link href="/details/tt57738" key={item}>
              <Img
                css={{
                  "&:hover": {
                    transition: "all 0.5s ease",
                    transform: "scale(1.04)",
                  },
                }}
                h={["10rem", "15rem"]}
                w={"auto"}
                aspectRatio={"12/16"}
                objectFit={"cover"}
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                borderRadius={6}
              />
            </Link>
          ))}
        </SimpleGrid>
      
    </>
  );
};

export default MoviesGrid;
