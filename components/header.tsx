import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <Stack direction="row" justify="space-between" align="center">
      <Stack spacing={0.5}>
        <Text color="#1E1E1E" fontSize="1.8rem" fontWeight="bold">
          Marana, Jazen
        </Text>
        <Text opacity={0.6} fontSize=".8rem">
          Saturday, Dec 09 2023
        </Text>
      </Stack>
      <InputGroup w="20rem">
        <InputLeftAddon bg="rgba(100, 0, 0, .05)">
          <IoMdSearch />
        </InputLeftAddon>
        <Input
          placeholder="Search for food..."
          fontSize=".9rem"
          _focus={{}}
          _focusVisible={{ border: "2px solid", borderColor: "#D43139" }}
        />
      </InputGroup>
    </Stack>
  );
}
