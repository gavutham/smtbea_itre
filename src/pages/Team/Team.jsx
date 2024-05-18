import { Text } from "@mantine/core";
import "./Team.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Team = () => {
  return (
    <motion.section
      className="fifth"
      variants={fadeIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
    >
      <Text className="title">Organizing Committee</Text>
      <div className="cheif">
        <div className="wrapper">
          <div className="heading">Chief Patron</div>
          <div className="name">Dr. Shiv Nadar, HCL Technologies</div>
        </div>
        <div className="wrapper">
          <div className="heading">Patron</div>
          <div className="name">Dr. Kala Vijayakumar, President, SSN Inst.</div>
          <div className="name">Dr. V. E. Annamalai, Principal, SSN CE</div>
        </div>
        <div className="wrapper">
          <div className="heading">Co-Patron</div>
          <div className="name">Dr. S. Radha, Vice-Principal, SSN CE</div>
        </div>
        <div className="wrapper">
          <div className="heading">Chairman</div>
          <div className="name">Dr. P. Ramasamy, SSN Institutions, India</div>
          <div className="name">Mr. C. Balaji, SSN Research Centre</div>
        </div>
        <div className="wrapper">
          <div className="heading">Co-Conveners</div>
          <div className="name">Dr. A. Murugesan, Dept. Chemistry, SSNCE</div>
          <div className="name">Dr. Thi-Hoai-Thu Nguyen, NCU, Taiwan</div>
        </div>
      </div>
      <hr />
      <div className="others">
        <Text className="title">Organizing Members</Text>
        <div>
          <Text className="name">Dr. P. Balaji Bhargav</Text>
          <Text className="name">Dr. Nafis Ahmed</Text>
          <Text className="name">Dr. Muthu Senthil Pandian</Text>
          <Text className="name">Dr. K. Aravinth</Text>
          <Text className="name">Dr. R. Govindaraj</Text>
          <Text className="name">Dr. P. Karuppasamy</Text>
          <Text className="name">Dr. S. Arun Karthick</Text>
        </div>
      </div>
      <hr />
      <div className="others">
        <Text className="title">Scientific Advisory Committee</Text>
        <div>
          <Text className="name">Dr. Ju-Yi Lee, NCU, Taiwan</Text>
          <Text className="name">Dr. Shu -San Hsiau, NCU, Taiwan</Text>
          <Text className="name">
            Dr. Koichi Kakimoto, Kyusu University, Japan
          </Text>
          <Text className="name">
            Dr. G. Tamizhmani, Arizona State University, USA
          </Text>
          <Text className="name">
            Dr. Daniel Vizman, West Univ of Timisoara, Romania
          </Text>
          <Text className="name">
            Dr. Matias Velazquez, Université Grenoble Alpes, France
          </Text>
          <Text className="name">Dr. Vikram Kumar, IIT Delhi, India</Text>
          <Text className="name">
            Dr. Talid R. Sinno, University of Pennsylvania, USA
          </Text>
          <Text className="name">
            Dr. Noritaka Usami, Nagoya University, Japan
          </Text>
          <Text className="name">
            Dr. K. Gunasekaran, University of Madras, India
          </Text>
          <Text className="name">
            Dr. Simon Brandon, -Israel Institute of Technology
          </Text>
          <Text className="name">
            Dr. Mathis Plapp, Ecole Polytechnique, France
          </Text>
          <Text className="name">
            Dr. Lijun Liu, Xi'an Jiaotong University, China
          </Text>
          <Text className="name">
            Dr. Kozo Fujiwara, Tohoku University, Japan
          </Text>
          <Text className="name">Dr. J.K. Rath, IITM, Chennai, India</Text>
          <Text className="name">
            Dr. B. S. Sreeja, Anna University, Chennai
          </Text>
          <Text className="name">
            Dr. Vladimir Kalaev, Soft-Impact, Ltd., Russia
          </Text>
          <Text className="name">
            Dr. Toru Ujihara, Nagoya University, Japan
          </Text>
          <Text className="name">Dr. Kentaro Kutsukake, RIKEN, Japan</Text>
          <Text className="name">
            Dr. S. Gokul Raj, Pondicherry University, India
          </Text>
          <Text className="name">Dr. Wolfram Miller, IKZ, Germany</Text>
          <Text className="name">Dr. Abhik Choudhury, IISc, Bangalore</Text>
          <Text className="name">
            Dr. Madhav Ranganathan, IIT Kanpur, India
          </Text>
          <Text className="name">
            Dr. Rita John, University of Madras, Chennai
          </Text>
          <Text className="name">Dr. Kaspars Dadzis, IKZ, Germany</Text>
          <Text className="name">Dr. Andrey Smirnov, STR Belgrade, Serbia</Text>
          <Text className="name">Dr. Jiban Podder, BUET, Bangladesh</Text>
          <Text className="name">
            Dr. M. Prasath, PG Extn. Periyar University, Dharmapuri
          </Text>
          <Text className="name">
            Dr. Anil Kottantharayil, IITB, Mumbai India
          </Text>
          <Text className="name">
            Dr. D. Velmurugan, University of Madras, Chennai
          </Text>
          <Text className="name">
            Dr. G. Ramalingam, Alagappa University, Karaikudi
          </Text>
          <Text className="name">Dr. D. Mohit Tyagi, BARC, Mumbai</Text>
          <Text className="name">
            Dr. K. Srinivasan, Bharathiar University, Coimbatore
          </Text>
          <Text className="name">Dr. P. Ravindran, CUTN, Thiruvarur</Text>
          <Text className="name">Dr. A. Shashwati Sen, BARC, Mumbai</Text>
          <Text className="name">Dr. S. Sudhakar, CSIR-CECRI, Karaikudi</Text>
          <Text className="name">Dr. N. Vijayan, NPL, Delhi</Text>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
