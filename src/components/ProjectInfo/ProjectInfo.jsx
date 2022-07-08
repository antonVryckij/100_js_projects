import { Flex, Heading, Icon, HStack } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

import "./ProjectInfo.scss";

export const ProjectInfo = () => {
  return (
    <Flex className="projectInfo">
      <HStack>
        <Heading
          className="projectInfo__title"
          as="h3"
          size="lg"
          lineHeight="1.5"
        >
          Project info
        </Heading>
        {/* <Icon as={BsInfoCircle} w={7} h={7} color='gray.400'/> */}
      </HStack>
    </Flex>
  );
};
