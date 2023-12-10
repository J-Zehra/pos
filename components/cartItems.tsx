import { Center, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CartItem from "./cartItem";
import { useRecoilValue } from "recoil";
import { cartItemState } from "@/states/cartItemState";

export default function CartItems() {
  const cartItems = useRecoilValue(cartItemState);

  return (
    <Stack flex={5} paddingTop="1rem">
      <Stack
        direction="row"
        w="100%"
        align="center"
        spacing={2}
        paddingBottom="1rem"
      >
        <Stack flex={5} direction="row" justify="space-between" align="center">
          <Text fontSize=".7rem" opacity={0.75} fontWeight="semibold">
            Item
          </Text>
          <Text fontSize=".7rem" opacity={0.75} fontWeight="semibold">
            Quantity
          </Text>
        </Stack>
        <Center flex={1}>
          <Text fontSize=".7rem" opacity={0.75} fontWeight="semibold">
            Price
          </Text>
        </Center>
      </Stack>
      <Divider />
      <Stack spacing={0.5}>
        {cartItems.map((item) => {
          return <CartItem key={item.name} item={item} />;
        })}
      </Stack>
    </Stack>
  );
}
