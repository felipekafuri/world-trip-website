import { Flex } from "@chakra-ui/react";
import Image from 'next/image';
import logo from '../../public/assets/logo.png';

export function LogoHeader() {
  return (
    <Flex 
      w="100%" 
      maxW={1440}
      maxH={100}
      mx="auto" 
      justifyContent="center"
      padding={5}
    >
      <Image
        src={logo}
        alt="Logo"
      />
    </Flex>
  )
}