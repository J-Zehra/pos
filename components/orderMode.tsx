import { Center, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function OrderMode() {
  const [mode, setMode] = useState("Dine in");
  const orderMode = ["Dine in", "To go", "Deliver"];
  return (
    <Stack direction="row" align="center">
      {orderMode.map((item) => {
        return (
          <Center
            key={item}
            cursor="pointer"
            bg={mode === item ? "#D43139" : "transparent"}
            p=".3rem 1rem"
            color={mode === item ? "white" : "#D43139"}
            borderRadius=".5rem"
            border="2px solid rgba(200, 0, 0, .1)"
            _hover={{ bg: mode === item ? "" : "rgba(200, 0, 0, .05)" }}
            transition="all .2s ease"
            onClick={() => setMode(item)}
          >
            <Text fontSize=".7rem">{item}</Text>
          </Center>
        );
      })}
    </Stack>
  );
}
