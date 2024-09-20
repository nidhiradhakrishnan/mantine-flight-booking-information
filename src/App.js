import { MantineProvider, Text } from "@mantine/core";
import Header from "./components/header/Header";
import BookingInfo from "./components/bookingInformation/BookingInfo";
import FlightDetails from "./components/flightDetails/FlightDetails";
import FairInfo from "./components/fairInformation/FairInfo";
import PassengerInfo from "./components/passengerInformation/PassengerInfo";
import AncillaryInfo from "./components/ancillaryInformation/AncillaryInfo";
import AgentInfo from "./components/agentInformation/AgentInfo";
import AgentNotes from "./components/agentNotes/AgentNotes";

function App() {
  return (
    <MantineProvider>
        <Header/> 
      <BookingInfo/> 
      <FlightDetails/>
      <FairInfo/>
      <PassengerInfo/>
       <AncillaryInfo/>  
            <AgentInfo/>
      <AgentNotes/>
    </MantineProvider>
  );
}

export default App;
