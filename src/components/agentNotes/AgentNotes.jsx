import { Container, Flex, Text } from "@mantine/core";

const AgentNotes = () => {
  return (
    <Container fluid bg={"#EDF1F4"} py={10}>
      <Flex
        bg={"white"}
        direction={"column"}
        mx={{ base: 10, sm: 50, md: 100 }}  
        style={{ borderRadius: "10px" }}
      >
        <Text my={8} mx={10} fw={700} color="#004876">
          AGENT NOTES
        </Text>
        <hr width="100%" color="#ECEEF5" />
        <Text mx={10} color="#757575" fz={{ base: 10, sm: 12 }}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Flex>

      <Flex justify={"space-between"} mx={{ base: 10, sm: 50, md: 100 }} my={30} direction={{ base: 'column', sm: 'row' }}>
        <Text color="#959698" fz={{ base: 12, sm: 14 }} mb={{ base: 10, sm: 0 }}>
          2024 © CBT | Powered by gewaninfotech.com
        </Text>
        <Text color="#959698" fz={{ base: 12, sm: 14 }}>
          Terms of Use . Privacy Policy . About . Support
        </Text>
      </Flex>
    </Container>
  );
};

export default AgentNotes;
