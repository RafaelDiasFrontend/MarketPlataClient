import Layout from "@/components/Layout";
import { Box, Heading } from "@chakra-ui/react";
import ThemeToggleButton from "@/components/molecules/theme-toggle-button";

export default function Home() {
  return (
    <Layout>
      <Box>
        <Heading>Teste</Heading>
        <ThemeToggleButton />
      </Box>
    </Layout>
  );
}
