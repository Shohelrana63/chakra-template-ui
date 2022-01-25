import { Box, Button, Container, Grid, Heading,Image, Link } from '@chakra-ui/react';
import React from 'react';
import hand from "../assets/hand.svg";
import ticket from "../assets/ticket.svg";
import person from "../assets/person.svg";

const Works = () => {
    return (
        <Box>
            <Container maxW="container.lg" my="20">
              <Heading align="center" size="lg" as="h3" pb="2">
                  How Meetup Works
              </Heading>
              <Box align="center" maxW="700px" mx="auto" pb="10">
                    Meet new people who share your interests through online and in-person
                    events. It’s free to create an account.
              </Box>
              <Grid templateColumns={{
                  sm: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(3, 1fr)',
                  xl: 'repeat(3, 1fr)',
                  base: 'repeat(1, 1fr)',
              }} gap={6}>
                  <Box mx="auto" align="center" >
                      <Image w="100%" boxSize="160px" src={hand} alt="brand"/>
                      <Heading as="h5" size="md">
                          <Link>
                            <Box color="blue.500" pb="4">
                                Join a Group
                            </Box>
                          </Link>
                      </Heading>
                      <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
                  </Box>
                  <Box mx="auto" align="center" >
                      <Image w="100%" boxSize="160px" src={ticket} alt="brand"/>
                      <Heading as="h5" size="md">
                          <Link>
                            <Box color="blue.500" pb="4">
                                Join a Group
                            </Box>
                          </Link>
                      </Heading>
                      <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
                  </Box>
                  <Box mx="auto" align="center" >
                      <Image w="100%" boxSize="160px" src={person} alt="brand"/>
                      <Heading as="h5" size="md">
                          <Link>
                            <Box color="blue.500" pb="4">
                                Join a Group
                            </Box>
                          </Link>
                      </Heading>
                      <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
                  </Box>
              </Grid>
              <Box align="center" mt="16">
                <Button
                    _hover={{ opacity: '0.8' }}
                    bg="blue.600"
                    color="#ffffff"
                    fontWeight="normal"
                    size="md"
                >
                    Join Meetup
                </Button>
             </Box>
            </Container>
        </Box>
    );
};

export default Works;