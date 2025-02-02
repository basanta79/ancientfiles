import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./ui/components/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
