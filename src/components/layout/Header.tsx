import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

//import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box p="2">
        <Heading as="h1" size="md">
          <Link href="/">aikido</Link>
        </Heading>
      </Box>

      <Box marginLeft="auto">
        <Button
          marginTop={2}
          as="a"
          href="https://github.com/sozonome/nextarter-chakra/generate"
          target="_blank"
          size="lg"          
          _hover={{
            background: "teal.500",
            color: "white",
          }}

        >
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
