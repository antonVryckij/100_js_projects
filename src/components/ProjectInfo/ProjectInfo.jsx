import { useContext } from "react";
import { Flex, Heading, Icon, HStack } from "@chakra-ui/react";
import {CurrentProjectContext} from '../App'

import "./ProjectInfo.scss";

export const ProjectInfo = () => {
  const [context] = useContext(CurrentProjectContext)

  return (
    <Flex className="projectInfo">
      <HStack>
        <Heading
          className="projectInfo__title"
          as="h3"
          size="lg"
          lineHeight="1.5"
        >
          Project info - {context}
        </Heading>
      </HStack>
    </Flex>
  );
};
