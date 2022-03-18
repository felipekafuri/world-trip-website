import { Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";



export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex backgroundImage="../../assets/banner.png" height={320} mx="auto" justify="space-around" width="100%">
      <Flex
        maxWidth={1480}
        mt="4"
        px="6"
        direction="column"
        justify="center"
      >
        <Heading fontWeight="bold" fontSize={["2xl", "3xl"]} lineHeight="m" color="gray.50">
          5 Continentes, <br />infinitas possibilidades.
        </Heading>
        <Text fontSize={["m", "lg"]} mt="4" color="gray.100">
          Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
        </Text>
      </Flex>
      {!!isWideVersion && (
        <Flex mt="12" boxSize="sm" overflowX={"clip"} alignContent="baseline">
          <Image src="../../assets/airplane.png" alt="airplane" objectFit="contain" />
        </Flex>
      )}
    </Flex>
  )
}