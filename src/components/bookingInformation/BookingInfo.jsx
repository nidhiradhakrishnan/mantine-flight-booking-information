import {
  Card,
  Container,
  Flex,
  Image,
  Text,
  Button,
  Group,
  Grid,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconFileDownload } from "@tabler/icons-react";
import { IconPrinter } from "@tabler/icons-react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Table } from "@mantine/core";

const BookingInfo = () => {
  return (
    <Container bg={"#EDF1F4"} fluid>
      <Flex
        direction={{ base: "column", lg: "row" }}
        mx={{ base: 10, sm: 50, md: 100 }}
        gap={20}
        py={20}
      >
        <Flex direction={"column"} gap={10}>
          <Text
            style={{ border: " 1px solid #243363", borderRadius: "6px" }}
            color="white"
            py={15}
            px={15}
            bg={"#1A2546"}
          >
            BOOKING INFORMATION
          </Text>
          <Flex bg={"#FFFFFF"} direction={"column"} p={20} gap={20}>
            <Flex justify={"space-between"}>
              <Text fz={12} fw={600} color="#004876">
                BOOKING DETAILS
              </Text>
              <Text fz={12} fw={600} color="#1CC653">
                VIEW LOG
              </Text>
            </Flex>
            <Flex
              direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
              justify="space-between"
              align="start"
              wrap="wrap"
              gap="xl"
            >
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Booking ID
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  TKT6578990
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Booking Date & Time
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  18 Jun 2024, 16:00
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Issued Date & Time
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  19 Jun 2024, 03:00
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Status
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Confirmed
                </Text>
              </Flex>
            </Flex>

            <Flex
              direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
              justify="space-between"
              align="start"
              wrap="wrap"
              gap="xl"
            >
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Office ID
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  J5430
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Ticketing Timeline
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  14 Days
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Supplier
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Amadeus
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Supplier PNR
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  K6532RED7854
                </Text>
              </Flex>
            </Flex>

           <Flex
              direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
              justify="space-between"
              align="start"
              wrap="wrap"
              gap="xl"
            >
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Trip Type
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Corporate
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Journey Type
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Farm Trip
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  IATA Number
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  A3456
                </Text>
              </Flex>
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Payment Status
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Debited
                </Text>
              </Flex>
            </Flex>

            <Flex justify="space-between" align="start" wrap="nowrap" gap="xl">
              <Flex direction="column" sx={{ minWidth: "200px" }}>
                <Text fz={12} weight={400} color="#757575">
                  Payment Mode
                </Text>
                <Text fz={12} weight={500} color="#243364">
                  Credit Card
                </Text>
              </Flex>
            </Flex>
            <Flex
              px={10}
              py={10}
              justify={"space-between"}
              style={{
                background: "#EDF1F4 0% 0% no-repeat padding-box",
                border: "1px solid #DEE5EA",
                borderRadius: "2px",
              }}
            >
              <Text fz={13} color="#243364">
                Total Amount
              </Text>
              <Text fz={13} color="#243364">
                AED{" "}
                <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  5500.00
                </span>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          px={20}
          py={20}
          direction={"column"}
          style={{
            background:
              "transparent linear-gradient(136deg, #243364 0%, #131B33 50%, #233161 100%) 0% 0% no-repeat padding-box",
            borderRadius: "6px",
          }}
        >
          <Text fz={14} color="#FFFFFF">
            Abu Dhabi <IconArrowNarrowRight stroke={1} color="#1CC653" />
            New York, NY
          </Text>
          <Text fz={12} color="#FFFFFF">
            AIRLINE PNR <span style={{ color: "#1CC653" }}> 76GH7645</span>
          </Text>
          <Flex gap={10} my={5}>
            <IconMail height={23} width={23} stroke={1} color="#FFFFFF" />
            <Text color="#FFFFFF1C">|</Text>
            <IconFileDownload
              height={23}
              width={23}
              stroke={1}
              color="#FFFFFF"
            />
            <Text color="#FFFFFF1C">|</Text>

            <IconPrinter height={23} width={23} stroke={1} color="#FFFFFF" />
          </Flex>
          <Text color="#FFFFFF1C">
            --------------------------------------------------------
          </Text>
          <Flex direction={"column"} gap={10}>
            <Text
              fz={16}
              px={29}
              py={15}
              style={{
                background: "#FFFFFF17 0% 0% no-repeat padding-box",
                border: "1px solid #FFFFFF1C",
                borderRadius: "6px",
              }}
              color="#FFFFFF"
            >
              <Flex justify="space-between" align="center">
                <span>Issue Ticket</span>
                <IconArrowUpRight color="#FFFFFF" stroke={1} />
              </Flex>
            </Text>

            <Text
              fz={16}
              py={15}
              px={29}
              style={{
                background: "#FFFFFF17 0% 0% no-repeat padding-box",
                border: "1px solid #FFFFFF1C",
                borderRadius: "6px",
              }}
              color="#FFFFFF"
            >
              <Flex justify="space-between" align="center">
                <span>Cancel PNR</span>
                <IconArrowUpRight color="#FFFFFF" stroke={1} />
              </Flex>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
export default BookingInfo;
