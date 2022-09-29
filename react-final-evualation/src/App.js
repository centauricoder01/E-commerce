import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
