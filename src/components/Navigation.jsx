import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Link as={RouterLink} to="/" fontWeight="bold">
        Home
      </Link>
      <Link as={RouterLink} to="/instructions" fontWeight="bold">
        Instructions
      </Link>
    </HStack>
  );
};

export default Navigation;
