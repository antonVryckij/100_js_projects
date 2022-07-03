import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import './styles.scss'

function App() {
  return (
    <ChakraProvider>
      <Flex h='100vh'>
        <SideBar />
        <Content />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
