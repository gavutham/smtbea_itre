/* eslint-disable react/no-unescaped-entities */
import { Text } from "@mantine/core";
import "./Home.scss";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";

const Home = () => {
  return (
    <div>
      <ParticlesBackground />
      <div className="home">
        <div className="landing">
          <Text className="motto">Learning Today, Leading Tomorrow</Text>
          <img src="/iete.jpg" height={150} width={150} className="logo" />
        </div>
        <div className="quote">
          <img src="/modi.png" alt="pm-modi-img" />
          <div className="quoteContent">
            <Text className="quoteText">
              "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF
              OUR NEW INDIA"
            </Text>
            <Text className="author">
              - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
