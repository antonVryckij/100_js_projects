import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { customTheme } from "./utils/customTheme";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import ProjectInfo from "./components/ProjectInfo";
import "./styles/styles.scss";

const theme = extendTheme(customTheme);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh">
        <SideBar />
        <MainContainer />
        <ProjectInfo />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
