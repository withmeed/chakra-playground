import { Box, Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Spacer />
      <Box>
        <Button
          as="a"
          href="https://google.com"
          target="_blank">
          Connect Wallet
        </Button>
      </Box>
    </Flex>
 );
};

export default Header;
