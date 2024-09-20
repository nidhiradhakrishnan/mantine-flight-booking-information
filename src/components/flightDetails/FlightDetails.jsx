import { Text, Flex, Image, Container } from "@mantine/core";
import qatar from "../images/qatar.png";
import duration from "../images/duration.svg";
import { Grid } from "@mantine/core";

const FlightDetails = () => {
  return (
    <Container fluid bg={"#EDF1F4"} py={10}>
      <Flex
        bg={"white"}
        direction={"column"}
        mx={{ base: 10, sm: 50, md: 100 }}
        style={{ borderRadius: "10px" }}
      >
        <Text my={8} fw={700} color="#004876">
          FLIGHT DETAILS
        </Text>
        <hr width="100%" color="#ECEEF5" />

        <Flex
          justify="space-between"
          align="start"
          wrap="wrap"
          gap="xl"
          mx={10}
        >
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Image src={qatar} width={72} />
            <Text fz={12} weight={400} color="#959698">
              BY-2445
            </Text>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} weight={600} color="#1CC653">
              Departure
            </Text>
            <Text fz={12} weight={500} color="#243364">
              08:35 AM
            </Text>
            <Text fz={12} weight={500} color="#757575">
              Sun, 20 Aug
            </Text>
            <Text fz={12} weight={400} color="#757575">
              Terminal 3
            </Text>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} align="center" weight={400} color="#757575">
              Duration <span style={{ color: "#243364" }}>1h 45m</span>
            </Text>
            <Image 
  src={duration} 
  style={{ 
    width: "100%", 
    mWidth: "616px", 
    height: "auto" 
  }} 
/>
            <Flex justify={"space-between"}>
              <Text fz={12} color="#757575">
                AUH
              </Text>
              <Text fz={12} weight={400} color="#757575">
                Boeing 777-300
              </Text>
              <Text fz={12} color="#757575">
                CAI
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} weight={400} color="#757575">
              Arrival
            </Text>
            <Text fz={12} weight={500} color="#243364">
              10:15 AM
            </Text>
            <Text fz={12} weight={500} color="#243364">
              Sun, 20 Aug
            </Text>
            <Text fz={12} weight={400} color="#757575">
              Terminal 2
            </Text>
          </Flex>
        </Flex>

        <Text fz={12} color="#ECEEF5" my={10} fw={500} align="center">
          <span
            style={{
              color: "#757575",
              backgroundColor: "#ECEEF5",
              borderRadius: "8px",
              padding: "5px 5px 5px 5px",
            }}
          >
            {" "}
            Layover at Cairo International Airport | 02 Hrs 45 Mins{" "}
          </span>
        </Text>

        <Flex
          justify="space-between"
          align="start"
          wrap="wrap"
          gap="xl"
          mx={10}
        >
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Image src={qatar} width={72} />
            <Text fz={12} weight={400} color="#959698">
              BY-2056
            </Text>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} weight={600} color="#1CC653">
              Departure
            </Text>
            <Text fz={12} weight={500} color="#243364">
              01:00 PM
            </Text>
            <Text fz={12} weight={500} color="#757575">
              Sun, 20 Aug
            </Text>
            <Text fz={12} weight={400} color="#757575">
              Terminal 2
            </Text>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} align="center" weight={400} color="#757575">
              Duration <span style={{ color: "#243364" }}>2h 5m</span>
            </Text>
            <Image src={duration} style={{ width: "100%", height: "auto" }} />
            <Flex justify={"space-between"}>
              <Text fz={12} color="#757575">
                CAI
              </Text>
              <Text fz={12} weight={400} color="#757575">
                Boeing 778-200
              </Text>
              <Text fz={12} color="#757575">
                AUH
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" sx={{ minWidth: "150px", flex: 1 }}>
            <Text fz={12} weight={400} color="#757575">
              Arrival
            </Text>
            <Text fz={12} weight={500} color="#243364">
              03:05 PM
            </Text>
            <Text fz={12} weight={500} color="#243364">
              Sun, 20 Aug
            </Text>
            <Text fz={12} weight={400} color="#757575">
              Terminal 3
            </Text>
          </Flex>
        </Flex>

        <hr width="100%" color="#ECEEF5" />
        <Grid gutter="xl" mx={10} my={10}>
          {/* First row - 6 columns */}
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Flight Name
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Qatar Airways
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Flight Number
              </Text>
              <Text fz={12} weight={500} color="#243364">
                BY 2445
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Class
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Economy
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                RDB
              </Text>
              <Text fz={12} weight={500} color="#243364">
                B
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Airline
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Airline
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Marketing Airline
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Airline
              </Text>
            </Flex>
          </Grid.Col>
          {/* Second row - 3 columns */}
          <Grid.Col xs={12} sm={3} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Operating Airline
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Airline
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={3} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Validating Airline
              </Text>
              <Text fz={12} weight={500} color="#243364">
                Operating Airline
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={3} md={2}>
            <Flex direction="column">
              <Text fz={12} weight={400} color="#757575">
                Equipment Number
              </Text>
              <Text fz={12} weight={500} color="#243364">
                14
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
};

export default FlightDetails;
