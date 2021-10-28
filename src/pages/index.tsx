import { Box, Center, Heading, Link, UnorderedList, ListItem } from "@chakra-ui/react";

// import CTASection from "components/CTASection";
// import SomeImage from "components/SomeImage";
// import SomeText from "components/SomeText";

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="md">
        aikido ui playground
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link href="/landing">Landing page</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/new">Create Bounty</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-issued">Bounty Detail - Issued</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-issued-admin">Bounty Detail - Issued - Admin View</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-fulfilled">Bounty Detail - Fulfilled</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-fulfilled-admin">Bounty Detail - Fulfilled - Admin</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-accepted">Bounty Detail - Accepted</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-accepted-admin">Bounty Detail - Accepted - Admin</Link>
        </ListItem>
        <ListItem>
          <Link href="/bounty/detail-cancelled">Bounty Detail - Cancelled</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Home;
