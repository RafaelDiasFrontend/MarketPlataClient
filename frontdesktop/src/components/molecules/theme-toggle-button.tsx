import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsFillMoonFill, BsSunriseFill } from "react-icons/bs";
import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";

const ThemeToggleButton = ({ color = "#fafafa" }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Button
        rightIcon={useColorModeValue(<BsMoonStarsFill />, <BsSunriseFill />)}
        variant="ghost"
        bg={useColorModeValue("black", "white")}
        color={useColorModeValue("white", "black")}
        onClick={toggleColorMode}
      >
        {useColorModeValue("Escuro", "Branco")}
      </Button>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
