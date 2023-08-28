/* eslint-disable react/prop-types */
import { Card, Group, Text } from "@mantine/core";
import "./GoalCard.scss";

const GoalCard = ({ goal }) => {
  return (
    <Card shadow="sm" radius="md" className="goalCard">
      <Card.Section>
        <img
          className="image"
          src={goal.img}
          height={160}
          width={160}
          alt="goal-img"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} className="title">
          {goal.title}
        </Text>
      </Group>

      <Text className="desc">{goal.desc}</Text>
    </Card>
  );
};

export default GoalCard;
