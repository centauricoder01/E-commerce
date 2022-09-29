import React, { useEffect,useState } from "react";
import  axios  from "axios";
import { Box,Button,Text,Image, Grid } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Home = () => {

const [data, setData] = useState([])
const [url, seturl] = useSearchParams()
const GettingData = () => {
  axios.get(`https://jabz-101-app.herokuapp.com/products`)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
};

  useEffect(() => {
    GettingData();
  }, []);

  console.log(url)

  return (
    <Grid templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            "2xl": 'repeat(5, 1fr)',
          }} gap={2}>
      {
        data.map((ele) =>(
          <Box key={ele.id} borderWidth="2px" borderColor="gray.200" textAlign="center">
              <Image boxSize='200px' src={ele.image} alt='Dan Abramov' alignContent="center" m={2}/>
              <Text fontSize='xl' m={2}>{ele.title}</Text>
              <Text fontSize='md' m={2}>INR : {ele.price}</Text>
              <Button colorScheme='blue' m={2} onClick={() =>{seturl(ele.id)}} >Add To Cart</Button>
          </Box>
        ))
      }

    </Grid>
  );
};

export default Home;
