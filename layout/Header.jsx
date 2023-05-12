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

const Header = () => {
  const [value, setValue] = useState("");
  const [searchState, setSearchState] = useState(true);
  const login = false;
  const { colorMode, toggleColorMode } = useColorMode();
  const { setSearch  } = useContext(Context);

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const logOut = async () => {
  //     try {
  //       await axios.get(`${server}/users/logout`, {
  //         withCredentials: true,
  //       });

  //       toast.success("Logged Out Successfully");
  //       dispatch({
  //         type: "updateLogin",
  //         payload: false,
  //       });

  //       const data = { name: "adhikar", email: "adhikar@gmail.com" };

  //       dispatch({
  //         type: "updateUserData",
  //         payload: data,
  //       });
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   };

  const searchItem = (e) => {
    e.preventDefault();

    if (value === "") {
      setSearchState((state) => !state);
    } else {
      setSearch(value);
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
              <Heading as={"h2"}>Moives </Heading>
            </Link>
          </Box>

          <Box>
            <HStack>
              <Box>
                <form onSubmit={searchItem}>
                  <HStack gap={[0, 0, 0, "1rem"]}>
                    <InputGroup hidden={searchState}>
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
                    </InputGroup>
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
