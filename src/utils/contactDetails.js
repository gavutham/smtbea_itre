import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

const DETAILS = [
  {
    title: "Address for communication",
    description:
      "Dr. M.Srinivasan, SSN RC, Department of Physics, SSNCE, Chennai.\nDr. A. Murugesan, Department of Chemistry, SSNCE, Chennai.",
    icon: MdLocationOn,
    link: "https://maps.app.goo.gl/CojyR9V49cFfGuzX8"
  },
  {
    title: "Email",
    description: "srinivasanm@ssn.edu.in\nmurugesana@ssn.edu.in ",
    icon: MdEmail,
    link: "mailto:srinivasanm@ssn.edu.in"
  },
  {
    title: "Call",
    description: "+91 8939316518\n+91 7904040832",
    icon: MdCall,
    link: "tel:+918939316518"
  },
];

export default DETAILS;
