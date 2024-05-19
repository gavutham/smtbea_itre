import { Button, Text } from "@mantine/core";
import "./Webinar.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const Webinar = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="webinar"
      variants={fadeIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Text className="title">Rules & Regulations</Text>
      <div className="top">
        <div className="left">
          <Text className="info">
            The authors are requested to mail their abstracts in Word format for
            oral presentations to smtbea2024@gmail.com. The abstract is limited
            to one page, including figures, tables and references. The text
            should be in Times New Roman, with sizes 14 for the title and 12 for
            the rest and 1.5 line spcaing. The selected abstracts will be
            allowed for ORAL presentation. Best paper awards will be given.
            <Button
              variant="white"
              rightIcon={<BsBoxArrowInUpRight stroke="4" />}
              onClick={() => window.open("https://forms.gle/iJGFoJToK9hRGaaGA")}
            >
              Registration Link
            </Button>
          </Text>
        </div>
      </div>
      <div className="bottom" id="register">
        <Text className="note">
          <span>Note: </span>
          Indian Participants - Strictly offline
        </Text>
      </div>
    </motion.div>
  );
};

export default Webinar;
