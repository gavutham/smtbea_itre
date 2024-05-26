/* eslint-disable react/no-unescaped-entities */
import { Button, Flex, List, Text } from "@mantine/core";
import "./Home.scss";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { BiGift } from "react-icons/bi";
import { FOCUS_AREAS } from "../../utils/about";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="landing"
        >
          <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
            <Text className="motto" mb="lg">
              <Text>
                3rd International Conference on Sustainable Materials and
                Technologies for Bio and Energy Applications & 
              </Text>
              <Text>Indo- Taiwan Workshop on Renewable Energy</Text>
            </Text>
            <Text className="org">
              <div>
                <Text className="date">during, 1-3 of July 2024</Text>
                <Text fw={"bolder"} mb="sm">
                  Organized by
                </Text>
                <Text mb="md">
                  SSN Research Centre , Department of Physics , SSN
                  Institutions, Chennai – 603110, Tamilnadu, India Department of
                  Mechanical Engineering, National Central University , Zhongli
                  District, Taiwan
                </Text>
              </div>
              <div>
                <Text fw={"bolder"} mb="sm">
                  In association with
                </Text>
                <Text mb="md">
                  Elavenil Science Association & Indian Association for Crystal
                  Growth
                </Text>
              </div>
            </Text>
          </motion.span>
          <Flex className="img-cont">
            <motion.img
              variants={fadeIn("left", "tween", 0.2, 1)}
              src="/ssn.png"
              height={150}
              width={150}
              className="logo"
            />
            <motion.img
              variants={fadeIn("left", "tween", 0.2, 1)}
              src="/taiwan.png"
              height={150}
              width={150}
              className="logo"
            />
          </Flex>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="quote"
        >
          <motion.div variants={textVariant(0.2)} className="quoteContent">
            <Text className="quoteText">About the Conference and Workshop</Text>
            <Text className="author">
              3rd International Conference on Sustainable Materials and
              Technologies for Bio and Energy Applications focuses on the
              advancements in the research areas of materials and sensors for
              Bio and Energy applications. As IoT technology advances,
              requirement for modern and new sensors with ultra-sensitivity,
              high stability and selectivity has emerged. Major theme of the
              conference is to explore biocompatible materials, energy
              materials, energy storage, biosensors, and electrochemical
              sensors. There will be Plenary/Keynote Lectures, Tutorials, and
              Invited Talks specially formulated by the Technical Program
              Committee to ensure an intellectually benefitting experience for
              the participants. As part of this conference, the Indo- Taiwan
              workshop on Renewable Energy, that aims to serve as a bridge
              between the scientists of India and Taiwan in the field of
              renewable energy will be organized.
              <Button
                variant="white"
                rightIcon={<BsBoxArrowInUpRight stroke="4" />}
                onClick={() => navigate("/event")}
              >
                Know more
              </Button>
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          className="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className="contents" variants={textVariant2}>
            <Text className="heading">Focus Areas</Text>
            <List
              className="list"
              spacing="xs"
              size="sm"
              center
              icon={<BiGift />}
            >
              {FOCUS_AREAS.map((e) => (
                <List.Item className="items" key={e}>
                  <motion.span
                    variants={zoomIn(0.1, 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                  >
                    {e}
                  </motion.span>
                </List.Item>
              ))}
            </List>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
