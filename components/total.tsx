import { cartItemState } from "@/states/cartItemState";
import { Button, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Payment from "./payment";

export default function Total() {
  const cartItem = useRecoilValue(cartItemState);

  const totalCost = cartItem.reduce((accumulator, item) => {
    return accumulator + (item.quantity === 2 ? item.cost * 2 : item.cost);
  }, 0);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Stack
      flex={1}
      spacing="1.5rem"
      borderTop="1px solid rgba(0, 0, 0, .1)"
      paddingTop="1rem"
    >
      <Stack>
        <Stack
          fontSize=".9rem"
          direction="row"
          align="center"
          justify="space-between"
        >
          <Text>Discount</Text>
          <Text>0</Text>
        </Stack>
        <Stack
          fontSize=".9rem"
          direction="row"
          align="center"
          justify="space-between"
        >
          <Text>Sub Total</Text>
          <Text>{totalCost}</Text>
        </Stack>
      </Stack>
      <Button
        bg="#D43139"
        fontSize=".9rem"
        color="white"
        onClick={onOpen}
        _hover={{ bg: "#E2262F" }}
      >
        Continue to Payment
      </Button>
      {/* {isOpen ? (
        <Payment isOpen={isOpen} onClose={onClose}/>
      ): null} */}
    </Stack>
  );
}
