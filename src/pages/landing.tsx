import { VStack, Button, Heading, Text, Link, Center } from "@chakra-ui/react";

const Landing = () => {
  return (
      <Center border="1px" width="100%">
        <VStack>
        <Heading as="h3" size="sm">
          <Link href="/">aikido</Link>
        </Heading>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Do more, together.</Text> 
          <Button>Try it.</Button>
        </VStack>
      </Center>
  );
};

export default Landing;
