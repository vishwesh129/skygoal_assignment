import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Details from './Details';


const Home = () => {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  }
  return (
    <div>
      {
        !start ?
          <div>
            <Navbar/>
            <Center>
              <VStack>
                <Heading mt={"10%"} color={'#0e3c6e'}> SkyGoal Education - Where Education Meets Future</Heading>
                <Text w={"70%"}>Take charge of your future with our extensive search engine to avail all that you need to
                  build a great career. We have combined Artificial intelligence and Education to serve your
                  queries regarding every aspect of your career.
                </Text>
              </VStack>

            </Center>
            <Link to={"/signup"}>
              <Button size='lg' colorScheme='green' mt='50px' onClick={handleStart}>Get Started</Button>
            </Link>
          </div>
          :
          <div>
            <Details />
          </div>
      }
    </div>
  );
};

export default Home;