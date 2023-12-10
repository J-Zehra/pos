import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import MenuList from "./menuList";

export default function MenuTabs() {
  return (
    <Box paddingTop="1.5rem">
      <Tabs colorScheme="red">
        <TabList gap="1.6rem" fontWeight="semibold">
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Chickenjoy
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Burgers
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Jolly Spaghetti
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Burger Steak
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Fries and Sides
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Desserts
          </Tab>
          <Tab opacity={0.7} fontWeight="semibold" fontSize=".8rem">
            Beverages
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#E2262F"
          borderRadius="1rem"
        />
        <TabPanels>
          <TabPanel>
            <MenuList />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
