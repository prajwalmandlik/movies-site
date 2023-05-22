"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { CloseIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Context } from "../components/Clients";
import { useSession, signOut } from "next-auth/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import MoviesName from "../Data/movieName.json";
import { useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  const [value, setValue] = useState("");
  const [searchState, setSearchState] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const { setMoviesList } = useContext(Context);
  const [option, setOption] = useState([]);
  const router = useRouter();

  const { data } = useSession();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: value,
        include_adult: "false",
        language: "en-US",
        page: "1",
        region: 'us'
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDI5OWVkMzVkYjczZDYxNDA4ZmI2NjQ2ODNhYmFhMiIsInN1YiI6IjY0NTU1YjA2NzEwODNhMDEwMTNjNmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep066w3z1Uob-auK4zteLYbtO-Rv2msX7-QO7Wru0y4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setOption(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [value]);

  const searchItem = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    // const options = MoviesName.filter((movie) =>
    //   new RegExp(value, "i").test(movie.title)
    // );

    router.push("/");
    if (value === "") {
      setMoviesList([])
    } else {
      setMoviesList(option);
      // console.log(option);
    }
  };

  return (
    <div className="header-cantainer">
      <Box px={[2, 2, 2, 10]} w={"100%"}>
        <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              {" "}
              {/* <Image src={Logo} w={"150px"} h={"auto"} />{" "} */}
              <Heading
                display={{ base: !searchState && "none", sm: "block" }}
                as={"h2"}
                fontSize={["1.5rem", "2rem"]}
              >
                Moives Scout
              </Heading>
            </Link>
          </Box>

          <Box>
            <HStack>
              <Box>
                <HStack gap={0}>
                  <AutoComplete rollNavigation>
                    <AutoCompleteInput
                      variant="filled"
                      placeholder="Search..."
                      autoFocus
                      value={value}
                      onChange={searchItem}
                      hidden={searchState}
                      _dark={{
                        bg: "gray.900",
                        borderColor: "gray.600",
                        color: "white",
                      }}
                    />
                    <AutoCompleteList>
                      {option.map((ele, oid) => (
                        <AutoCompleteItem
                          key={`option-${oid}`}
                          value={ele.title}
                          textTransform="capitalize"
                        >
                          <Link href={`/details/${ele.id}`}>{ele.title}</Link>
                        </AutoCompleteItem>
                      ))}
                    </AutoCompleteList>
                  </AutoComplete>
                  <Button
                    bg={"inherit"}
                    _focus={{ bg: "inherit" }}
                    _active={{ bg: "inherit" }}
                    _hover={{ bg: "inherit" }}
                    px={[0, 0, "1rem"]}
                    onClick={() => setSearchState(!searchState)}
                  >
                    <SearchIcon />
                  </Button>
                </HStack>
              </Box>
              <Button
                onClick={toggleColorMode}
                _focus={{ bg: "inherit" }}
                _active={{ bg: "inherit" }}
                _hover={{ bg: "inherit" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Box display={{ base: !searchState && "none", sm: "block" }}>
                {useSession && data ? (
                  <User user={data?.user} />
                ) : (
                  <>
                    <Link href="/auth">
                      <Button
                        borderRadius="full"
                        variant="outline"
                        colorScheme="blue"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

const User = ({ user }) => {
  const { name, image } = user;
  const firstName = name.split(" ")[0];

  return (
    <>
      <Menu>
        <MenuButton>
          <HStack>
            <Avatar size="sm" name={name} src={image} />
            <Text>{firstName}</Text>
          </HStack>
        </MenuButton>
        <MenuList m={"0 2rem"} minW={"3rem"}>
          <MenuItem onClick={() => signOut()}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Header;
