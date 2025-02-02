import { Box, Flex, Spacer, Heading, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButtons from "./AuthButtons.jsx";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Box bg="blue.500" px={4} py={3} color="white">
      <Flex alignItems="center">
        <Heading size="md">AncenFiles</Heading>
        <Spacer />
        <Flex gap={4}>
          <Link to="/">Inicio</Link>
          <Link to="/dashboard">Dashboard</Link>
          {isAuthenticated && <Avatar name={user.name} src={user.picture} size="sm" />}
          <AuthButtons />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
