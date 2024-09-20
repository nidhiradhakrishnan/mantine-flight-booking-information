import { Container, Flex, Grid, Table, Text, ScrollArea } from "@mantine/core";

const PassengerInfo = () => {
  const elements = [
    {
      name: "Mr. Sanoop M S ",
      dob: "21 Mar 1989",
      email: "mail@example.com",
      contact: "+91 00 0000 0000 00",
      type: "Adult",
      ticket: "654GH78897",
      number: "J7654329",
      issued: "Indian",
      expiry: "21 Nov 2029",
      nationality: "Indian",
      status: "ticketed",
    },
  ];

  const rows = elements.map((element) => (
    <tr key={`${element.name}${element.type}`}>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.name}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.dob}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.email}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.contact}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.type}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.ticket}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.number}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.issued}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.expiry}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.nationality}</td>
      <td style={{ color: "#757575", fontSize: "12px" }}>{element.status}</td>
    </tr>
  ));

  return (
    <Container fluid bg={"#EDF1F4"} py={10}>
      <Flex
        direction={"column"}
        bg={"white"}
        mx={{ base: 10, sm: 50, md: 100 }}
        style={{ borderRadius: "10px" }}
      >
        <Text my={8} mx={10} fw={700} color="#004876">
          PASSENGER INFORMATION
        </Text>
        <hr width="100%" color="#ECEEF5" />

        <ScrollArea style={{ width: "100%" }} type="never">
          <Table my={10} mx={10} withBorder>
            <thead style={{ backgroundColor: "#E6E6E6" }}>
              <tr>
                <th style={{ color: "#243364", fontSize: "12px" }}>NAME</th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  DATE OF BIRTH
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>EMAIL</th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  CONTACT NUMBER
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>TYPE</th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  E-TICKET NUMBER
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  PASSPORT NUMBER
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  PASSPORT ISSUED COUNTRY
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  PASSPORT EXPIRY
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>
                  NATIONALITY
                </th>
                <th style={{ color: "#243364", fontSize: "12px" }}>STATUS</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Flex>
    </Container>
  );
};

export default PassengerInfo;
