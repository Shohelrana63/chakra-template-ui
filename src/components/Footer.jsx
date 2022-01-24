import {
    Box,
    Button,
    Container,
    Heading,
    Divider,
    List,
    ListItem,
    Link,
    Image,
  } from '@chakra-ui/react';
  import androidApp from '../assets/androidApp.jpg';
import iosApp from '../assets/iosApp.jpg';
import facebook from '../assets/socialIcon/facebook.png';
import twitter from '../assets/socialIcon/twitter.png';
import instagram from '../assets/socialIcon/instagram.png';
import linkedin from '../assets/socialIcon/linkedin.png';
import youtube from '../assets/socialIcon/youtube.png';
  
  const Footer = () => {
    return (
      <Box mt={5} color="#ffffff" background="#212121" py="10">
        <Container maxWidth="container.lg">
          <Box display="flex" alignItems="center">
            <Heading size="md">Create your own Meetup group.</Heading>
            <Button ml="4" colorScheme="white" variant="outline">
              Get Started
            </Button>
          </Box>
          <Divider my="10" />
          <Box
            display="flex"
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            alignItems="top"
          >
            <Box
              flex="1"
              mb={{
                sm: '10',
                md: '0',
                lg: '0',
                xl: '0',
                base: '4',
              }}
            >
              <Heading size="sm">Your Account</Heading>
              <List mt="4" spacing={2}>
                <ListItem>
                  <Link color="#A2A2A2">Sign up</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Log in</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Help</Link>
                </ListItem>
              </List>
            </Box>
  
            <Box
              flex="1"
              mb={{
                sm: '10',
                md: '0',
                lg: '0',
                xl: '0',
                base: '4',
              }}
            >
              <Heading size="sm">Discover</Heading>
              <List mt="4" spacing={2}>
                <ListItem>
                  <Link color="#A2A2A2">Groups</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Calendar</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Topics</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Cities</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Online Events</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Local Guides</Link>
                </ListItem>
              </List>
            </Box>
  
            <Box
              flex="1"
              mb={{
                sm: '10',
                md: '0',
                lg: '0',
                xl: '0',
                base: '4',
              }}
            >
              <Heading size="sm">Your Account</Heading>
              <List mt="4" spacing={2}>
                <ListItem>
                  <Link color="#A2A2A2">Sign up</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Log in</Link>
                </ListItem>
                <ListItem>
                  <Link color="#A2A2A2">Help</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
  
          {/* follow and app icons */}
          <Box
            mt="15"
            d="flex"
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            justifyContent="space-between"
            alignItems={{
              sm: 'left',
              md: 'center',
              lg: 'center',
              xl: 'center',
              base: 'left',
            }}
          >
            <Box d="flex" flexDirection="column">
              <Box mb="2">Follow us</Box>
              <Box d="flex">
                <Link mr="4">
                  <Image width="35px" src={facebook}/>
                </Link>
                <Link mr="4">
                  <Image width="35px" src={twitter}/>
                </Link>
                <Link mr="4">
                  <Image width="35px" src={instagram}/>
                </Link>
                <Link mr="4">
                  <Image width="35px" src={linkedin}/>
                </Link>
                <Link mr="4">
                  <Image width="35px" src={youtube}/>
                </Link>
              </Box>
            </Box>
            <Box
              d="flex"
              mt={{
                sm: '10',
                md: '0',
                lg: '0',
                xl: '0',
                base: '4',
              }}
            >
              <Image w="128px" h="38px" mr="6" src={androidApp}></Image>
              <Image w="128px" h="38px" src={iosApp}></Image>
            </Box>
          </Box>
  
          {/* bottom links */}
          <Box
            d="flex"
            mt="20"
            flexWrap={{
              sm: 'wrap',
              md: 'no-wrap',
              lg: 'no-wrap',
              xl: 'no-wrap',
              base: 'wrap',
            }}
          >
            <Link mr="5" fontSize="sm">
              © 2022 Shohelranabaig Meetup
            </Link>
            <Link mr="5" fontSize="sm">
              Terms of Service
            </Link>
            <Link mr="5" fontSize="sm">
              Privacy Policy
            </Link>
            <Link mr="5" fontSize="sm">
              Cookie Policy
            </Link>
            <Link mr="5" fontSize="sm">
              Help
            </Link>
          </Box>
        </Container>
      </Box>
    );
  }
  
  export default Footer;