import { createContext, useState } from "react";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { customTheme } from "../utils/customTheme";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import ProjectInfo from "./ProjectInfo";
import "../styles/styles.scss";

const theme = extendTheme(customTheme);

export const CurrentProjectContext = createContext();

function App() {
  const [context, setContext] = useState('Snake')
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh">
        <SideBar />
        <CurrentProjectContext.Provider value={[context, setContext]}>
          <MainContainer />
          <ProjectInfo />
        </CurrentProjectContext.Provider>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
