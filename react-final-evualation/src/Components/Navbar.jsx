import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { data } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const { state, dispatch } = useContext(data);

  console.log(state.token.token);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderWidth="2px"
        borderColor="gray.200"
        p={2}
      >
        {state.token.token === undefined ? (
          <Box></Box>
        ) : (
          <Box>
            <Text fontSize="2xl">Token is : {state.token.token}</Text>
          </Box>
        )}
        <Box>
          <Stack spacing={2} direction="row" align="center">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
