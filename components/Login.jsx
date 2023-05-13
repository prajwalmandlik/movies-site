"use client";
import { Box, Button, Center, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-hot-toast";
// import app from "../firebase/firebaseConfig";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

  const signInWithGoogle = () => {
    toast.error("Sign in with Google is not available at the moment")
  }

  return (
    <>
      <Box>
        <Box h={"70vh"}>
          <Img
            src={`https://wallpaperaccess.com/full/4839516.jpg`}
            filter={"brightness(0.5)"}
            objectFit="cover"
            w={"100%"}
            h={"100%"}
          />
        </Box>
        <Box
          position={"absolute"}
          top={"40%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          zIndex="100"
          color={"white"}
        >
          <Heading as={"h2"} size="3xl">
            Movies
          </Heading>

          <Center mt={4} >
            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              onClick={signInWithGoogle}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default Login;
