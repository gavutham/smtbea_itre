import { Button, Text } from "@mantine/core";
import "./About.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <section className="first">
        <motion.div className="cont" variants={textVariant(0.1)}>
          <Text className="title">About the Conference and Workshop</Text>
          <Text className="desc">
            3rd International Conference on Sustainable Materials and
            Technologies for Bio and Energy Applications focuses on the
            advancements in the research areas of materials and sensors for Bio
            and Energy applications. As IoT technology advances, requirement for
            modern and new sensors with ultra-sensitivity, high stability and
            selectivity has emerged. Major theme of the conference is to explore
            biocompatible materials, energy materials, energy storage,
            biosensors, and electrochemical sensors. There will be
            Plenary/Keynote Lectures, Tutorials, and Invited Talks specially
            formulated by the Technical Program Committee to ensure an
            intellectually benefitting experience for the participants. As part
            of this conference, the Indo- Taiwan workshop on Renewable Energy,
            that aims to serve as a bridge between the scientists of India and
            Taiwan in the field of renewable energy will be organized.
            <Button
              variant="white"
              rightIcon={<BsBoxArrowInUpRight stroke="4" />}
              onClick={() => navigate("/event")}
            >
              Know more
            </Button>
          </Text>
        </motion.div>
      </section>
      <motion.section
        className="second"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Text className="title">About SSN Institutions</Text>
        <Text className="desc">
          SSN Institutions, founded by Dr. Shiv Nadar, Chairman, HCL
          Technologies, stands out as a premier center of higher learning with a
          mission of pursuing excellence in education and research. The
          institutions, with their diverse and dynamic community of students,
          offer a distinctive combination of some of the finest graduate,
          undergraduate and research programs. SSN has been recognized for its
          efforts in excellence in education by the Ministry of Human Resources
          & Development, GoI under the National Institutional Ranking Framework
          2017. It is a source of great pride to all of us that we have been
          ranked 5th among all private engineering colleges and ranked 27th
          among all engineering colleges and 80th among all educational
          institutions in the country. Recently the institution is awarded Grade
          A+ by NAAC and autonomous status by UGC.
        </Text>
      </motion.section>
      <motion.section
        className="third"
        variants={fadeIn("right", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Text className="title">About NCU</Text>
        <Text className="desc">
          National Central University (NCU) is a university with long-standing
          traditions in Taiwan. Founded in Nanjing in 1915, NCU was the leading
          academic center in Southeast China. The phrase “North the Peking
          University; South the Central University” at that time revealed the
          significance of NCU. NCU was later re-established in Taiwan in 1962
          and started its development based on Geophysics. After our endeavor
          over 50 years, NCU has expanded its school size and had great
          achievements both in academic and research development. NCU is now one
          of the leading universities in Taiwan. We have approximately 12,000
          students, and there are 8 colleges, 26 departments, 19 graduate
          institutes, 6 university-level research centers and one united
          research center, the Office of Teaching Centers (OTC), and the
          affiliated Zhongli Senior High School.
        </Text>
      </motion.section>
    </div>
  );
};

export default About;
