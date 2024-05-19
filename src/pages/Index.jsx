import React, { useState } from "react";
import { Container, VStack, HStack, Text, Textarea, Button, Box, IconButton, useToast, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaRocket, FaCode, FaFileAlt, FaCogs, FaUsers, FaShieldAlt, FaBug, FaSyncAlt } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleGenerateCode = () => {
    // Placeholder for code generation logic
    setOutput(`Generated code for: ${input}`);
    toast({
      title: "Code Generated",
      description: "Your code has been generated successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDeploy = () => {
    // Placeholder for deployment logic
    toast({
      title: "Deployment Started",
      description: "Your application is being deployed.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleGenerateDocs = () => {
    // Placeholder for documentation generation logic
    toast({
      title: "Documentation Generated",
      description: "Your documentation has been generated successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          AI-Powered Application Development Platform
        </Text>
        <Textarea placeholder="Describe your application..." value={input} onChange={(e) => setInput(e.target.value)} size="lg" />
        <Link as={RouterLink} to="/instructions" color="teal.500" fontWeight="bold" mt={4}>
          Instructions for App Builder
        </Link>
        <HStack spacing={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" onClick={handleGenerateCode}>
            Generate Code
          </Button>
          <Button leftIcon={<FaRocket />} colorScheme="blue" onClick={handleDeploy}>
            Deploy
          </Button>
          <Button leftIcon={<FaFileAlt />} colorScheme="green" onClick={handleGenerateDocs}>
            Generate Docs
          </Button>
        </HStack>
        <Box width="100%" padding={4} borderWidth={1} borderRadius="md" mt={4}>
          <Text fontSize="xl" fontWeight="bold">
            Output
          </Text>
          <Text>{output}</Text>
        </Box>
        <HStack spacing={4} mt={8}>
          <IconButton aria-label="Customization" icon={<FaCogs />} size="lg" />
          <IconButton aria-label="Security" icon={<FaShieldAlt />} size="lg" />
          <IconButton aria-label="Collaboration" icon={<FaUsers />} size="lg" />
          <IconButton aria-label="Error Handling" icon={<FaBug />} size="lg" />
          <IconButton aria-label="CI/CD" icon={<FaSyncAlt />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
