import { cartItemState } from "@/states/cartItemState";
import { Box, Center, IconButton, Stack, Text, Image } from "@chakra-ui/react";
import { HiOutlineTrash } from "react-icons/hi";
import { useSetRecoilState } from "recoil";

export default function CartItem({ item }: { item: CartItem }) {
  const setCartItem = useSetRecoilState(cartItemState);

  const handleDeleteItem = () => {
    setCartItem((prev) => prev.filter((i) => i.name !== item.name));
  };

  return (
    <Stack w="100%" p=" .5rem 0">
      <Stack direction="row" spacing={2.5}>
        <Stack
          flex={5}
          direction="row"
          align="center"
          spacing={2}
          justify="space-between"
        >
          <Stack direction="row" align="center">
            <Center
              w="2.5rem"
              p=".2rem"
              h="2.5rem"
              bg="#F3F3F3"
              borderRadius="2rem"
            >
              <Image alt="item" src={item.image} />
            </Center>
            <Stack spacing={0}>
              <Text
                fontSize=".6rem"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                fontWeight="semibold"
              >
                {item.name}
              </Text>
              <Text fontSize=".7rem" opacity={0.7}>
                {item.cost}
              </Text>
            </Stack>
          </Stack>
          <Center
            bg="#F3F3F3"
            p="1rem"
            borderRadius=".5rem"
            w="2.5rem"
            h="2.5rem"
          >
            <Text fontSize=".9rem" color="#1E1E1E">
              {item.quantity}
            </Text>
          </Center>
        </Stack>
        <Center flex={1}>
          <Text fontWeight="semibold" fontSize=".9rem" color="#1E1E1E">
            {item.cost * item.quantity}
          </Text>
        </Center>
      </Stack>
      <Stack direction="row" align="center" w="100%" spacing={2}>
        <Center
          bg="#F3F3F3"
          borderRadius=".5rem"
          p=".5rem 1rem"
          w="100%"
          h="100%"
          justifyContent="flex-start"
          flex={5}
        >
          <Text fontSize=".7rem" fontWeight="light">
            Note
          </Text>
        </Center>
        <Center flex={1}>
          <IconButton
            aria-label="Remove"
            bg="transparent"
            color="#D43139"
            border="1px solid #D43139"
            _hover={{ bg: "rgba(200, 0, 0, .1)" }}
            onClick={handleDeleteItem}
            icon={<HiOutlineTrash />}
          />
        </Center>
      </Stack>
    </Stack>
  );
}
