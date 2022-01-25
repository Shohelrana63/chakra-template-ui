import { Box, Image } from '@chakra-ui/react';
import Banner from './components/Banner';
import Connected from './components/Connected';
import Footer from './components/Footer';
import Upcoming from './components/UpComing';
import Works from './components/Works';
import imgbg from "./assets/bg.svg";

function App() {
  return (
    <div>
      <Box position="absolute" left="0" top="0" right="0">
        <Banner/>
        <Works/>
        <Upcoming/>
        <Connected/>
        <Footer/>
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imgbg} />
      </Box>
    </div>  
  );
}

export default App;
