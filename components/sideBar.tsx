"use client";

import {
  Box,
  Center,
  Divider,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";

export default function SideBar() {
  const [activeLink, setActiveLink] = useState<string>("Home");
  const navLinks = [
    { key: "key1", label: "Home", icon: <AiOutlineHome /> },
    { key: "key2", label: "Dashboard", icon: <MdOutlineDashboard /> },
    { key: "key3", label: "Statistics", icon: <FaRegChartBar /> },
  ];

  return (
    <Stack
      paddingBlock="1rem"
      h="100%"
      w="100%"
      justify="space-between"
      flex={1}
      bg="#f8f8f8"
    >
      <Stack>
        <Center>
          <Image src="/jabe.png" alt="Jabe" />
        </Center>
        <Box paddingInline=".5rem">
          <Divider borderColor="rgba(0, 0, 0, .1)" />
        </Box>
        <Stack paddingTop="1.5rem" paddingLeft=".5rem" spacing="1rem">
          {navLinks.map((link) => {
            return (
              <Center
                key={link.key}
                p=".5rem"
                onClick={() => setActiveLink(link.label)}
                bg={link.label === activeLink ? "#F3F3F3" : ""}
                borderLeftRadius=".5rem"
              >
                <IconButton
                  w="100%"
                  fontSize="1.2rem"
                  h="3.5rem"
                  _hover={{
                    bg:
                      link.label === activeLink
                        ? "#E2262F"
                        : "rgba(0, 0, 0, .04)",
                  }}
                  color={link.label === activeLink ? "white" : "#D43139"}
                  bg={link.label === activeLink ? "#D43139" : "transparent"}
                  aria-label="Icon"
                  borderRadius=".3rem"
                  icon={link.icon}
                />
              </Center>
            );
          })}
        </Stack>
      </Stack>
      <Stack paddingInline=".5rem">
        <Box>
          <Divider borderColor="rgba(0, 0, 0, .1)" />
        </Box>
        <IconButton
          aria-label="logout"
          fontSize="1.2rem"
          h="3.5rem"
          color="#D43139"
          bg="transparent"
          _hover={{
            bg: "rgba(0, 0, 0, .04)",
          }}
          icon={<MdOutlineLogout />}
        />
      </Stack>
    </Stack>
  );
}
