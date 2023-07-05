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
        __dark={{ bg: "gray.800", color: "white" }}
        _hover={"none"}
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
