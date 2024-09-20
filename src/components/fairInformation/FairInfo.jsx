import { Grid, Flex, Text, Container } from "@mantine/core";

const FairInfo = () => {
  return (
    <Container fluid bg={"#EDF1F4"} py={10}>
      <Flex
        bg={"white"}
        direction={"column"}
        mx={{ base: 10, sm: 50, md: 100 }}
        style={{ borderRadius: "10px" }}
      >
        <Text my={8} mx={10} fw={700} color="#004876">
          FARE INFORMATION
        </Text>
        <hr width="100%" color="#ECEEF5" />

        <Grid gutter="xl" mx={10} my={10}>
          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Marketing Fare
              </Text>
              <Text fz={12} weight={500} color="#243364">
                100 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Publish Fare
              </Text>
              <Text fz={12} weight={500} color="#243364">
                120 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Base Fare
              </Text>
              <Text fz={12} weight={500} color="#243364">
                1220 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Tax
              </Text>
              <Text fz={12} weight={500} color="#243364">
                18 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Markup
              </Text>
              <Text fz={12} weight={500} color="#243364">
                15 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Discount
              </Text>
              <Text fz={12} weight={500} color="#243364">
                20 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Service Fee
              </Text>
              <Text fz={12} weight={500} color="#243364">
                120 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Additional Gateway Fee
              </Text>
              <Text fz={12} weight={500} color="#243364">
                20 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Commission
              </Text>
              <Text fz={12} weight={500} color="#243364">
                30 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Supplier Commission
              </Text>
              <Text fz={12} weight={500} color="#243364">
                15 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Selling Price
              </Text>
              <Text fz={12} weight={500} color="#243364">
                80 AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Currency
              </Text>
              <Text fz={12} weight={500} color="#243364">
                AED
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Profile/LOSS
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Selling-Total Cost
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
};

export default FairInfo;
