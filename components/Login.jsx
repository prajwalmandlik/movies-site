"use client";
import { Box, Button, Center, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
const router = useRouter();
const { data } = useSession();


if(data){
  router.push("/")
}

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
            loading={"lazy"}
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
                signIn("google")
              }}
              disabled={ useSession() }
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
