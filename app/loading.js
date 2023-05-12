"use client";
import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return <><SimpleGrid w={"100%"} h={"80vh"} columns={1} placeItems={"center"} ><Spinner size='xl' /></SimpleGrid></>
}

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
}