import { useState } from "react";
import { Box, Button, Input, Center } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { data } from "../Context/AuthContext/AuthContextProvider";
import axios from "axios";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const { state, dispatch } = useContext(data);

  const [disable, setdisable] = useState(false);

  const [formstate, setformstate] = useState({
    name: "",
    password: "",
  });

  const valuechange = (e) => {
    const { name, value } = e.target;
    setformstate({
      ...formstate,
      [name]: value,
    });
  };

  let postrequest = () => {
    setdisable(true);
    axios
      .post(`https://reqres.in/api/register`, {
        email: formstate.name,
        password: formstate.password,
      })
      .then(function (response) {
        setdisable(false);
        alert("Login Successfully");
        console.log(response.data);
        dispatch({
          type: "TOKEN",
          payload: {
            token: response.data,
          },
        });
      })
      .catch(function (error) {
        setdisable(false);
        alert("Please Enter Correct Details");
        console.log(error);
      });
  };

  const onsubmitcalled = (e) => {
    e.preventDefault();
    postrequest();
  };

  if (state.auth_state) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form onSubmit={onsubmitcalled}>
        <Center m={10}>
          <Box bg="#E2E8F0" w="50%" p={10} color="white">
            <Input
              placeholder="Enter Email"
              size="lg"
              borderWidth="2px"
              borderColor="black.200"
              m={3}
              color="black"
              value={formstate.name}
              name="name"
              onChange={valuechange}
            />
            <Input
              placeholder="Enter Password"
              size="lg"
              borderWidth="2px"
              borderColor="black.200"
              m={3}
              color="black"
              value={formstate.password}
              name="password"
              onChange={valuechange}
            />
            {disable ? (
              <Button type="submit" colorScheme="blue" disabled>
                Button
              </Button>
            ) : (
              <Button type="submit" colorScheme="blue">
                Button
              </Button>
            )}
          </Box>
        </Center>
      </form>
    </>
  );
};

export default Login;
