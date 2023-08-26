import { Box, Button, Center, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    const handleProfile = () => {
        navigate('/details')
    }

    
    const handleLogout = () => {
        localStorage.removeItem('token');
        // Redirect to the login page after logout
        navigate("/details")
    };
    return (
        <div>
            <Center backgroundColor={'gray.100'} pb={"10px"}>
                <Flex minWidth='max-content' alignItems='center' gap='2' mt={"10px"} w={"95%"} >
                    <Box p='2'>
                        <Link to={"/"}>
                            <Heading size='lg'>SkyGoal</Heading>
                        </Link>
                    </Box>
                    <Flex>
                        {/* <Link to={"/details"}>
                            <Button size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                                <p>Profile</p>
                            </Button>
                        </Link> */}
                        <Button onClick={handleProfile} size='lg' variant='ghost' width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{ bg: 'yellow.200', color: 'white', }} >
                            <p>Profile</p>
                        </Button>
                    </Flex>
                    <Spacer />
                    {token && (
                        <Button size='lg' variant='ghost' onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </Flex>
            </Center>
        </div>
    );
};

export default Navbar;