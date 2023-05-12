"use client";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Img,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  chakra,
  Stack,
  Tag,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const MovieDetail = ({ data }) => {
  const { result } = data;
  const runtime = result.runtime;
  return (
    <>
      <VStack
        alignItems={"flex-start"}
        w={{ base: "90vw", md: "80vw" }}
        my={4}
        mx={"auto"}
        columnGap={4}
      >
        <Box>
          <Heading as={"h2"}>{result.title}</Heading>
          <HStack>
            <Text>{result.year}</Text> <Text>{"-"} </Text>{" "}
            <Text>{runtime}m</Text>
          </HStack>
        </Box>
        <Stack direction={{ base: "column", md: "row" }}>
          <Img
            src={`https://image.tmdb.org/t/p/w185${result.posterPath}`}
            w={"20vw"}
            display={{ base: "none", md: "block" }}
          />
          <Box
            w={{ base: "90vw", md: "60vw" }}
            h={{ base: "50vw", md: "30vw" }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${result.youtubeTrailerVideoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              object-fit="contain"
            ></iframe>
          </Box>
        </Stack>
        <Box>
          <HStack my={2}>
            {result.genres.map((ele) => (
              <Tag size="lg" borderRadius="full" key={ele.id}>
                {ele.name}
              </Tag>
            ))}
          </HStack>
          <Text fontSize={"1.1rem"} maxW={"50rem"}>
            {result.overview}
          </Text>
        </Box>
        <Divider />

        <HStack gap={6} alignItems={"flex-start"}>
          <strong>Directors : </strong>
          <UnorderedList>
            {" "}
            {result.directors.map((ele) => (
              <ListItem key={ele}>{ele}</ListItem>
            ))}{" "}
          </UnorderedList>{" "}
        </HStack>
        <Divider />
        <HStack gap={6} alignItems={"flex-start"}>
          <strong>Cast : </strong>
          <UnorderedList>
            {" "}
            {result.cast.map((ele) => (
              <ListItem key={ele}>{ele}</ListItem>
            ))}{" "}
          </UnorderedList>{" "}
        </HStack>
        <Divider />
        <Box>
          <Box>
            <strong>IMDB Rating : </strong> {result.imdbRating / 10}{" "}
          </Box>
          <Box>
            <strong>IMDB Voting Count : </strong> {result.imdbVoteCount}{" "}
          </Box>
        </Box>
      </VStack>
    </>
  );
};

export default MovieDetail;
