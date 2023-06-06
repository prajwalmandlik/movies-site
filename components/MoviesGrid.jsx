"use client";
import { Center, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { Context } from "./Clients";

const MoviesGrid = () => {
  const { moviesList } = useContext(Context);
  const data = moviesList;

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
          <Link href={`/details/${item.id}`} key={item}>
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
    </>
  );
};

export default MoviesGrid;
