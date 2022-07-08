import { Flex, Heading, Box, Container } from "@chakra-ui/react";
import { projects } from "../../utils/_mocks";
import "./MainContainer.scss";

export const MainContainer = () => {
	return (
		<Flex className="mainContainer">
			<Heading className="mainContainer__title" as='h2'>100 JS PROJECTS</Heading>
			<Box className="projectList">
				{projects.map((project) => (
					<Box className="projectList__item" boxShadow="lg">
						{project.name}
					</Box>
				))}
			</Box>
		</Flex>
	);
};
