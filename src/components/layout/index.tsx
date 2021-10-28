import { Box, Center, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1024} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Flex as="main" direction="row" border="1px" mt={2} p={2} minH="75vh" boxShadow="xl" borderRadius={10}>
          {children}
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
