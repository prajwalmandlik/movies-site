"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";

import { Box, Heading, IconButton, Img } from "@chakra-ui/react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { displayMovie } from "../app/Data";

export default function SwiperSlider({ title, data }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box m={4}>
      <Heading as={"h3"} fontSize="1.5rem" mb={4}>
        {title}
      </Heading>
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
    </Box>
  );
}
