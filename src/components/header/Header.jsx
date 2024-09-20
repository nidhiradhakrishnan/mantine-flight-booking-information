import { Container, Flex, Image, Text ,Burger,Drawer,Group} from "@mantine/core";
import logo from "../images/logo.png";
import activity from "../images/activity.svg";
import home from "../images/home.svg";
import mytrips from "../images/mytrips.svg";
import { IconBell } from "@tabler/icons-react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconWallet } from "@tabler/icons-react";
import profile from "../images/profile.png";
import { Progress } from '@mantine/core';
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return ( 
    <><>
    <Container fluid mx={{ lg: 100, md: 50, sm: 20, xs: 10 }}>
      <Flex justify="space-between" align="center" my={5}>
        <Image src={logo} width={150} height={60} />

        <Flex gap={{ xs: 10, sm: 20, md: 40, lg: 70 }}  my={18} sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: { display: 'none' } 
        })}>
          <Flex gap={10}>
            <Image src={home} width={18} height={19} />
            <Text c={"#757575"} fz={{ xs: 10, sm: 10, md:18, lg:18 }} >Home</Text>
          </Flex>
          <Flex gap={10}>
            <IconLayoutDashboard stroke={1} color="#757575" />
            <Text c={"#757575"} fz={{ xs: 10, sm: 10, md:18, lg:18 }}>Dashboard</Text>
          </Flex>
          <Flex gap={10}>
            <Image src={mytrips} width={18} height={19} />
            <Text c={"#757575"} fz={{ xs: 10, sm: 10, md:18, lg:18 }}>My Trips & Expenses</Text>
          </Flex>
          <Flex gap={10}>
            <Image src={activity} width={18} height={18} />
            <Text c={"#757575"} fz={{ xs: 10, sm: 10, md:18, lg:18 }}>Activity</Text>
          </Flex>
          <Flex gap={10}>
            <IconWallet stroke={1} color="#757575" />
            <Text c={"#757575"} fz={{ xs: 10, sm: 10, md:18, lg:18 }}>AED 15,000</Text>
          </Flex>
          <IconBell stroke={1} color="#757575" width={38} height={29} />
          <Image src={profile} height={30} width={30} />
        </Flex>

        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          sx={(theme) => ({
            [theme.fn.largerThan('sm')]: { display: 'none' } 
          })}
        />

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Menu"
          padding="xl"
          size="md"
        >
          <Group direction="column" spacing="lg">
            <Flex gap={10}>
              <Image src={home} width={18} height={19} />
              <Text c={"#757575"} fz={18}>Home</Text>
            </Flex>
            <Flex gap={10}>
              <IconLayoutDashboard stroke={1} color="#757575" />
              <Text c={"#757575"} fz={18}>Dashboard</Text>
            </Flex>
            <Flex gap={10}>
              <Image src={mytrips} width={18} height={19} />
              <Text c={"#757575"} fz={18}>My Trips & Expenses</Text>
            </Flex>
            <Flex gap={10}>
              <Image src={activity} width={18} height={18} />
              <Text c={"#757575"} fz={18}>Activity</Text>
            </Flex>
            <Flex gap={10}>
              <IconWallet stroke={1} color="#757575" />
              <Text c={"#757575"} fz={18}>AED 15,000</Text>
            </Flex>
            <IconBell stroke={1} color="#757575" width={38} height={29} />
            <Image src={profile} height={30} width={30} />
          </Group>
        </Drawer>
      </Flex>
    </Container>
    
    
    
    
    <hr color="#F1F1F1"></hr><Flex justify={'center'}>
        <Text my={5} fw={500} color="#243364" fz={18}>Flight Booking Information</Text>
      </Flex></><Progress color="teal" radius="xs" size="xs" value={100} /></>

  );
};
export default Header;
