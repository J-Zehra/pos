"use client";

import { Center, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import OrderMode from "./orderMode";
import CartItems from "./cartItems";
import Total from "./total";

export default function Order() {
  return (
    <Stack p="1rem" h="100%" w="100%" flex={3} bg="#f8f8f8">
      <Stack spacing={2.5} h="100%">
        <Text
          fontSize="1.1rem"
          paddingBlock="1rem"
          color="#1E1E1E"
          fontWeight="semibold"
        >
          Order #10
        </Text>
        <OrderMode />
        <Stack h="100%" spacing={0}>
          <CartItems />
          <Total />
        </Stack>
      </Stack>
    </Stack>
  );
}
