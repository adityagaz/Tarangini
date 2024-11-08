import React, { useState, useEffect } from "react";
import Navigation from "../navigation/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Card, CardHeader, CardBody, CardFooter , Image , Stack , Heading , Text ,
Divider, ButtonGroup , Button} from '@chakra-ui/react'
import Cart from "../cart";

const loggeduserid = localStorage.getItem("userid");

const Marketplace = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sehyogini.onrender.com/api/getProduct"
        );
        const responseData = await response.json();
        // console.log(responseData.products);
        setProduct(responseData.products);
        setLoading(false);
        // console.log();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const addToCart = async (id) => {
    try {
      const response = await fetch(
        "https://sehyogini.onrender.com/api/addToCart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: loggeduserid,
            productId: id,
          }),
        }
      );
      const data = await response.json();
      if (!data) {
        toast.error("Unable to Add to Cart");
      } else {
        console.log("i ran");
        toast.success("Added to Cart");
      }

      if (!response.ok) {
        throw new Error("Failed ");
      }
    } catch (error) {
      console.error("Error updating", error);
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <Toaster />
      </div>
      <div class="absolute top-0 right-20 mt-5">
 <Cart />
</div>

      <div className="container w-full mx-auto mt-10">
        <div className="header mt-24">
          <h1
            className="mt-10 ml-2
           text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
          >
            Explore Our Products
          </h1>
        </div>
      </div>

      <div className="ml-20 mt-10 mr-20 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {product.map((data, index) => (
          <div key={index}>
            <Card maxW='sm'>
          <CardBody>
            <Image
            overflow='hidden'
              src={data.image}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{data.productName}</Heading>
              <Text>
              {data.description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
              {"₹"+data.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='ghost' colorScheme='blue'
              onClick={() => {
                addToCart(data._id);
              }}>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
            </div>
        ))}
      </div>
    </>
  );
};

export default Marketplace;
