import { Box, Image } from '@chakra-ui/core';
import { Badge, Button, Container, FormControl, Grid, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import brandLogo from '../assets/brandLogo.svg';
import banner from '../assets/banner.svg';
import imgOne from '../assets/imgOne.jpg';
import imgTwo from '../assets/imgTwo.jpg';
import imgThree from '../assets/imgThree.jpg';
import rightArrow from '../assets/rightArrow.jpg';
import { EmailIcon, SearchIcon } from '@chakra-ui/icons'
const Banner = () => {
    return (
        <>
        <header>
            <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
               <Image boxSize="90px"  src={brandLogo} alt="brand"/>
                <Box>
                    <Button pr={10} color="green" fontSize="md" variant="link">
                        login
                    </Button>
                    <Button color="green" fontSize="md" variant="link">
                        signUp
                    </Button>
                </Box>
            </Box>
            </header>
            {/* Banner description */}
            <Box>
                <Container maxW="container.lg">
                <Box d="flex" alignItems="center" py={20} flexDirection="row">
                    <Box mr={6}>
                        <Heading as="h1" size="2xl">
                            <Box fontWeight="black">
                                Drive In! There are so many meetup peopele
                            </Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Join a group to meet people, make friends, find support, grow a
                            business, and explore your interests. Thousands of events are
                            happening every day, both online and in person!
                        </Box>
                    </Box>
                    <Box  w="100%">
                        <Image src={banner} alt="banner" />
                    </Box>
                </Box>
                </Container>
            </Box>

            {/* three pictures */}
            <Container maxW="container.lg" mt={10}>
                <Grid templateColumns="repeat(3,1fr)" gap={6}>
                  <Box>
                      <Image w="100%" src={imgOne} alt="img" />
                      <Button colorScheme="teal" variant="link" mt="5">
                          Make new friend
                      <Image w="10px" ml="2" mt="1" src={rightArrow} alt="right arrow" />
              </Button>
                  </Box>
                  <Box>
                      <Image w="100%" src={imgTwo} alt="img" />
                      <Button colorScheme="teal" variant="link" mt="5">
                          Make new friend
                      <Image w="10px" ml="2" mt="1" src={rightArrow} alt="right arrow" />
              </Button>
                  </Box>
                  <Box>
                      <Image w="100%" src={imgThree} alt="img" />
                      <Button colorScheme="teal" variant="link" mt="5">
                          Make new friend
                      <Image w="10px" ml="2" mt="1" src={rightArrow} alt="right arrow" />
              </Button>
                  </Box>
                </Grid>
            </Container>

         {/* Badge */}
        <Container maxW="container.lg">
          <Box
            direction="row"
            display="flex"
            flexWrap="wrap"
            justifyContent={{
              lg: 'space-between'
            }}
            my="10"
          >
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              textTransform="normal"
              color="#ffffff"
              bg="teal.400"
            >
              Boost your carrer
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Find your zen
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Get moving
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Share launguage + culture
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Read with friends
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Write together
            </Badge>
            <Badge
              borderRadius="3xl"
              px={4}
              py={2}
              mr="4"
              mb="4"
              color="#ffffff"
              textTransform="normal"
              bg="teal.400"
            >
              Hone your craft
            </Badge>
          </Box>
        </Container>

        {/* last header section */}
        <Container maxW="container.lg" mt={20}>
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
              base: 'repeat(1, 1fr)',
            }}
            gap={6}
          >
            <Box>
              <Heading as="h3" size="lg" mb="7">
                What do you want to do?
              </Heading>
              <Box
                d="flex"
                alignItems="center"
                flexDirection={{
                  sm: 'column',
                  md: 'row',
                  lg: 'row',
                  xl: 'row',
                  base: 'column',
                }}
                w="100%"
              >
                <Box
                  flexBasis={{
                    sm: '100%',
                    md: '50%',
                    lg: '50%',
                    xl: '50%',
                    base: '100%',
                  }}
                  w="100%"
                  mr={{
                    sm: '0',
                    md: '2',
                    lg: '2',
                    xl: '2',
                    base: '0',
                  }}
                >
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'anything'"
                        type="text"
                        w="100%"
                      />
                      <Box pos="absolute" top="2" left="2">
                      <SearchIcon />
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
                <Box
                  flexBasis={{
                    sm: '100%',
                    md: '50%',
                    lg: '50%',
                    xl: '50%',
                    base: '100%',
                  }}
                  w="100%"
                  ml={{
                    sm: '0',
                    md: '2',
                    lg: '2',
                    xl: '2',
                    base: '0',
                  }}
                >
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'email'"
                        type="text"
                        w="100%"
                      />
                      <Box pos="absolute" top="2" left="2">
                      <EmailIcon />
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
              <Button
                _hover={{ opacity: '0.8' }}
                mt="5"
                pt="6"
                pb="6"
                w="100%"
                color="#ffffff"
                bg="red.500"
                fontSize="lg"
              >
                <Box fontWeight="black">Search</Box>
              </Button>
            </Box>
            <Box>
              <Heading
                as="h3"
                size="lg"
                mb="7"
                display={{
                  sm: 'none',
                  md: 'block',
                  lg: 'block',
                  xl: 'block',
                  base: 'none',
                }}
              >
                See what’s happening
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  Starting soon
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  Today
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  Tomorrow
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  This Week
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  Online
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  In person
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.500"
                >
                  Trending near you
                </Badge>
              </Box>
            </Box>
          </Grid>
        </Container>
        </>
    );
};

export default Banner;