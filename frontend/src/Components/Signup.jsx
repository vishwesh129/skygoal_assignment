import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_no, setMobile_no] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    const changePage = () => {
        navigate("/login");
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            mobile_no,
            password,
            city
        }

        fetch("http://localhost:8000/user/signup", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    alert("Signup successful, Please Login");
                    navigate("/login");
                }))
            .catch((err) => console.error(err))
    }

    return (
        <div>
            <Center mt={"50px"}>
                <Box backgroundColor={"gray.50"} p={"15px"} borderWidth='1px' overflow='hidden' w={"30%"} borderRadius={"10px"}>
                    <Heading>SIGN UP</Heading>
                    <FormControl isRequired>
                        <FormLabel htmlFor='firstname' >First Name</FormLabel>
                        <Input id='firstname' type='text' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='First Name' />

                        <FormLabel htmlFor='lastname' >Last Name</FormLabel>
                        <Input id='lastname' type='text' value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder='Last Name' />

                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />

                        <FormLabel htmlFor='mobile'>Mobile Number</FormLabel>
                        <Input id='mobile' type='number' value={mobile_no} onChange={(e) => { setMobile_no(e.target.value) }} placeholder='Mobile Number' />

                        <FormLabel htmlFor='city'>City</FormLabel>
                        <Input id='city' type='text' value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='City name' />

                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />

                        <Button colorScheme='yellow' borderRadius={"25px"} size='md' mt={"10px"} onClick={handleSignup}>SIGNUP</Button>
                    </FormControl>
                    <Text mt={"10px"}>
                        Already Registered? &nbsp;
                        <Button color="teal.500" onClick={changePage}>
                            LOG IN
                        </Button>
                    </Text>
                </Box>
            </Center>
        </div>
    );
};

export default Signup;