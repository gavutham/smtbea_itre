import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdEventNote } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

const IETE = [
  `     Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO). The Institution has also been notified as an Educational Institution of National Eminence by the Government of India.`,
  `     IETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive. The Institution is managed through various Committees and Boards nominated by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed by respective Executive Committees. To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members.`,
];

const CHENNAI_CENTER = [
  `Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.`,
  `The Centre assigns top priority to the basic need for ‘education transformation’ in keeping pace with time, and aims at to develop the highest quality of manpower to cater to the needs & expectations of industry, R&D and educational institutions, with higher degree of employability for today and tomorrow.`,
];

const GOALS = [
  {
    title: "Vision",
    desc: "Reaching the un-reached and empowering the youth through Technical Education and Skill Development.",
    img: "/vision.jpg",
  },
  {
    title: "Mission",
    desc: "Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.",
    img: "/mission.png",
  },
  {
    title: "Motives",
    desc: "IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme.",
    img: "/motive.jpg",
  },
];

const COUNTS = [
  {
    title: "Students",
    count: 12060,
    icon: PiStudent,
  },
  {
    title: "Staff",
    count: 13592,
    icon: GiTeacher,
  },
  {
    title: "Events",
    count: 42,
    icon: MdEventNote,
  },
  {
    title: "Colleges",
    count: 15,
    icon: BiBuildings,
  },
];

const FOCUS_AREAS = [
  "Semiconductor materials",
  "PV materials",
  "Quantum Materials",
  "Multi-Functional Materials",
  "Optical and Electronic Materials",
  "Biocompatible materials",
  "Superconducting materials",
  "Materials for Energy conversion and storage",
  "Biosensors for Healthcare",
  "Electrochemical sensors",
  "Smart structures",
  "Nanosensors",
  "Nanostructured materials based sensors",
  "Flexible sensors",
  "Materials for actuators",
  "Magnetic Materials",
  "Microfluidic sensors",
  "Modeling & Simulation",
];

export { IETE, CHENNAI_CENTER, GOALS, COUNTS, FOCUS_AREAS };
