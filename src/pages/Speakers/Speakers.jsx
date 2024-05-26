import { Flex, Text } from "@mantine/core";
import MemberCard from "../../components/MemberCard/MemberCard";
import team from "../../utils/team";
import "./Speakers.scss";

const Speakers = () => {
  return (
    <Flex className="team">
      <Text className="title">Speakers of Event</Text>
      <div className="container">
        {team.map((mem) => (
          <MemberCard key={mem.name} member={mem} />
        ))}
      </div>
    </Flex>
  );
};

export default Speakers;