import { extendTheme, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: useColorModeValue("#fafafa", "#111111"),
      margin: 0,
      padding: 0,
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: "DIN",
    },
  },
  Drawer: {
    baseStyle: {
      fontFamily: "DIN",
    },
  },
  Text: {
    baseStyle: {
      fontFamily: "DIN",
    },
  },
  Button: {
    variants: {
      "black-btn": {
        color: "white",
        boxShadow: "4px 4px 5px #5450501b",
        bg: "black",
        border: "0px",
        textTransform: "uppercase",
        fontFamily: "DIN",
      },
      "white-btn": {
        color: "black",
        boxShadow: "4px 4px 5px #5450501b",
        bg: "white",
        border: "0px",
        textTransform: "uppercase",
        fontFamily: "DIN",
      },
    },
  },
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, colors });
export default theme;
