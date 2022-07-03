import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { customTheme } from "./utils/customTheme";
import "./styles/styles.scss";

const theme = extendTheme(customTheme)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh">
        <SideBar />
        <Content />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
