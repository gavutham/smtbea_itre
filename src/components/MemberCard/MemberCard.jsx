/* eslint-disable react/prop-types */
import { Card, Group, Text } from "@mantine/core";
import "./MemberCard.scss";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

const MemberCard = ({ member }) => {

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="memberCard"
    >
      <motion.img
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="image"
        src={member.img}
        alt="profile-img"
      />

      <Group position="apart" mt="md" mb="xs">
        <Text size="lg" weight={400}>
          {member.name}
        </Text>
      </Group>


      {member.desc && (
        <Text size="sm" color="dimmed" weight="bold" mb={20}>
          {member.desc}
        </Text>
      )}
    </Card>
  );
};

export default MemberCard;
