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
  Avatar,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "../app/loading";
import moment from "moment/moment";

const MovieDetail = ({ id }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDI5OWVkMzVkYjczZDYxNDA4ZmI2NjQ2ODNhYmFhMiIsInN1YiI6IjY0NTU1YjA2NzEwODNhMDEwMTNjNmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep066w3z1Uob-auK4zteLYbtO-Rv2msX7-QO7Wru0y4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Something went wrong");
        setLoading(false);
      });
  }, [id]);

  console.log(data);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box>
            <Box h={"80vh"}>
              <Img
                src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
                filter={"brightness(0.5)"}
                objectFit="cover"
                w={"100%"}
                h={"100%"}
                alt={data.title}
              />
            </Box>
            <Box
              position={"absolute"}
              top={["45vh", "50vh"]}
              left={["5%", "10%"]}
              zIndex="100"
              color={"white"}
              maxW={"30rem"}
            >
              <Heading as={"h2"} size="2xl" mb={4}>
                {data.title}{" "}
              </Heading>

              <HStack fontWeight={"500"}>
                {/* <Text>{data.release_date.split("-")[0]}</Text> <Text>{"-"} </Text>{" "} */}
                <Text>{moment(data.release_date).format("YYYY")}</Text>
                <Text> | </Text>
                <Text>{moment(data.runtime).format("h[h] mm[m]")}</Text>
                <Text> | </Text>
                <Text>{data.status}</Text>
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
            <HStack wrap={"nowrap"} gap={4} pt={10}>
              <Img
                borderRadius={5}
                src={`https://image.tmdb.org/t/p/w154${data.poster_path}`}
                w={"7rem"}
              />
              <Stack direction={"column"}>
                <Box my={2} >
                  {data.genres?.map((ele) => (
                    <Tag
                      size="lg"
                      borderRadius={10}
                      key={ele.id}
                      mx={2}
                      my={2}
                      px={4}
                      py={2}
                    >
                      {ele.name}
                    </Tag>
                  ))}
                </Box>
                <Box display={["none","none", "block"]}>
                  <Text fontSize={"1.2rem"} fontWeight={"bold"} mb={1}>
                    {data?.tagline?.toUpperCase()}
                  </Text>
                  <Text fontSize={"1rem"} maxW={"50rem"}>
                    {data.overview}
                  </Text>
                </Box>
              </Stack>
            </HStack>

            <Box display={["black","black", "none"]}>
              <Text fontSize={"1.2rem"} fontWeight={"bold"} mb={1}>
                {data?.tagline?.toUpperCase()}
              </Text>
              <Text fontSize={"1rem"} maxW={"50rem"} textAlign={"justify"}>
                {data.overview}
              </Text>
            </Box>
            <Divider />

            <HStack gap={6} alignItems={"flex-start"}>
              <strong>Production Companies : </strong>
              <UnorderedList>
                {data.production_companies?.map((ele) => (
                  <>
                    <ListItem key={ele}>
                      <Image
                        aspectRatio={"16/9"}
                        bgColor={"whitesmoke"}
                        src={`https://image.tmdb.org/t/p/w154${ele.logo_path}`}
                      />
                      <Text>{ele.name}</Text>
                    </ListItem>
                  </>
                ))}
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
          </VStack>{" "}
        </>
      )}
    </>
  );
};

export default MovieDetail;
