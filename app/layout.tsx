"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <RecoilRoot>{children}</RecoilRoot>
        </ChakraProvider>
      </body>
    </html>
  );
}
