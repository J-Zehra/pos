"use client";

import { cartItemState } from "@/states/cartItemState";
import { Center, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useRecoilState } from "recoil";

export default function Menu({ item }: { item: Chicken }) {
  const [cartItem, setCartItem] = useRecoilState(cartItemState);

  const handleAddToCart = () => {
    setCartItem((prev) => [
      ...prev,
      { cost: item.cost, image: item.image, name: item.name, quantity: 1 },
    ]);
  };

  return (
    <Stack
      borderRadius="1rem"
      w="10rem"
      h="13rem"
      justify="space-between"
      bg="#f8f8f8"
    >
      <Center flex={1} zIndex={5}>
        <Image src={item.image} alt="Menu" w="8rem" />
      </Center>
      <Stack p="1rem" align="center" justify="space-between" flex={1}>
        <Text fontWeight="semibold" fontSize=".7rem" color="#1E1E1E">
          {item.name}
        </Text>
        <Stack w="100%" direction="row" align="center" justify="space-between">
          <Text fontSize="1rem" opacity={0.9}>
            ₱{item.cost}
          </Text>
          {cartItem.find((i) => i.name === item.name) ? (
            <IconButton
              isDisabled
              aria-label="Add to cart"
              icon={<FaCheck />}
              onClick={handleAddToCart}
            />
          ) : (
            <IconButton
              aria-label="Add to cart"
              icon={<MdAddShoppingCart />}
              onClick={handleAddToCart}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
