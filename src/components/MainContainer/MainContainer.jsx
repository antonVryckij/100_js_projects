import { useContext } from "react";
import { Flex, Heading, Box, Container, Link } from "@chakra-ui/react";
import { CurrentProjectContext } from "../App";
import { projects } from "../../utils/_mocks";
import "./MainContainer.scss";

export const MainContainer = () => {
  const [, setContext] = useContext(CurrentProjectContext);
  const onProjectClick = (projectName) => () => {
    setContext(projectName);
  };

  return (
    <Flex className="mainContainer">
      <Heading className="mainContainer__title" as="h2">
        100 JS PROJECTS
      </Heading>
      <Box className="projectList">
        {projects.map((project) => (
          <Link key={project.name} onClick={onProjectClick(project.name)}>
            <Box className="projectList__item" boxShadow="lg">
              {project.name}
            </Box>
          </Link>
        ))}
      </Box>
    </Flex>
  );
};
