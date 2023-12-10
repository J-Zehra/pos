import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import Header from "./header";
import MenuTabs from "./menuTabs";

export default function Main() {
  return (
    <Stack h="100%" w="100%" flex={10} bg="#F3F3F3" p="1.5rem">
      <Header />
      <MenuTabs />
    </Stack>
  );
}
