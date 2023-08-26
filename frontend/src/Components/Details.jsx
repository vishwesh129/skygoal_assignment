import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Details() {
    const [details, setDetails] = useState({});

    const token = localStorage.getItem("token")

    const fetchData = () => {
        fetch("http://localhost:8000/details", {
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

    return (

        <div>
            <Navbar />
            {token ? (
                <div>
                    <Heading mb={5} mt={5}>Details</Heading>

                    <Center mt={"30px"}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
                            <div>
                                <Center>
                                    <VStack>
                                        <Heading>{details.firstName}</Heading>
                                        <Heading>{details.mobile_no}</Heading>
                                        <Heading>{details.email}</Heading>
                                        <Heading>{details.city}</Heading>
                                    </VStack>
                                </Center>
                            </div>
                        </div>
                    </Center>
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
