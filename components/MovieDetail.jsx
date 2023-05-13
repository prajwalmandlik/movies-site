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

const MovieDetail = ({ data, id }) => {
  return (
    <>
      <Box>
        <Box h={"70vh"}>
          <Img
            src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
            filter={"brightness(0.7)"}
            objectFit="cover"
            w={"100%"}
            h={"100%"}
          />
        </Box>
        <Box position={"absolute"} top={"35%"} left={"10%"} zIndex="100" >
          <Heading as={"h2"} size="3xl" >{data.original_title} </Heading>
          <HStack>
            <Text>{data.release_date.split("-")[0]}</Text> <Text>{"-"} </Text>{" "}
            <Text>{data.runtime}m</Text>
          </HStack>
        </Box>
      </Box>
      <VStack
        alignItems={"flex-start"}
        w={{ base: "90vw", md: "80vw" }}
        my={4}
        mx={"auto"}
        columnGap={4}
      >
        {/* <Box>
          <Heading as={"h2"}>{data.original_title}</Heading>
          <HStack>
            <Text>{data.release_date.split("-")[0]}</Text> <Text>{"-"} </Text>{" "}
            <Text>{data.runtime}m</Text>
          </HStack>
        </Box>
        <Box w={{ base: "90vw", md: "80vw" }}>
          <Img
            src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
            objectFit="contain"
            w={"100%"}
            h={"100%"}
            borderRadius={10}
          />
        </Box> */}
        <HStack wrap={"nowrap"} gap={4} pt={10}>
          <Img
            borderRadius={5}
            src={`https://image.tmdb.org/t/p/w154${data.poster_path}`}
            w={"7rem"}
          />
          <Box>
            <HStack my={2}>
              {data.genres.map((ele) => (
                <Tag size="lg" borderRadius="full" key={ele.id}>
                  {ele.name}
                </Tag>
              ))}
            </HStack>
            <Text fontSize={"1.2rem"} maxW={"50rem"}>
              {data.overview}
            </Text>
          </Box>
        </HStack>
        <Divider />

        <HStack gap={6} alignItems={"flex-start"}>
          <strong>Production Companies : </strong>
          <UnorderedList>
            {" "}
            {data.production_companies.map((ele) => (
              <ListItem key={ele}>{ele.name}</ListItem>
            ))}{" "}
          </UnorderedList>{" "}
        </HStack>
        <Divider />
        <VStack gap={6} alignItems={"flex-start"}>
          <Text>
            <strong>Release Date : </strong>
            {data.release_date}{" "}
          </Text>
          <Text>
            <strong>revenue : </strong>
            {data.revenue}${" "}
          </Text>
          <Text>
            <strong>Runtime : </strong>
            {data.runtime}m{" "}
          </Text>
          <Text>
            <strong>popularity : </strong>
            {data.popularity}{" "}
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default MovieDetail;
