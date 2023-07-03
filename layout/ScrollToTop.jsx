"use client";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button
        rounded={"full"}
        pos={"fixed"}
        bottom={"5rem"}
        right={"2rem"}
        bg={"gray.700"}
        color={"white"}
        __dark={{ bg: "gray.800" }}
        _hover={{ bg: "gray.600" }}
        zIndex={"docked"}
        w={"3rem"}
        h={"3rem"}
        onClick={handleScroll}
      >
        <ArrowUpIcon />
      </Button>
    </>
  );
};

export default ScrollToTop;
