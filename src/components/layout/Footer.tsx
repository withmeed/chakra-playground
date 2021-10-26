import { Flex } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
{/*      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://sznm.dev" isExternal>
          sznm.dev
        </Link>
      </Text>


*/}
      <ThemeToggle />
    </Flex>
  );
};

export default Footer;
