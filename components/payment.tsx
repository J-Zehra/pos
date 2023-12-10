import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Order from "./order";

export default function Payment({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer size="lg" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0}>
          <Stack h="100%" direction="row">
            <Box flex={1}>
              <Order />
            </Box>
            <Stack flex={1}></Stack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
