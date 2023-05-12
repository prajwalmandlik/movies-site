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
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteFixedItem,
} from '@choc-ui/chakra-autocomplete';

const Header = () => {
  const [value, setValue] = useState("");
  const [searchState, setSearchState] = useState(true);
  const login = false;
  const { colorMode, toggleColorMode } = useColorMode();
  const { setSearch } = useContext(Context);

  const searchItem = (e) => {
    e.preventDefault();

    if (value === "") {
      setSearchState((state) => !state);
    } else {
      setSearch(value);
    }
  };

  const options = ["apple", "appoint", "zap", "cap", "japan"];

  return (
    <div className="header-cantainer">
      <Box px={[2, 2, 2, 10]}>
        <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              {" "}
              {/* <Image src={Logo} w={"150px"} h={"auto"} />{" "} */}
              <Heading as={"h2"}>Moives </Heading>
            </Link>
          </Box>

          <Box>
            <HStack>
              <Box>
                <form onSubmit={searchItem}>
                  <HStack gap={[0, 0, 0, "1rem"]}>
                    {/* <InputGroup hidden={searchState}>
                      <Input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
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
                    </InputGroup> */}
                    <AutoComplete rollNavigation>
                      {/* <InputGroup hidden={searchState}> */}
                        <AutoCompleteInput
                          variant="filled"
                          placeholder="Search..."
                          autoFocus
                          value={value}
                          onChange={(e) => {
                            setValue(e.target.value);
                          }}
                          hidden={searchState}
                          _dark={{
                            bg: "gray.900",
                            borderColor: "gray.600",
                            color: "white",
                          }}
                        />
                        {/* <InputRightElement h={"full"}>
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
                      </InputGroup> */}
                      <AutoCompleteList>
                        {options.map((option, oid) => (
                          <AutoCompleteItem
                            key={`option-${oid}`}
                            value={option}
                            textTransform="capitalize"
                            onClick={(e) => {
                              setValue(option);
                            }}
                          >
                            {option}
                          </AutoCompleteItem>
                        ))}
                      </AutoCompleteList>
                    </AutoComplete>
                    <Button
                      type={"submit"}
                      bg={"inherit"}
                      _focus={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _hover={{ bg: "inherit" }}
                      px={[0, 0, "1rem"]}
                    >
                      <SearchIcon />
                    </Button>
                  </HStack>
                </form>
              </Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Box>
                {login ? (
                  <User name={userData.name} />
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

const User = ({ name }) => {
  const firstName = name.split(" ")[0];

  return (
    <>
      <Menu>
        <MenuButton>
          <HStack>
            <Avatar size="sm" name={name} />
            <Text>{firstName.toUpperCase()}</Text>
          </HStack>
        </MenuButton>
        <MenuList m={"0 2rem"} minW={"3rem"}>
          <Link to={`/profile`}>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Header;
