"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import {
  Box,
  Heading,
  IconButton,
  Img,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function SwiperSlider({ title, category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${category}`,
      params: { language: "en-US", page: "1", region: "us" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDI5OWVkMzVkYjczZDYxNDA4ZmI2NjQ2ODNhYmFhMiIsInN1YiI6IjY0NTU1YjA2NzEwODNhMDEwMTNjNmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep066w3z1Uob-auK4zteLYbtO-Rv2msX7-QO7Wru0y4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, [category]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Box m={4}>
        <Heading as={"h3"} fontSize="1.5rem" mb={4}>
          {title}
        </Heading>
        {/* <Suspense fallback={<Spinner />}> */}
        <Box h={["10rem", "15rem"]}>
          {loading ? (
            <>
              <SimpleGrid
                w={"100%"}
                h={"100%"}
                columns={1}
                placeItems={"center"}
              >
                <Spinner size="xl" />
              </SimpleGrid>
            </>
          ) : (
            <Swiper
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              breakpoints={{
                350: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                476: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                920: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1080: {
                  slidesPerView: 8,
                  spaceBetween: 20,
                },
              }}
              freeMode={true}
              rewind={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={`/details/${item.id}`}>
                    <Img
                      css={{
                        "&:hover": {
                          transition: "all 0.5s ease",
                          transform: "scale(1.04)",
                        },
                      }}
                      h={["10rem", "15rem"]}
                      w={"auto"}
                      objectFit={"cover"}
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      borderRadius={6}
                      aspectRatio={"12/16"}
                      alt={item.id}
                    />
                  </Link>
                </SwiperSlide>
              ))}
              <Box>
                <IconButton
                  icon={<ChevronLeftIcon />}
                  fontSize={["xl", "2xl"]}
                  size={"md"}
                  borderRadius={"50%"}
                  ref={navigationPrevRef}
                  position={"absolute"}
                  top={"40%"}
                  left={"1%"}
                  zIndex={100}
                  bg="whiteAlpha.800"
                  _dark={{
                    color: "black",
                  }}
                />
                <IconButton
                  icon={<ChevronRightIcon />}
                  fontSize={["xl", "2xl"]}
                  size={"md"}
                  borderRadius={"50%"}
                  ref={navigationNextRef}
                  position={"absolute"}
                  top={"40%"}
                  right={"1%"}
                  zIndex={100}
                  bg="whiteAlpha.800"
                  _dark={{
                    color: "black",
                  }}
                />
              </Box>
            </Swiper>
          )}
        </Box>
        {/* </Suspense> */}
      </Box>
    </>
  );
}
