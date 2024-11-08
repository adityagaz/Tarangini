import React from "react";
import { useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  CardFooter,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { MdImportExport } from "react-icons/md";

const loggeduserid = localStorage.getItem("userid");

const Cart = () => {
    const [load , setload] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [grandTotalPrice, setGrandTotalPrice] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const socket = new WebSocket(`ws://sehyogini.onrender.com/api/getCart/${loggeduserid}`);
        
        
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "cart_update") {
                
                setload(message.cart);
                calculateTotals(message.cart);
            }
        };

        return () => {
            
            socket.close();
        };
    }, []);



  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://sehyogini.onrender.com/api/getCart/${loggeduserid}`
          );
          const responseData = await response.json();
          setCart(responseData);
          setLoading(false);
          calculateTotals(responseData);
          console.log(cart);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    const handleCheckout = () => {
        window.location.href = "https://payments.coffeecodes.in/payments/0b579657-c332-4ec7-9550-f98b3c03d2b6";
      };
    const calculateTotals = (cartItems) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.quantity * item.product.price;
      });
      setTotalQuantity(totalQuantity);
      setGrandTotalPrice(totalPrice);
    };
  
    const handleQuantityChange = (index, newQuantity) => {
      const updatedCart = [...cart];
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
      calculateTotals(updatedCart);
    };
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          View Cart
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="lg"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>
            <DrawerBody>
              <div className="gap-4">
                {cart.map((data, index) => (
                  <div key={index}>
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      variant="outline"
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "200px" }}
                        src={data.product.image}
                        alt="Caffe Latte"
                      />
  
                      <Stack>
                        <CardBody>
                          <Heading size="md">{data.product.productName}</Heading>
  
                          <Text py="2">{data.product.description}</Text>
                        </CardBody>
  
                        <CardFooter>
                          <div className="flex flex-row gap-5 p-2">
                            <Heading as="h4" size="md">
                              Qty-{data.quantity}
                            </Heading>
                            <NumberInput
                              size="sm"
                              defaultValue={data.quantity}
                              onChange={(valueString) =>
                                handleQuantityChange(index, parseInt(valueString))
                              }
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <Button variant="solid" colorScheme="blue">
                              {"₹" + data.quantity * data.product.price}
                            </Button>
                          </div>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </div>
                ))}
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Stack direction="row" align="center" justify="space-between" w="100%">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="outline"
                  onClick={handleCheckout}
                >
                  CheckOut ({totalQuantity})
                </Button>

                <Text fontSize="lg" fontWeight="bold">
                  Grand Total: {"₹" + grandTotalPrice}
                </Text>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default Cart;