import { Box, Wrap } from "@chakra-ui/react";
import Menu from "./menu";
import { menu } from "@/dummy/menu";

export default function MenuList() {
  const chickenMenu = menu.chickenjoy;

  return (
    <Box paddingTop="1.5rem">
      <Wrap spacing="1.2rem">
        {chickenMenu.map((item) => {
          return <Menu key={item.name} item={item} />;
        })}
      </Wrap>
    </Box>
  );
}
