import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";

const Instructions = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Instructions for App Builder
        </Text>
        <Text>Develop an AI-powered app builder that not only facilitates the creation of applications through natural language input but also generates visual representations (sketches or schemas) at each step of the design process. This will help users better understand the proposed app's structure, flow, and functionality before any code is generated.</Text>
        <Text>
          Key Features:
          <ul>
            <li>Natural Language Processing (NLP)</li>
            <li>Visual Representation Generation</li>
            <li>Iterative Design Process</li>
            <li>Code Generation (Optional)</li>
            <li>Integration with AI Models</li>
          </ul>
        </Text>
        <Text>
          Additional Considerations:
          <ul>
            <li>User Interface</li>
            <li>Collaboration</li>
            <li>Version Control</li>
            <li>Customization</li>
          </ul>
        </Text>
      </VStack>
    </Container>
  );
};

export default Instructions;
