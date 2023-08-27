import { Flex } from "@mantine/core";
import MemberCard from "../../components/MemberCard/MemberCard";
import team from "../../utils/team";
import "./Team.scss";

const Team = () => {
  return (
    <Flex className="team">
      {team.map((mem) => (
        <MemberCard key={mem.email} member={mem} />
      ))}
    </Flex>
  );
};

export default Team;
