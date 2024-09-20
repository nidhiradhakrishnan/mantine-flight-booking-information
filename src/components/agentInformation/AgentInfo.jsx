import { Container, Text, Grid, Flex } from "@mantine/core";
const AgentInfo = () => {
  return (
    <Container fluid bg={"#EDF1F4"} py={10}>
      <Flex
        bg={"white"}
        direction={"column"}
        mx={{ base: 10, sm: 50, md: 100 }}  
        style={{ borderRadius: "10px" }}
      >
        <Text my={8} mx={10} fw={700} color="#004876">
          AGENT INFORMATION
        </Text>
        <hr width="100%" color="#ECEEF5"></hr>

        <Grid gutter="xl" mx={10} my={5}>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Name
              </Text>
              <Text fz={12}  weight={500} color="#243364">
                Lorem ipsum dolor
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Phone
              </Text>

              <Text fz={12}  weight={500} color="#243364">
                +91 00 0000 0000
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Email
              </Text>

              <Text fz={12}  weight={500} color="#243364">
                support@example.com
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Company
              </Text>

              <Text fz={12}  weight={500} color="#243364">
                Lorem Ipsum
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
};
export default AgentInfo;
