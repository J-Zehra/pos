import Main from "@/components/main";
import Order from "@/components/order";
import SideBar from "@/components/sideBar";
import { Stack } from "@chakra-ui/react";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

export default function Home() {
  return (
    <Stack h="100vh" w="100%" direction="row" spacing={0}>
      <SideBar />
      <Main />
      <Order />
    </Stack>
  );
}
