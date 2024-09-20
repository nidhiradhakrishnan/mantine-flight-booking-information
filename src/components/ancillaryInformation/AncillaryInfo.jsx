import { Container, Flex, Grid, Table, Text, ScrollArea } from "@mantine/core";

const AncillaryInfo = () => {
  const elements = [
    {
      segment: "Lorem",
      pax: "Adult",
      ticket: "86JK644ZA",
      ancillary: "Lorem Ipsum",
      details: "View More",
      check: "25 KG",
      cabin: "7 KG",
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.ticket}>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.segment}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.pax}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.ticket}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>
        {element.ancillary}
      </td>
      <td
        style={{
          color: "#1CC653",
          fontSize: "12px",
          textDecoration: "underline",
        }}
      >
        {element.details}
      </td>
    </tr>
  ));

  const rows2 = elements.map((element) => (
    <tr key={element.ticket}>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.segment}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.ticket}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.pax}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.check}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.cabin}</td>
    </tr>
  ));

  return (
    <Container fluid bg={"#EDF1F4"} py={20}>
      <ScrollArea style={{ maxWidth: "100%", height: "160px" }} type="never">
        <Grid
          gutter="lg"
          mx={{ base: 10, sm: 50, md: 100 }}
          style={{ minWidth: "1200px" }}
        >
          <Grid.Col span={6}>
            <Flex
              direction={"column"}
              bg={"white"}
              style={{ borderRadius: "10px" }}
            >
              <Text my={8} mx={10} fw={700} color="#004876">
                ANCILLARY INFORMATION{" "}
              </Text>
              <hr width="100%" color="#ECEEF5"></hr>
              <Table my={10} mx={10} style={{ width: "95%" }} withBorder>
                <thead style={{ backgroundColor: "#E6E6E6" }}>
                  <tr>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      SEGMENT
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      PAX TYPE
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      TICKET NUMBER
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      ANCILLARY
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      DETAILS
                    </th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </Flex>
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              direction={"column"}
              bg={"white"}
              style={{ borderRadius: "10px" }}
            >
              <Text my={8} mx={10} fw={700} color="#004876">
                BAGGAGE INFORMATION{" "}
              </Text>
              <hr width="100%" color="#ECEEF5"></hr>
              <Table my={10} mx={10} style={{ width: "95%" }} withBorder>
                <thead style={{ backgroundColor: "#E6E6E6" }}>
                  <tr>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      SEGMENT
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      PAX TYPE
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      TICKET NUMBER
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      CHECK-IN
                    </th>
                    <th style={{ color: "#243364", fontSize: "12px" }}>
                      CABIN
                    </th>
                  </tr>
                </thead>
                <tbody>{rows2}</tbody>
              </Table>
            </Flex>
          </Grid.Col>
        </Grid>
      </ScrollArea>
    </Container>
  );
};

export default AncillaryInfo;
