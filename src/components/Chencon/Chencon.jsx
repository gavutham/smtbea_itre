import { Text } from "@mantine/core";
import "./Chencon.scss";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

const Chencon = () => {
  return (
    <motion.section
      className="fees"
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container">
        <div className="title">Registration & Fee Details</div>
        <div className="desc">
          Registration fee covers conference kit, lunch, refreshment and
          certificate
        </div>
        <div className="list">
          <Text>
            Students : <br />
            <span>Rs. 1200/-</span>
          </Text>
          <Text>
            Faculty/Staff : <br />
            <span>Rs. 1500/-</span>
          </Text>
          <Text>
            Industrial Person : <br />
            <span>Rs. 3000/-</span>
          </Text>
          <Text>
            Foreign Participants : <br />
            <span>USD 120</span>
          </Text>
        </div>
      </div>
      <div className="container">
        <div className="title">Important Dates</div>
        <div className="list">
          <Text>
            Abstract submission : <br />
            <span>10.06.2024</span>
          </Text>
          <Text>
            Acceptance notification : <br />
            <span>15.06.2024</span>
          </Text>
          <Text>
            Registration deadline : <br />
            <span>17.06.2024</span>
          </Text>
        </div>
      </div>
      <div className="container">
        <div className="title">Accomodation Fees</div>
        <div className="list">
          <Text>
          Single Room with Attach Bath & A/C : <br />
            <span>Rs. 2000 + 240(GST), Rs. 2240 (Total)</span>
          </Text>
          <Text>
          Double Room with Attach Bath & A/C : <br />
            <span>Rs. 2200 + 264(GST), Rs. 2464 (Total)</span>
          </Text>
          <Text>
          Non A/C Sharing without Attach Bath : <br />
            <span>Rs. 250 + 30(GST), Rs. 280 (Total)</span>
          </Text>
        </div>
      </div>
    </motion.section>
  );
};

export default Chencon;
