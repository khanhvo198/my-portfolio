'use client'
import { Box, Container, useColorModeValue } from "@chakra-ui/react";



export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}

      >
        Hello worlds
      </Box>
    </Container>
  );
}
