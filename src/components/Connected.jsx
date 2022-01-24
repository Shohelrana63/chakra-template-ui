import { Box, Image, Container, Heading } from '@chakra-ui/react';
import deviceLeft from '../assets/device-left.webp';
import meetupLogo from '../assets/meetup-logo.svg';
import deviceRight from '../assets/device-right.webp';

import androidApp from '../assets/androidApp.jpg';
import iosApp from '../assets/iosApp.jpg';

function Connected() {
  return (
    <Box my="20">
      <Container maxWidth="container.lg">
        <Box
          display="flex"
          pos="relative"
          justify-content="space-between"
          alignItems="center"
        >
          <Box
            display={{
              lg: 'block',
            }}
          >
            <Image w="260px" src={deviceLeft}></Image>
          </Box>
          <Box pos="relative" mx="auto" align="center">
            <Image w="80px" left="0" src={meetupLogo}></Image>
            <Heading as="h6" size="md" my="7">
              Stay connected. <br /> Download the app.
            </Heading>
            <Box d="flex">
              <Image w="180px" p="5" src={androidApp}></Image>
              <Image w="180px" p="5" src={iosApp}></Image>
            </Box>
          </Box>
          <Box
            display={{
              lg: 'block',
            }}
          >
            <Image w="260px" right="0" src={deviceRight}></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Connected;