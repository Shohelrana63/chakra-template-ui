import { Box, Image, Container, Heading, Grid, Link } from '@chakra-ui/react';
import Upcommingone from '../assets/upcomming-one.png';
import Upcommingtwo from '../assets/upcomming-two.jpg';
import Upcommingthree from '../assets/upcomming-three.jpg';
import Upcommingfour from '../assets/upcomming-four.jpg';

const Upcoming = () => {
  return (
    <Box mt={20}>
      <Container maxWidth="container.lg">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading alignItems="center" as="h3" size="lg">
              Upcoming online events
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal.500">
              Explore more events
            </Link>
          </Box>
        </Box>
        <Grid
          templateColumns={{ 
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          {/* grid box */}
          <Box width="100%" align="left">
            <Box position="relative">
              <Image
                position="relative"
                w="100%"
                src={Upcommingone}
                alt="brand"
              />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  data-swarm-icon="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 9:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontweights="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
          </Box>

          {/* grid box */}

          <Box width="100%" align="left">
            <Box position="relative">
              <Image
                position="relative"
                w="100%"
                src={Upcommingtwo}
                alt="brand"
              />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  data-swarm-icon="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 9:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontweights="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
          </Box>

          {/* grid box */}
          <Box width="100%" align="left">
            <Box position="relative">
              <Image
                position="relative"
                w="100%"
                src={Upcommingthree}
                alt="brand"
              />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  data-swarm-icon="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 9:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontweights="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
          </Box>

          {/* grid box */}
          <Box width="100%" align="left">
            <Box position="relative">
              <Image
                position="relative"
                w="100%"
                src={Upcommingfour}
                alt="brand"
              />
              <Box
                position="absolute"
                d="flex"
                alignItems="center"
                borderRadius="5px"
                top="0"
                background="#ffffff"
                fontSize="sm"
                m="2"
                px="3"
                py="1"
              >
                <svg
                  data-swarm-icon="true"
                  width="18"
                  height="18"
                  fill="#757575"
                  ml="4"
                  d="block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                </svg>
                <Box ml="2" color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Box>
            </Box>
            <Box mt="3" color="#877457" fontWeight="semibold">
              Sat, Aug 14 @ 9:45 PM NPT
            </Box>
            <Heading
              alignItems="center"
              as="h6"
              mt="1"
              fontweights="black"
              size="sm"
            >
              Upcoming online events
            </Heading>
            <Box my="3" size="xs">
              Remote-Working Group
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Upcoming;