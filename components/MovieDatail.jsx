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
} from "@chakra-ui/react";
import React from "react";

const MovieDatail = ({ data }) => {
  const { result } = data;
  const runtime = result.runtime;
  return (
    <>
      <VStack alignItems={"flex-start"} w={{base: "90vw", md:"80vw" }} my={4} mx={"auto"} columnGap={4} >
        <Box>
          <Heading as={"h2"}>{result.title}</Heading>
          <HStack>
            <Text>{result.year}</Text> <Text>{"-"} </Text>{" "}
            <Text>{runtime}m</Text>
          </HStack>
        </Box>
        <Stack direction={{base: "column", md:"row" }}>
          <Img
            src={`https://image.tmdb.org/t/p/w185${result.posterPath}`}
            w={"20vw"}
            display={{base: "none" , md: "block"}}
          />
          <Box w={{base: "90vw", md:"60vw" }} h={{base: "50vw", md:"30vw" }} >
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
        <Box >
          <HStack mt={4}>
            {result.genres.map((ele) => (
              <Badge key={ele.id}>{ele.name}</Badge>
            ))}
          </HStack>
          <Text>{result.overview}</Text>
        </Box>
        {/* <Box>
          <Img
            src={`https://image.tmdb.org/t/p/w780${result.backdropPath}`}
            w={"80vw"}
            h={"50vh"}
            objectFit="cover"
            borderRadius={10}
          />
        </Box>
        <HStack>
          <Box>
            <Img
              src={``}
              h={"10rem"}
              borderRadius={4}
            />
          </Box>
          <Box>
            <Heading as={"h2"}></Heading>
            <Text>{result.overview}</Text>
            <Box>
            {result.genres.map((ele) => (
              <Badge key={ele.id}>{ele.name}</Badge>
            ))}
          </Box>
          </Box>
        </HStack> */}
      </VStack>
    </>
  );
};

export default MovieDatail;
