import { Avatar, Box, Button, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

export default function Details() {
    const [details, setDetails] = useState({});

    var fullName = details.firstName + " " + details.lastName;

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const fetchData = () => {
        fetch("https://gold-crayfish-yoke.cyclic.cloud/details", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data);
            })
            .catch((err) => {
                console.log("Error while getting data");
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
    };

    return (

        <div>
            <Navbar />
            {token ? (
                <div>
                    <Heading mb={5} mt={5}>Profile Details</Heading>
                    <Center>
                        <Box backgroundColor={"#0e3c6e"} w={"40%"} borderRadius={"10px"} p={"20px"} borderWidth='2px'>
                            <Flex alignItems={'center'} justifyContent={'space-around'}>
                                <Avatar size='2xl' name={details.firstName + " " +details.lastName} src='https://bit.ly/broken-link' />
                                <VStack color={'white'} align={'start'} backgroundColor={'blackAlpha.300'} p={"20px"} borderRadius={"10px"}>
                                    <Heading>{fullName} </Heading>
                                    <Heading size='md'>{details.email}</Heading>
                                    <Text fontSize='xl'>{details.mobile_no}</Text>
                                    <Text fontSize='xl'>{details.city}</Text>
                                </VStack>
                            </Flex>
                        </Box>
                    </Center>
                    <Button size='md' colorScheme='linkedin' onClick={handleLogout} mt={"10px"}>
                            LOGOUT
                        </Button>
                </div>
            )
                :
                <>
                    <Heading mt={"100px"}>Please Login to see Profile details</Heading>
                    <Center mt={"30px"} gap={"20px"}>
                        <Link to={"/signup"}>
                            <Button size='lg' variant='outline' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: '#0e3c6e', color: 'white', }} >
                                <p>Signup</p>
                            </Button>
                        </Link>
                        <Link to={"/login"}>
                            <Button size='lg' variant='outline' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: '#0e3c6e', color: 'white', }} >
                                <p>Login</p>
                            </Button>
                        </Link>
                    </Center>
                </>
            }
        </div>
    );
}
