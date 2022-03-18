import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from './components/Banner';
import { LogoHeader } from './components/LogoHeader';


const Home: NextPage = () => {
  return (
    <Box w="100vw">
      <LogoHeader />
      <Banner />
      <Container maxW={1160} w="100%" h="100%">
        <Box w="100%" mt={40}>
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='100' bg='blue.500' />
            <GridItem w='100%' h='100' bg='blue.500' />
            <GridItem w='100%' h='100' bg='blue.500' />
            <GridItem w='100%' h='100' bg='blue.500' />
            <GridItem w='100%' h='100' bg='blue.500' />
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
