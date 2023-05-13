"use client";
import { Box, Button, Center, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const signInWithGoogle = () => {
    toast.error("Sign in with Google is not available at the moment");
  };

  return (
    <>
      <Box>
        <Box h={"75vh"}>
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
            Sign In
          </Heading>

          <Center mt={10}>
            <Button
              w={"full"}
              maxW={"md"}
              bg={"white"}
              color={"black"}
              variant={"outline"}
              _hover={{ bg: "WhiteSmoke" }}
              leftIcon={<FcGoogle />}
              onClick={() => {
                signIn("google");
                router.push("/");
              }}
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
