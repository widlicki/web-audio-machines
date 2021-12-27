import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import theme from "./Theme";

const StyleProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default StyleProvider;
