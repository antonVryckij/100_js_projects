import { Flex, Heading, Avatar, Link, Icon } from "@chakra-ui/react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./SideBar.scss";
import flash from "../../img/flash.png";

export const SideBar = () => {
  return (
    <Flex className="side-bar">
      <Heading className="side-bar__title" as='h1' lineHeight="1.1">
        Anton "Flash" Vryckij
      </Heading>
      <Avatar
        name="Author"
        src={flash}
        size="2xl"
        showBorder={true}
        borderColor="yellow.300"
        bg="white"
      />
      <Link
        className="side-bar__email"
        href="mailto:antn.vryckij@gmail.com"
        color="blackAlpha.500"
      >
        antn.vryckij@gmail.com
      </Link>
      <Flex gap="10px" mt="30px">
        <Link href="https://www.instagram.com/antn.vryckij/" target="_blank">
          <Icon as={AiFillInstagram} w={10} h={10} />
        </Link>
        <Link href="https://github.com/antonVryckij" target="_blank">
          <Icon as={AiFillGithub} w={10} h={10} />
        </Link>
        <Link href="https://www.linkedin.com/in/anton-vryckij-41b0a7222/" target="_blank">
          <Icon as={AiFillLinkedin} w={10} h={10} />
        </Link>
      </Flex>
    </Flex>
  );
};
