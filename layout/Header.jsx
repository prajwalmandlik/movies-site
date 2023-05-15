"use client";

import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
// import {
//   AutoComplete,
//   AutoCompleteInput,
//   AutoCompleteItem,
//   AutoCompleteList,
//   AutoCompleteFixedItem,
// } from "@choc-ui/chakra-autocomplete";
import  MoviesName  from "../Data/movieName.json";

const Header = () => {
  const [value, setValue] = useState("");
  const [searchState, setSearchState] = useState(true);
  const login = false;
  const { colorMode, toggleColorMode } = useColorMode();
  const { setSearch, setFilter } = useContext(Context);
  const [option, setOption] = useState([]);

  const { data } = useSession();
  

  const searchItem = (e) => {
    // e.preventDefault();
    setValue(e.target.value);
    const options = MoviesName.filter((movie) =>
      new RegExp(value, "i").test(movie.title)
    );
    setOption(options);

    if (value === "") {
      setSearch("");
      setFilter(0);
    } else {
      setSearch(options);
    }
  };

  return (
    <div className="header-cantainer">
      <Box px={[2, 2, 2, 10]}>
        <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              {" "}
              {/* <Image src={Logo} w={"150px"} h={"auto"} />{" "} */}
              <Heading
                display={{ base: !searchState && "none", sm: "block" }}
                as={"h2"}
                fontSize={["1.5rem","2rem"]}
              >
                Moives Scout
              </Heading>
            </Link>
          </Box>

          <Box>
            <HStack>
              <Box>
                <HStack gap={0}>
                  <InputGroup hidden={searchState} >
                    <Input
                      type="text"
                      placeholder="Search"
                      value={value}
                      onChange={searchItem}
                      w={{ base: "65vw", sm: "25rem" }}
                      _dark={{
                        bg: "whiteAlpha.300",
                      }}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() => {
                          setValue("");
                        }}
                        _focus={{ bg: "inherit" }}
                        _active={{ bg: "inherit" }}
                        _hover={{ bg: "inherit" }}
                        hidden={value === "" ? true : false}
                      >
                        <CloseIcon fontSize={".8rem"} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {/* <AutoComplete rollNavigation>
                      <InputGroup hidden={searchState}>
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
                      <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() => {
                              setValue("");
                            }}
                            _focus={{ bg: "inherit" }}
                            _active={{ bg: "inherit" }}
                            _hover={{ bg: "inherit" }}
                            hidden={value === "" ? true : false}
                          >
                            <CloseIcon fontSize={".8rem"} />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <AutoCompleteList>
                        {option.map((ele, oid) => (
                          <AutoCompleteItem
                            key={`option-${oid}`}
                            value={ele.title}
                            textTransform="capitalize"
                            onClick={(e) => {
                              setSearch([ele]);
                              // console.log(ele)
                            }}
                          >
                            {ele.title}
                          </AutoCompleteItem>
                        ))}
                      </AutoCompleteList>
                    </AutoComplete> */}
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
                { (useSession && data) ? (
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
  const { name , image } = user;
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
