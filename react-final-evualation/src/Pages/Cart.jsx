import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {
  const { CartState, Cartdispatch } = useContext(CartContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  console.log("This is Cart Page" + CartState.cartData);

  let total = 0;
  for (let i = 0; i < CartState.cartData.length; i++) {
    total += CartState.cartData[i].price;
  }

  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th isNumeric>Remove From Cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {CartState.cartData.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.price}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    ml={300}
                    onClick={() => {
                      Cartdispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      });
                    }}
                  >
                    Remove from Product
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total Price</Th>
              <Th fontSize={25}>{Math.floor(total)}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {/* Alert Dialog of the website */}

      <Button onClick={onOpen}>Discard</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure to checkout all the item from the Cart....
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                Cartdispatch({ type: "CHECKOUT" });
                onClose();
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Cart;

//  {
//    CartState.cartData.map((item) => <img src={item.image} alt="dfsdfsdf" />);
//  }
