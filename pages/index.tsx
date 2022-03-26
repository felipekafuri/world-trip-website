import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from './components/Banner';
import { LogoHeader } from './components/LogoHeader';
import Image from 'next/image';
import nightlife from '../public/assets/nightlife.png'
import beach from '../public/assets/beach.png'
import modern from '../public/assets/modern.png'
import classic from '../public/assets/classic.png'
import more from '../public/assets/more.png'

const Home: NextPage = () => {
  return (
    <Box w="100vw">
      <LogoHeader />
      <Banner />
      <Container maxW={1160} w="100%" h="100%">
        <Box w="100%" mt={40}>
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='100'>
              <Image
                src={nightlife}
                alt="Nightlife"
              />
            </GridItem>

            <GridItem w='100%' h='100'>
              <Image
                src={beach}
                alt="Praia"
              />
            </GridItem>
            <GridItem w='100%' h='100'>
              <Image
                src={modern}
                alt="Moderno"
              />
            </GridItem>
            <GridItem w='100%' h='100'>
              <Image
                src={classic}
                alt="Clássico"
              />
            </GridItem>
            <GridItem w='100%' h='100'>
            <Image
              src={more}
              alt="Mais"
            />
          </GridItem>
        </Grid>
    </Box>
      </Container >
    </Box >
  )
}

export default Home
